<?php

namespace Modules\WeddingApp\Entities;

use Illuminate\Database\Eloquent\Model;

class WeddingTranslation extends Model
{
    public $timestamps = false;
    protected $fillable = [];
    protected $table = 'weddingapp__wedding_translations';
}
