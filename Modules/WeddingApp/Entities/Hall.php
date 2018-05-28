<?php

namespace Modules\WeddingApp\Entities;

use Dimsav\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;

class Hall extends Model
{
    use Translatable;

    protected $table = 'weddingapp__halls';
    public $translatedAttributes = [];
    protected $fillable = [];
}
