<?php

namespace Modules\WeddingApp\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Modules\WeddingApp\Entities\Wedding;
use Modules\WeddingApp\Http\Requests\CreateWeddingRequest;
use Modules\WeddingApp\Http\Requests\UpdateWeddingRequest;
use Modules\WeddingApp\Repositories\WeddingRepository;
use Modules\Core\Http\Controllers\Admin\AdminBaseController;

class WeddingController extends AdminBaseController
{
    /**
     * @var WeddingRepository
     */
    private $wedding;

    public function __construct(WeddingRepository $wedding)
    {
        parent::__construct();

        $this->wedding = $wedding;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        //$weddings = $this->wedding->all();

        return view('weddingapp::admin.weddings.index', compact(''));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return view('weddingapp::admin.weddings.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  CreateWeddingRequest $request
     * @return Response
     */
    public function store(CreateWeddingRequest $request)
    {
        $this->wedding->create($request->all());

        return redirect()->route('admin.weddingapp.wedding.index')
            ->withSuccess(trans('core::core.messages.resource created', ['name' => trans('weddingapp::weddings.title.weddings')]));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Wedding $wedding
     * @return Response
     */
    public function edit(Wedding $wedding)
    {
        return view('weddingapp::admin.weddings.edit', compact('wedding'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Wedding $wedding
     * @param  UpdateWeddingRequest $request
     * @return Response
     */
    public function update(Wedding $wedding, UpdateWeddingRequest $request)
    {
        $this->wedding->update($wedding, $request->all());

        return redirect()->route('admin.weddingapp.wedding.index')
            ->withSuccess(trans('core::core.messages.resource updated', ['name' => trans('weddingapp::weddings.title.weddings')]));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Wedding $wedding
     * @return Response
     */
    public function destroy(Wedding $wedding)
    {
        $this->wedding->destroy($wedding);

        return redirect()->route('admin.weddingapp.wedding.index')
            ->withSuccess(trans('core::core.messages.resource deleted', ['name' => trans('weddingapp::weddings.title.weddings')]));
    }
}
