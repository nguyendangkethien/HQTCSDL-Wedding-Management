<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWeddingAppHallTranslationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('weddingapp__hall_translations', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            // Your translatable fields

            $table->integer('hall_id')->unsigned();
            $table->string('locale')->index();
            $table->unique(['hall_id', 'locale']);
            $table->foreign('hall_id')->references('id')->on('weddingapp__halls')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('weddingapp__hall_translations', function (Blueprint $table) {
            $table->dropForeign(['hall_id']);
        });
        Schema::dropIfExists('weddingapp__hall_translations');
    }
}
