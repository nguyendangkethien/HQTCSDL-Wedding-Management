<?php

namespace Modules\WeddingApp\Entities;

use Dimsav\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;

class Wedding extends Model
{
    use Translatable;

    protected $table = 'weddingapp__weddings';
    public $translatedAttributes = [];
    protected $fillable = [];
}
