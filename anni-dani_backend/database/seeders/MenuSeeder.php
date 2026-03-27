<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\MenuItem;
use Illuminate\Support\Facades\File;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Path to the JSON files in the frontend
        $directory = '/home/devgenius/Main-Dev/aani-dani/aani-dani/public/data/main_data_menu';
        
        if (!File::isDirectory($directory)) {
            $this->command->error("Directory not found: $directory");
            return;
        }

        $files = File::files($directory);

        foreach ($files as $file) {
            if ($file->getExtension() !== 'json') {
                continue;
            }

            $content = File::get($file->getRealPath());
            $data = json_decode($content, true);

            if (!$data || !isset($data['categories'])) {
                continue;
            }

            $sourceImage = $data['source_image'] ?? null;

            foreach ($data['categories'] as $catData) {
                $categoryName = $catData['category'] ?? 'Uncategorized';
                
                // Using updateOrCreate to avoid duplicates and update source_image if needed
                $category = Category::updateOrCreate(
                    ['name' => $categoryName],
                    ['source_image' => $sourceImage]
                );

                if (isset($catData['items'])) {
                    foreach ($catData['items'] as $itemData) {
                        MenuItem::updateOrCreate(
                            [
                                'category_id' => $category->id,
                                'name' => $itemData['name'],
                            ],
                            [
                                'price' => $itemData['price'] ?? 0,
                                'description' => $itemData['description'] ?? '',
                            ]
                        );
                    }
                }
            }
        }
    }
}
