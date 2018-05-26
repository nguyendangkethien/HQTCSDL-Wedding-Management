<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWeddingAppWeddingTranslationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('weddingapp__wedding_translations', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            // Your translatable fields

            $table->integer('wedding_id')->unsigned();
            $table->string('locale')->index();
            $table->unique(['wedding_id', 'locale']);
            $table->foreign('wedding_id')->references('id')->on('weddingapp__weddings')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('weddingapp__wedding_translations', function (Blueprint $table) {
            $table->dropForeign(['wedding_id']);
        });
        Schema::dropIfExists('weddingapp__wedding_translations');
    }
}
