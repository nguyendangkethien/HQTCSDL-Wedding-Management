<?php

namespace Modules\WeddingApp\Providers;

use Illuminate\Support\ServiceProvider;
use Modules\Core\Traits\CanPublishConfiguration;
use Modules\Core\Events\BuildingSidebar;
use Modules\Core\Events\LoadingBackendTranslations;
use Modules\WeddingApp\Events\Handlers\RegisterWeddingAppSidebar;

class WeddingAppServiceProvider extends ServiceProvider
{
    use CanPublishConfiguration;
    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
    protected $defer = false;

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        $this->registerBindings();
        $this->app['events']->listen(BuildingSidebar::class, RegisterWeddingAppSidebar::class);

        $this->app['events']->listen(LoadingBackendTranslations::class, function (LoadingBackendTranslations $event) {
            $event->load('weddings', array_dot(trans('weddingapp::weddings')));
            // append translations

        });
    }

    public function boot()
    {
        $this->publishConfig('weddingapp', 'permissions');

        $this->loadMigrationsFrom(__DIR__ . '/../Database/Migrations');
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return array();
    }

    private function registerBindings()
    {
        $this->app->bind(
            'Modules\WeddingApp\Repositories\WeddingRepository',
            function () {
                $repository = new \Modules\WeddingApp\Repositories\Eloquent\EloquentWeddingRepository(new \Modules\WeddingApp\Entities\Wedding());

                if (! config('app.cache')) {
                    return $repository;
                }

                return new \Modules\WeddingApp\Repositories\Cache\CacheWeddingDecorator($repository);
            }
        );
// add bindings

    }
}
