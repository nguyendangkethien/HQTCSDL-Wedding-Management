<template>
	<div>
        <div class="filter-heading form-inline" style="padding-top:10px">
            <form class="search-list">
                <slot name="layout-filter-condition"></slot>
            </form>
        </div>
        <div class="clearfix"></div>
        <div class="form-group">
            <slot name="modal-button-create"></slot>
        </div>
        <div class="table-responsive table-loading">
            <div class="cm-loading-bg"></div><div class="cm-loading"><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i></div>
            <slot name="layout-table"></slot>
        </div>
        <slot name="layout-modal"></slot>
	</div>
</template>
<script>
    export default {
        props : [''],
        methods: {
            test(){
            }
        }
    }
</script>