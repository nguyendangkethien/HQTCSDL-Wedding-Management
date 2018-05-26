<?php

namespace Modules\WeddingApp\Repositories\Cache;

use Modules\WeddingApp\Repositories\WeddingRepository;
use Modules\Core\Repositories\Cache\BaseCacheDecorator;

class CacheWeddingDecorator extends BaseCacheDecorator implements WeddingRepository
{
    public function __construct(WeddingRepository $wedding)
    {
        parent::__construct();
        $this->entityName = 'weddingapp.weddings';
        $this->repository = $wedding;
    }
}
