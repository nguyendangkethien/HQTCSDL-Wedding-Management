<?php

namespace Modules\WeddingApp\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Modules\WeddingApp\Entities\Hall;
use Modules\WeddingApp\Http\Requests\CreateHallRequest;
use Modules\WeddingApp\Http\Requests\UpdateHallRequest;
use Modules\WeddingApp\Repositories\HallRepository;
use Modules\Core\Http\Controllers\Admin\AdminBaseController;

class HallController extends AdminBaseController
{
    /**
     * @var HallRepository
     */
    private $hall;

    public function __construct(HallRepository $hall)
    {
        parent::__construct();

        $this->hall = $hall;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        //$halls = $this->hall->all();

        return view('weddingapp::admin.halls.index', compact(''));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return view('weddingapp::admin.halls.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  CreateHallRequest $request
     * @return Response
     */
    public function store(CreateHallRequest $request)
    {
        $this->hall->create($request->all());

        return redirect()->route('admin.weddingapp.hall.index')
            ->withSuccess(trans('core::core.messages.resource created', ['name' => trans('weddingapp::halls.title.halls')]));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Hall $hall
     * @return Response
     */
    public function edit(Hall $hall)
    {
        return view('weddingapp::admin.halls.edit', compact('hall'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Hall $hall
     * @param  UpdateHallRequest $request
     * @return Response
     */
    public function update(Hall $hall, UpdateHallRequest $request)
    {
        $this->hall->update($hall, $request->all());

        return redirect()->route('admin.weddingapp.hall.index')
            ->withSuccess(trans('core::core.messages.resource updated', ['name' => trans('weddingapp::halls.title.halls')]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Hall $hall
     * @return Response
     */
    public function destroy(Hall $hall)
    {
        $this->hall->destroy($hall);

        return redirect()->route('admin.weddingapp.hall.index')
            ->withSuccess(trans('core::core.messages.resource deleted', ['name' => trans('weddingapp::halls.title.halls')]));
    }
}
