<?php

namespace Modules\WeddingApp\Repositories\Cache;

use Modules\WeddingApp\Repositories\HallRepository;
use Modules\Core\Repositories\Cache\BaseCacheDecorator;

class CacheHallDecorator extends BaseCacheDecorator implements HallRepository
{
    public function __construct(HallRepository $hall)
    {
        parent::__construct();
        $this->entityName = 'weddingapp.halls';
        $this->repository = $hall;
    }
}
