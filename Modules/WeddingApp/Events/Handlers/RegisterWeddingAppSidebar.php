<?php

namespace Modules\WeddingApp\Events\Handlers;

use Maatwebsite\Sidebar\Group;
use Maatwebsite\Sidebar\Item;
use Maatwebsite\Sidebar\Menu;
use Modules\Core\Events\BuildingSidebar;
use Modules\User\Contracts\Authentication;

class RegisterWeddingAppSidebar implements \Maatwebsite\Sidebar\SidebarExtender
{
    /**
     * @var Authentication
     */
    protected $auth;

    /**
     * @param Authentication $auth
     *
     * @internal param Guard $guard
     */
    public function __construct(Authentication $auth)
    {
        $this->auth = $auth;
    }

    public function handle(BuildingSidebar $sidebar)
    {
        $sidebar->add($this->extendWith($sidebar->getMenu()));
    }

    /**
     * @param Menu $menu
     * @return Menu
     */
    public function extendWith(Menu $menu)
    {
        $menu->group(trans('core::sidebar.content'), function (Group $group) {
            $group->item('Manage Wedding Dress', function (Item $item) {
                $item->icon('fa fa-heartbeat');
                $item->weight(10);
                $item->authorize(
                     /* append */
                );
                $item->item('Manage Wedding', function (Item $item) {
                    $item->icon('fa fa-signing');
                    $item->weight(0);
                    $item->append('admin.weddingapp.wedding.create');
                    $item->route('admin.weddingapp.wedding.index');
                    $item->authorize(
                        // $this->auth->hasAccess('admin.weddingapp.wedding.index')
                    );
                });

// append
            });
        });
        return $menu;
    }
}
