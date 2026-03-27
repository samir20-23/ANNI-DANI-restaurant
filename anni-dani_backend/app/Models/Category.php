<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['name', 'source_image'];

    public function items()
    {
        return $this->hasMany(MenuItem::class);
    }
}
