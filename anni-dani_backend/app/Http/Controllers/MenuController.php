<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function index()
    {
        // Load all categories with their items
        $categories = Category::with('items')->get();

        // Format to match the frontend expectation (MenuCategory interface)
        $formatted = $categories->map(function ($category) {
            return [
                'category' => $category->name,
                'sourceImage' => $category->source_image,
                'items' => $category->items->map(function ($item) {
                    return [
                        'name' => $item->name,
                        'price' => $item->price ? (float) $item->price : null,
                        'description' => $item->description ?: null,
                    ];
                }),
            ];
        });

        return response()->json($formatted);
    }
}
