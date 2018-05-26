<template>
	<div>
		<div>
        	<div class="panel panel-border">
		        <div class="panel-heading">
		            <h3 class="panel-title">Tìm Kiếm Sảnh</h3>
		        </div>
		        <div class="panel-body">
		        	<div class="col-md-2 form-group">
		        		<b-text-field v-model="filter.id" label="STT" placeholder="STT"></b-text-field>
		        	</div>
		        	<div class="col-md-6 form-group">
		        		<b-text-field v-model="filter.name" label="Tên Sảnh" placeholder="Tên Sảnh"></b-text-field>
		        	</div>
		        	<div class="col-md-4 form-group">
                    	<b-select item-text="value" item-val="id" v-model="filter.type" label="Loại Sảnh" placeholder="Loại Sảnh" :list="hallList"></b-select>
		        	</div>
                    <div class="col-md-12 form-group">
                        <button @click="searchHall()" type="submit" class="btn btn-success btn-rounded" data-loading-text="<i class='fa fa-spinner fa-pulse fa-fw'></i> Waiting..." data-control="search">Tim Kiếm</button>
                        <button @click="clearSearch()" type="button" class="btn btn-default btn-rounded">Xóa</button>
                    </div>
		        </div>
		    </div>
		    <div class="form-group">
		    	<button type="button" class="btn btn-success m-b-sm btn-rounded" @click="createHallClickAction()">Tạo Mới Sảnh</button>
	    	   	<modal-create v-if="isCreate" :configs="configsModeCreate" @cancel-modal-create="createHallCancelAction()" @submit-modal-create="submitCreateHall()">
			        <div slot="content-body">
			        	<div class="row">
			        		<div class="col-md-6 form-group">
				        		<b-text-field v-model="createHall.name" label="Tên Sảnh" placeholder="Tên Sảnh"></b-text-field>
				        	</div>
				        	<div class="col-md-6 form-group">
		                    	<b-select item-text="value" item-val="id" v-model="createHall.type" label="Loại Sảnh" placeholder="Loại Sảnh" :list="hallType"></b-select>
				        	</div>
			        	</div>
			        	<div class="row">
			        		<div class="col-md-6 form-group">
				        		<b-telerik-numberic org-placeholder="Số Lượng Bàn Tối Đa" null-placeholder="0" v-model="createHall.price_min" placeholder="Số Lượng Bàn Tối Đa" label="Số Lượng Bàn Tối Đa" id="" affix=" Bàn" max-length="9" interrupt="," type="'suffix'" rounding-decimal="0"></b-telerik-numberic>
				        	</div>
				    		<div class="col-md-6 form-group">
				        		<b-telerik-numberic org-placeholder="Đơn Giá Bàn Tối Thiểu" null-placeholder="0" v-model="createHall.max_num_table" placeholder="Đơn Giá Bàn Tối Thiểu" label="Đơn Giá Bàn Tối Thiểu" id="" affix=" đ" max-length="9" interrupt="," type="'suffix'" rounding-decimal="0"></b-telerik-numberic>
				        	</div>
			        	</div>
			        	<div class="row">
				        	<div class="col-md-12 form-group">
				    			<b-textarea placeholder="Ghi Chú" label="Ghi Chú" v-model="createHall.note"></b-textarea>
				    		</div>
			        	</div>
			        </div>
		   		</modal-create>
		    </div>
		   	<div class="form-group">
	    		<div class="table-responsive table-loading">
			      	<table id="hall-management-table" class="tbl2 display table" style="width: 100%; cellspacing: 0;">
			            <thead>
			              	<tr>
				                <th>STT</th>
				                <th>Tên Sảnh</th>
				                <th>Loại Sảnh</th>
				                <th>Số Lượng Bàn Tối Đa</th>
				                <th>Đơn Giá Bàn Tối Thiểu</th>
				                <th>Ghi Chú</th>
				                <th>Trạng Thái</th>
			              	</tr>
			            </thead>
			            <tfoot>
			              	<tr>
				                <th>STT</th>
				                <th>Tên Sảnh</th>
				                <th>Loại Sảnh</th>
				                <th>Số Lượng Bàn Tối Đa</th>
				                <th>Đơn Giá Bàn Tối Thiểu</th>
				                <th>Ghi Chú</th>
				                <th>Trạng Thái</th>
			              	</tr>
			            </tfoot>
			      	</table>
			    </div>
		    </div>
	    <loadding v-show="isLoadding"></loadding>
        </div>
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
	    	let locationPath = this.$route.path
	    	return{
	    		isCreate : false,
	    		isLoadding : false,
	    		createHall : {
	    			name : null,
					type : null,
					price_min : null,
					max_num_table : null,
					note : null,
					status : true,
	    		},
	    		configsModeCreate : {
					modeId : 'create-hall',
					title  : 'Thêm Mới Sảnh'
				},
				filter : {
					id : null,
					name : null,
					type : null,
				},
				hallType :[
					{
						'id' : 1,
						'value' : 'Sảnh Thường'
					},
					{
						'id' : 2,
						'value' : 'Sảnh Vip'
					},
					{
						'id' : 3,
						'value' : 'Sảnh V-Vip'
					}
				],
				hallList : [
					{
						id : 1,
						value : 'Sảnh Hoa Thiên Tuế' 
					},
					{
						id : 1,
						value : 'Vườn Thiên Thai' 
					},
					{
						id : 1,
						value : 'Sảnh Thiên Hà Đỏ' 
					},
					{
						id : 1,
						value : 'Sảnh Mặt Trăng Xanh' 
					},
				],
				hallManageData : [
					{
						"id" : "1",
						"name" : "Sảnh Hoa Thiên Tuế",
						"type" : "Vip",
						"price_min" : "300 triệu",
						"max_num_table" : "70 Bàn",
						"note" : "Ghi Chú",
						"status" : "Còn Trống",
					},
					{
						"id" : "2",
						"name" : "Sảnh Đồi Hoa Mặt Trời",
						"type" : "Vip",
						"price_min" : "300 triệu",
						"max_num_table" : "60 Bàn",
						"note" : "Ghi Chú",
						"status" : "Đã Được Đặt",
					}
				],
	    	}
	    },
	    mounted(){
	    	this.getCommonData()
	    	this.reRenderTable(this.hallManageData)
	    },
	    beforeDestroy(){
        },
	    watch:{
	 
	    },
	    methods: {
	    	createHallClickAction(){
	    		this.isCreate = true
	    		this.$nextTick(function(){
	    			$('#' + this.configsModeCreate.modeId).modal('show')
	    		})
	    	},
	    	createHallCancelAction(){
	    		this.isCreate = false
	    		this.$nextTick(function(){
            		$('.modal-backdrop.fade').css("display", "none")
	    		})
	    	},
	    	reRenderTable(data){
             	$("#hall-management-table").DataTable({
                    data: data,
                    "aaSorting": [],
                    columns: [
                        {
                            data: null, render: function (data) {
                              	if(locationPath.indexOf('/edit-hall/') == -1)
		                            return `<a href="./weddingapp/weddings#`+ locationPath + `/edit-hall/` + data.id + `" class="btn-edit-contact" style="display:inline-block; cursor:pointer">` + fullName + `</a>`;
		                        else
		                            return `<a href="./weddingapp/weddings#`+ locationPath + `" class="btn-edit-contact" style="display:inline-block; cursor:pointer">` + fullName + `</a>`;
		                    }
                        },
                        {
                            data: null, render: function (data) {
                              	if(locationPath.indexOf('/edit-hall/') == -1)
		                            return `<a href="./weddingapp/weddings#`+ locationPath + `/edit-hall/` + data.name + `" class="btn-edit-contact" style="display:inline-block; cursor:pointer">` + fullName + `</a>`;
		                        else
		                            return `<a href="./weddingapp/weddings#`+ locationPath + `" class="btn-edit-contact" style="display:inline-block; cursor:pointer">` + fullName + `</a>`;
		                    }
                        },
                        {
                            data: null,
                            render: function (data) {
                                return data.type;
                            }
                        },
                        {
                            data: null, render: function (data) {
                                return data.price_min;
                            }
                        },
                        {
                            data: null, render: function (data) {
                                return data.max_num_table;
                            }
                        },
                        {
                            data: null, render: function (data) {
                                return data.note.substring(0, 25);
                            }
                        },
                        {
                            data: null, render: function (data) {
                                return data.status;
                            }
                        },
                    ],
                    select: true,
                    destroy: true,
                    responsive: true
                });
            },
            getCommonData(){
            	this.isLoadding = true
            	this.$http.get(API.HALL_MANAGEMENT_GET_COMMON_DATA, { }).then(
                function (success) {
                },
                function (error) {
                }).then(function(){
                	this.isLoadding = false
                })
            },
            clearSearch(){
            	this.filter = {
					id : null,
					name : null,
					type : null,
				}
				this.searchHall()
            },
            searchHall(){
            	this.isLoadding = true
            	let data = this.filter
            	this.$http.get(API.HALL_MANAGEMENT_SEARCH, { params : data }).then(
                function (success) {
                },
                function (error) {
                }).then(function(){
            		this.isLoadding = false
                })
            },
            submitCreateHall(data){
            	this.isLoadding = true
            	this.$http.post(API.HALL_MANAGEMENT_CREATE, this.createHall ).then(success => {
                    toastr.success('Create Sucessfully.')
                }, response => {
                }).then(function(){
                	this.isLoadding = false
                })
            }
	    },
	}
</script>