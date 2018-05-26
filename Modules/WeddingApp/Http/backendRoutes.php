<?php

use Illuminate\Routing\Router;
/** @var Router $router */

$router->group(['prefix' =>'/weddingapp'], function (Router $router) {
    $router->bind('wedding', function ($id) {
        return app('Modules\WeddingApp\Repositories\WeddingRepository')->find($id);
    });
    $router->get('weddings', [
        'as' => 'admin.weddingapp.wedding.index',
        'uses' => 'WeddingController@index',
        'middleware' => 'can:weddingapp.weddings.index'
    ]);
    $router->get('weddings/create', [
        'as' => 'admin.weddingapp.wedding.create',
        'uses' => 'WeddingController@create',
        'middleware' => 'can:weddingapp.weddings.create'
    ]);
    $router->post('weddings', [
        'as' => 'admin.weddingapp.wedding.store',
        'uses' => 'WeddingController@store',
        'middleware' => 'can:weddingapp.weddings.create'
    ]);
    $router->get('weddings/{wedding}/edit', [
        'as' => 'admin.weddingapp.wedding.edit',
        'uses' => 'WeddingController@edit',
        'middleware' => 'can:weddingapp.weddings.edit'
    ]);
    $router->put('weddings/{wedding}', [
        'as' => 'admin.weddingapp.wedding.update',
        'uses' => 'WeddingController@update',
        'middleware' => 'can:weddingapp.weddings.edit'
    ]);
    $router->delete('weddings/{wedding}', [
        'as' => 'admin.weddingapp.wedding.destroy',
        'uses' => 'WeddingController@destroy',
        'middleware' => 'can:weddingapp.weddings.destroy'
    ]);
// append

});
