<template>
	<div> 
        <div class="filter-heading form-inline" style="padding-top:10px" :id="layoutSearchId">
            <form class="search-list">
                <slot name="layout-filter-condition"></slot>
            </form>
            <slot name="search">
                <div class="form-group">
                    <button type="submit" class="btn btn-success btn-rounded" data-loading-text="<i class='fa fa-spinner fa-pulse fa-fw'></i> Waiting..." data-control="search" @click="$emit('submit-search')">Search</button>
                    <button type="button" class="btn btn-default btn-rounded" @click="$emit('clear-search')">Clear</button>
                </div>
            </slot>
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
        props : {
            layoutSearchId : {
                type: String,
                default: function () {
                    return null
                }
            }
        }
    }
</script>