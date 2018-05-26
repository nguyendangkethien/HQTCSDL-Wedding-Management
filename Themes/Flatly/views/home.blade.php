@extends('layouts.master')

@section('title')
    {{ $page->title }} | @parent
@stop
@section('meta')
    <meta name="title" content="{{ $page->meta_title}}" />
    <meta name="description" content="{{ $page->meta_description }}" />
@stop

@section('content')
	<h1>Đồ án môn Hệ Quản Trị Cơ Sở Dữ Liệu</h1>
	<br>
	<h1>Thành Viên Nhóm : </h1>
	<br>
	<h3>Nguyễn Đăng Kế Thiện - 13520821</h3>
	<br>
	<h3>Tạ Công Duy - 13520xxx</h3>
	<br>
	<h3>Shiro Nguyễn - 13520xxx</h3>
@stop
