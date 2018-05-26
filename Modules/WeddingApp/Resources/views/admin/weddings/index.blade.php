@extends('layouts.master')

@section('content-header')
    <h1>
        {{ trans('weddingapp::weddings.title.weddings') }}
    </h1>
    <ol class="breadcrumb">
        <li><a href="{{ route('dashboard.index') }}"><i class="fa fa-dashboard"></i> {{ trans('core::core.breadcrumb.home') }}</a></li>
        <li class="active">{{ trans('weddingapp::weddings.title.weddings') }}</li>
    </ol>
@stop

@section('content')
    <script>
        var API = {
            HALL_MANAGEMENT_GET_COMMON_DATA : '#/get-data',
            HALL_MANAGEMENT_GET_LIST : '#/get-list',
            HALL_MANAGEMENT_SEARCH : '#/search',
            HALL_MANAGEMENT_CREATE : '#/create',
            HALL_MANAGEMENT_UPDATE : '#/update',

            WEDDING_DRESS_MANAGEMENT_GET_COMMON_DATA : '#/get-data',
            WEDDING_DRESS_MANAGEMENT_GET_LIST : '#/get-list',
            WEDDING_DRESS_MANAGEMENT_SEARCH : '#/search',
            WEDDING_DRESS_MANAGEMENT_ORDER : '#/order',
            WEDDING_DRESS_MANAGEMENT_UPDATE : '#/update',
        }
    </script>
    <div id="wedding-dress-app">
        <!-- <App></App> -->
    </div>
    @include('core::partials.delete-modal')
@stop

@section('scripts')
    {!! Theme::script('js/manage-wedding/manage-wedding.min.js') !!}
@stop

@section('footer')
    <a data-toggle="modal" data-target="#keyboardShortcutsModal"><i class="fa fa-keyboard-o"></i></a> &nbsp;
@stop
@section('shortcuts')
    <dl class="dl-horizontal">
        <dt><code>c</code></dt>
        <dd>{{ trans('weddingapp::weddings.title.create wedding') }}</dd>
    </dl>
@stop

@push('js-stack')
    <script type="text/javascript">
        $( document ).ready(function() {
            $(document).keypressAction({
                actions: [
                    { key: 'c', route: "<?= route('admin.weddingapp.wedding.create') ?>" }
                ]
            });
        });
    </script>
    <?php $locale = locale(); ?>
    <script type="text/javascript">
        $(function () {
            $('.data-table').dataTable({
                "paginate": true,
                "lengthChange": true,
                "filter": true,
                "sort": true,
                "info": true,
                "autoWidth": true,
                "order": [[ 0, "desc" ]],
                "language": {
                    "url": '<?php echo Module::asset("core:js/vendor/datatables/{$locale}.json") ?>'
                }
            });
        });
    </script>
@endpush
