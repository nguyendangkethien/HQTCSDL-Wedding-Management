<template>
	<div class="row" style="margin-top: 40px">
		<div class="col-md-12">
              <div class="panel panel-white"> 
                <div class="panel-body">
                    <div class="panel panel-border">
                        <div class="panel-heading">
                            <h3 class="panel-title"><slot name="search-title">Search Title</slot></h3>
                        </div>
                        <div class="panel-body" :id="layoutSearchId">
                            <form class="search-list">
                                <slot name="search-layout"></slot>
                            </form>
                            <div class="row">
                                <div class="col-md-12">
                                    <button type="submit" class="btn btn-success btn-rounded" data-loading-text="<i class='fa fa-spinner fa-pulse fa-fw'></i> Waiting..." data-control="search" @click="$emit('submit-search')">Search</button>
                                    <button type="button" class="btn btn-default btn-rounded" @click="$emit('clear-search')">Clear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="filter-heading form-inline p-0">
                        <slot name="button-create"></slot>
                    </div>
                 
                    <div class="table-responsive table-loading">
                        <div class="cm-loading-bg"></div><div class="cm-loading"><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i></div>
                        <slot name="result-table"></slot>
                    </div>
                </div>
              </div>
        </div>
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
