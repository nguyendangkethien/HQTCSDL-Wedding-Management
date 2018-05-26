<template>
	<div>
		<div class="form-group">
			<h2>Báo Cáo Doanh Số</h2>
		</div>
	    <div class="row form-group">
	    	<div class="col-md-12">
		    	<h3>Tháng: 3</h3>
	    	</div>
	    	<div class="col-md-8">
		    	<h3>Tổng Doanh Thu: 500 triệu</h3>
	    	</div>
	    	<div class="col-md-4 text-right">
	    		<button type="button" class="btn btn-info  m-b-sm btn-rounded">Xuất File Excell <i class="fa fa-file-excel-o"></i></button>
	    	</div>
	    </div>
	   	<div class="form-group">
    		<div class="table-responsive table-loading">
		      	<table id="report-management-table" class="tbl2 display table" style="width: 100%; cellspacing: 0;">
		            <thead>
		              	<tr>
			                <th>STT</th>
			                <th>Ngày</th>
			                <th>Số Lượng Tiệc Cưới</th>
			                <th>Doanh Thu</th>
			                <th>Tỉ Lệ</th>
		              	</tr>
		            </thead>
		            <tfoot>
		              	<tr>
			                <th>STT</th>
			                <th>Ngày</th>
			                <th>Số Lượng Tiệc Cưới</th>
			                <th>Doanh Thu</th>
			                <th>Tỉ Lệ</th>
		              	</tr>
		            </tfoot>
		      	</table>
		    </div>
	    </div>
	    <loadding v-show="isLoadding"></loadding>
	</div>
</template>
<script>
	import loadding from '@/../../core/components/Loadding.vue'
    import modalCreate from '@/../../core/components/partials/ModalCreate.vue'
	export default{
		components: {
			modalCreate,
	        loadding,
	    },
		data(){
	    	return{
	    		reportData : [
	    			{
	    				id : 1, 
	    				date : "03/05/2018",
	    				quantity : 7,
	    				revenue  : "700 triệu",
	    				rate : "100%"
	    			},
	    			{
	    				id : 1, 
	    				date : "09/05/2018",
	    				quantity : 4,
	    				revenue  : "400 triệu",
	    				rate : "100%"
	    			},
	    			{
	    				id : 1, 
	    				date : "14/05/2018",
	    				quantity : 8,
	    				revenue  : "800 triệu",
	    				rate : "100%"
	    			},
	    			{
	    				id : 1, 
	    				date : "19/05/2018",
	    				quantity : 9,
	    				revenue  : "900 triệu",
	    				rate : "100%"
	    			}
	    		],
	    	}
	    },
	    mounted(){
	    	this.reRenderTable(this.reportData)
	    },
	    beforeDestroy(){
        },
	    watch:{
	 
	    },
	    methods: {
	    	reRenderTable(data){
             	$("#report-management-table").DataTable({
                    data: data,
                    "aaSorting": [],
                    columns: [
                        {
                            data: null, render: function (data) {
                              	return data.id;
                            }
                        },
                        {
                            data: null, render: function (data) {
                              	return data.date;
                            }
                        },
                        {
                            data: null,
                            render: function (data) {
                                return data.quantity;
                            }
                        },
                        {
                            data: null, render: function (data) {
                                return data.revenue;
                            }
                        },
                        {
                            data: null, render: function (data) {
                                return data.rate;
                            }
                        },
                    ],
                    select: true,
                    destroy: true,
                    responsive: true
                });
            },
	    },
	}
</script>