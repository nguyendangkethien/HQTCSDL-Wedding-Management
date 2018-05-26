<template>
	<div class="row">
	    <div class="col-md-12">
	        <div class="panel panel-white">
	            <div class="panel-body">
	                <div class="panel-heading full-height">
	                    <h2 class="m-t-xxs"><slot name="title"></slot></h2>
	                </div>
	                <div class="panel panel-border">
	                    <div class="panel-heading">
	                        <h3 class="panel-title">Filter</h3>
	                    </div>
	                    <div class="panel-body">
	                    	<form class="search-report">
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
	                <div class="table-responsive m-b-lg report-table">
						<div class="dt-export btn-group" v-show="tableData.length == 0">
				            <button type="button"  disabled="disabled"  class="btn btn-default btn-rounded">PDF</button>
				            <button type="button"  disabled="disabled" class="btn btn-default btn-rounded">Excel</button>
				        </div>
				        <div class="dt-export btn-group" v-show="tableData.length > 0">
				            <button type="button"  @click="exportData('pdf')" class="btn btn-default btn-rounded">PDF</button>
				            <button type="button" @click="exportData('excel')"  class="btn btn-default btn-rounded">Excel</button>
				        </div>
	                    <slot name="result-table"></slot>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
</template>
<script>
	export default {
		props: ['url-export', 'search-model','table-data'],

		methods: {
			// We must define urlExport for exportData function work correctly
			exportData(type = 'excel'){
	            if(this.urlExport != undefined){
	                let urlExport = this.urlExport + '&type=' + type + '&filters=' + JSON.stringify(this.searchModel)
	                window.open(urlExport,'_blank');
	            }
				this.$emit('export-data', type)
	        },
	       
		}
	}
</script>
<style>
.report-table{
	position: relative;
}
.report-table .dt-export{
	position: absolute;
	z-index:11;
	top: 16px;
    left: 50%;
    transform: translate(-50%, -50%);
}

/*Format datatable scroll x*/
.dataTables_scrollBody {
    z-index: 0;
    bottom: 30px;
    position: relative;
}

.dataTables_scrollBody thead {
    opacity: 0;
}

.dataTables_scrollHead{
    z-index: 10;
}

.dataTables_scrollFoot {
    bottom: 30px;
    position: relative;
}

.dataTables_scrollBody tfoot {
    opacity: 0;
    /*visibility: hidden;*/
/*    width: 100%;
    position: absolute;*/
}

table#dynamicTable {
    /*position: relative;*/
}

</style>
