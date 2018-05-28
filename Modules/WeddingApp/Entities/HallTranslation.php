<?php

namespace Modules\WeddingApp\Entities;

use Illuminate\Database\Eloquent\Model;

class HallTranslation extends Model
{
    public $timestamps = false;
    protected $fillable = [];
    protected $table = 'weddingapp__hall_translations';
}
