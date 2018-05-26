@extends('layouts.master')

@section('content-header')
    <h1>
        {{ trans('dashboard::dashboard.name') }}
    </h1>
@stop

@section('styles')

@stop

@section('content')
    <!-- <div class="row">
        <div class="col-md-12">
            @if (setting('dashboard::welcome-enabled') === '1')
                <div class="box box-primary">
                    <div class="box-header">
                        <h3 class="box-title">
                            @setting('dashboard::welcome-title')
                        </h3>
                    </div>
                    <div class="box-body">
                        <p>@setting('dashboard::welcome-description')</p>
                    </div>
                    @if (setting('core::site-name') === '')
                    <div class="box-footer">
                        <a class="btn btn-primary btn-flat" href="{{ route('dashboard.module.settings', 'core') }}">
                            <i class="fa fa-cog"></i> {{ trans('dashboard::dashboard.configure your website') }}
                        </a>
                        <a class="btn btn-default btn-flat" href="{{ route('admin.page.page.index') }}">
                            {{ trans('dashboard::dashboard.add pages') }}
                        </a>
                        <a class="btn btn-default btn-flat" href="{{ route('admin.menu.menu.index') }}">
                            {{ trans('dashboard::dashboard.add menus') }}
                        </a>
                    </div>
                    @endif
                </div>
            @endif
        </div>
    </div> -->
    <div class="col-md-12 text-center">
        <h1>Đồ án môn Hệ Quản Trị Cơ Sở Dữ Liệu</h1>
        <br>
        <h1>Thành Viên Nhóm : </h1>
        <br>
        <h3>Nguyễn Đăng Kế Thiện - 13520821</h3>
        <br>
        <h3>Tạ Công Duy - 13520xxx</h3>
        <br>
        <h3>Shiro Nguyễn - 13520xxx</h3>
    </div>
@stop
