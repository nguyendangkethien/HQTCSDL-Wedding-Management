<template>
	<div>
		<div>
        	<div class="panel panel-border">
		        <div class="panel-heading">
		            <h3 class="panel-title">Tra Cứu Tiệc Cưới</h3>
		        </div>
		        <div class="panel-body">
			        	<div class="col-md-2 form-group">
				        	<b-telerik-numberic org-placeholder="ID" null-placeholder="0" v-model="filter.id" placeholder="ID" label="ID" affix="" max-length="6" interrupt=" " type="'suffix'" rounding-decimal="0"></b-telerik-numberic>
			        	</div>
			        	<div class="col-md-2 form-group">
			        		<b-text-field v-model="filter.phone_number" label="Số Điện Thoại" placeholder="Số Điện Thoại"></b-text-field>
			        	</div>
			        	<div class="col-md-4 form-group">
			        		<b-text-field v-model="filter.male" label="Tên Chú Rể" placeholder="Tên Chú Rể"></b-text-field>
			        	</div>
			        	<div class="col-md-4 form-group">
			        		<b-text-field v-model="filter.female" label="Tên Cô Dâu" placeholder="Tên Cô Dâu"></b-text-field>
			        	</div>
		        		<div class="col-md-4 form-group">
	                    	<b-select item-text="value" item-val="id" v-model="filter.hall" label="Sảnh" placeholder="Sảnh" :list="hallList"></b-select>
		        		</div>
		        		<div class="col-md-4 form-group">
	                    	<b-select item-text="value" item-val="id" v-model="filter.session" label="Ca" placeholder="Ca" :list="sessionList"></b-select>
		        		</div>
		        		<div class="col-md-4 form-group">
                    		<b-date-and-time label="Ngày" placeholder="Ngày" time-format="MM-DD-YYYY" v-model="filter.date" id="filter-date-start-wedding"></b-date-and-time>
		        		</div>
                    <div class="col-md-12 form-group">
                        <button @click="searchWedding()" type="submit" class="btn btn-success btn-rounded" data-loading-text="<i class='fa fa-spinner fa-pulse fa-fw'></i> Waiting..." data-control="search">Tim Kiếm</button>
                        <button @click="clearSearch()" type="button" class="btn btn-default btn-rounded">Xóa</button>
                    </div>
		        </div>
		    </div>
		    <div class="form-group">
		    	<button type="button" class="btn btn-success m-b-sm btn-rounded" @click="createWeddingClickAction()">Đặt Tiệc</button>
	    	   	<modal-create v-if="isCreate" :configs="configsModeCreate" @cancel-modal-create="createWeddingCancelAction()" @submit-modal-create="submitCreateWedding()">
			        <div slot="content-body">
			        	<div class="row">
				        	<div class="col-md-4 form-group">
				        		<b-text-field v-model="order.male" label="Tên Chú Rể" placeholder="Tên Chú Rể"></b-text-field>
				        	</div>
				        	<div class="col-md-4 form-group">
				        		<b-text-field v-model="order.female" label="Tên Cô Dâu" placeholder="Tên Cô Dâu"></b-text-field>
				        	</div>
				        	<div class="col-md-4 form-group">
				        		<b-text-field v-model="order.phone_number" label="Số Điện Thoại" placeholder="Số Điện Thoại"></b-text-field>
				        	</div>
						</div>

						<div class="row">
				        	<div class="col-md-4 form-group">
				        		<b-text-field v-model="order.date" label="Ngày" placeholder="Ngày"></b-text-field>
				        	</div>
				        	<div class="col-md-4 form-group">
		                    	<b-select item-text="value" item-val="id" v-model="order.session" label="Ca" placeholder="Ca" :list="sessionList"></b-select>
				        	</div>
				        	<div class="col-md-4 form-group">
		                    	<b-select item-text="value" item-val="id" v-model="order.hall" label="Sảnh" placeholder="Sảnh" :list="hallList"></b-select>
				        	</div>
				        </div>

				        <div class="row">
				        	<div class="col-md-4 form-group">
				        		<b-telerik-numberic org-placeholder="Tiền Đặt Cọc" null-placeholder="0" v-model="order.deposits" placeholder="Tiền Đặt Cọc" label="Tiền Đặt Cọc" id="" affix=" đ" max-length="12" interrupt="," type="'suffix'" rounding-decimal="0"></b-telerik-numberic>
				        	</div>
				        	<div class="col-md-4 form-group">
				        		<b-telerik-numberic org-placeholder="Số Lượng Bàn" null-placeholder="0" v-model="order.quantity_table" placeholder="Số Lượng Bàn" label="Số Lượng Bàn" id="" affix=" Bàn" max-length="9" interrupt="," type="'suffix'" rounding-decimal="0"></b-telerik-numberic>
				        	</div>
				        	<div class="col-md-4 form-group">
				        		<b-telerik-numberic org-placeholder="Số Lượng Bàn Dự Trữ" null-placeholder="0" v-model="order.table_extra" placeholder="Số Lượng Bàn Dự Trữ" label="Số Lượng Bàn Dự Trữ" id="" affix=" Bàn" max-length="9" interrupt="," type="'suffix'" rounding-decimal="0"></b-telerik-numberic>
				        	</div>
				        </div>
 						<fieldset class="extension-fields">
				        	<h4>Đặt Món</h4>
				        	<div class="row" v-for="(item, index) in order.order_food">
					        	<div class="col-md-3 form-group">
		                    		<b-select item-text="value" item-val="id" v-model="item.food_id" label="Món Ăn" placeholder="Món Ăn" :list="foodList"></b-select>
					        	</div>
					        	<div class="col-md-3 form-group">
				        			<b-text-field v-model="item.price" label="Đơn Giá" placeholder="Đơn Giá"></b-text-field>
					        	</div>
					        	<div class="col-md-6 form-group pl-0">
					        		<div class="col-md-11">
				        				<b-text-field v-model="item.note" label="Ghi Chú" placeholder="Ghi Chú"></b-text-field>
					        	 	</div>
					        	 	<div class="col-md-1 extension-btn"><a @click="deleteOrderFood(index)" href="javascript:void(0);"> <span class="remove-email-extension"><i class="icon-close"></i></span> </a> </div>
					        	</div>
					        </div>
						    <div class="form-group col-md-12 p-0 text-right additional"> <a href="javascript:void(0);" @click="addOrderFood()" class="extension-additional">Thêm Món</a> </div>
						</fieldset>
						<fieldset class="extension-fields">
				        	<h4>Dịch Vụ Khác</h4>
				        	<div class="row" v-for="(item, index) in order.order_service">
					        	<div class="col-md-3 form-group">
		                    		<b-select item-text="value" item-val="id" v-model="item.service_id" label="Dịch Vụ" placeholder="Dịch Vụ" :list="foodList"></b-select>
					        	</div>
					        	<div class="col-md-3 form-group">
				        			<b-text-field v-model="item.quantity" label="Số Lượng" placeholder="Số Lượng"></b-text-field>
					        	</div>
					        	<div class="col-md-6 form-group pl-0">
					        		<div class="col-md-11">
				        				<b-text-field v-model="item.price" label="Đơn Giá" placeholder="Đơn Giá"></b-text-field>
					        	 	</div>
					        	 	<div class="col-md-1 extension-btn"><a @click="deleteOrderService(index)" href="javascript:void(0);"> <span class="remove-email-extension"><i class="icon-close"></i></span> </a> </div>
					        	</div>
					        </div>
						    <div class="form-group col-md-12 p-0 text-right additional"> <a href="javascript:void(0);" @click="addOrderService()" class="extension-additional">Thêm Dịch Vụ</a> </div>
						</fieldset>
					</div>
		   		</modal-create>
		    </div>
		   	<div class="form-group">
	    		<div class="table-responsive table-loading">
			      	<table id="wedding-management-table" class="tbl2 display table" style="width: 100%; cellspacing: 0;">
			            <thead>
			              	<tr>
				                <th>STT</th>
				                <th>Tên Chú Rể</th>
				                <th>Tên Cô Dâu</th>
				                <th>Sảnh</th>
				                <th>Ngày</th>
				                <th>Giờ</th>
				                <th>Số Lượng Bàn</th>
			              	</tr>
			            </thead>
			            <tfoot>
			              	<tr>
				                <th>STT</th>
				                <th>Tên Chú Rể</th>
				                <th>Tên Cô Dâu</th>
				                <th>Sảnh</th>
				                <th>Ngày</th>
				                <th>Giờ</th>
				                <th>Số Lượng Bàn</th>
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
	    	return{
	    		isCreate : false,
	    		isLoadding : false,
	    		order : {
	    			hall : null,
					session : null,
					date : null,
					male : null,
					female : null,
					phone_number : null,
					table_extra : null,
					quantity_table : null,
					deposits : null,
					order_food : [
						{
							food_id : null,
							price : null,
							note : null,
						}
					],
					order_service : [
						{
							service_id : null,
							quantity : null,
							price : null
						}
					],
	    		},
	    		configsModeCreate : {
					modeId : 'order-wedding-party',
					title  : 'Đặt Tiệc'
				},
				filter : {
					male : null,
					female : null,
					phone_number : null,
					hall : null,
					session : null,
					date : null,
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
						id : 2,
						value : 'Vườn Thiên Thai' 
					},
					{
						id : 3,
						value : 'Sảnh Thiên Hà Đỏ' 
					},
					{
						id : 4,
						value : 'Sảnh Mặt Trăng Xanh' 
					},
				],
				sessionList : [
					{
						id : 1,
						value : 'Ca Trưa' 
					},
					{
						id : 2,
						value : 'Ca Tối' 
					},
				],
				orderList : [
					{
						"id" : 1,
						"male" : "Nguyễn Đăng Kế Thiện",
						"female" : "Phan Thị Cẩm Linh",
						"hall" : 2,
						"date" : "04/02/2024",
						"session" : "Ca Tối",
						"table_extra" : 70,
					},
					{
						"id" : 2,
						"male" : "Nguyễn Đăng Kế Thiện",
						"female" : "Nguyễn Thị Thanh Giang",
						"hall" : 2,
						"date" : "04/02/2024",
						"session" : "Ca Tối",
						"table_extra" : 70,
					}
				],
				foodList : [
					{
						id : 1,
						value : 'Tôm Hấp Bia' 
					},
					{
						id : 2,
						value : 'Hải Sản Nhún Nhảy' 
					},
					{
						id : 3,
						value : 'Vịt Quay Bắc Kinh' 
					},
				],
				serviceList : [
					{
						id : 1,
						value : 'Combo Trang Trí' 
					},
					{
						id : 2,
						value : 'Phục Vụ Lv2' 
					},
					{
						id : 2,
						value : 'Full Music' 
					},
				]
	    	}
	    },
	    mounted(){
	    	this.getCommonData()
	    	this.reRenderTable(this.orderList)
	    },
	    beforeDestroy(){
        },
	    watch:{
	 
	    },
	    methods: {
	    	deleteOrderFood(key){
	    		this.order.order_food.splice(key, 1)
	    	},
			addOrderFood(){
				this.order.order_food.push({
					food_id : null,
					price : null,
					note : null,
				})
			},
			deleteOrderService(key){
	    		this.order.order_service.splice(key, 1)
	    	},
			addOrderService(){
				this.order.order_service.push({
					service_id : null,
					quantity : null,
					price : null,
				})
			},
	    	createWeddingClickAction(){
	    		this.isCreate = true
	    		this.$nextTick(function(){
	    			$('#' + this.configsModeCreate.modeId).modal('show')
	    		})
	    	},
	    	createWeddingCancelAction(){
	    		this.isCreate = false
	    		this.$nextTick(function(){
            		$('.modal-backdrop.fade').css("display", "none")
	    		})
	    	},
	    	reRenderTable(data){
             	$("#wedding-management-table").DataTable({
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
                              	return data.male;
                            }
                        },
                        {
                            data: null,
                            render: function (data) {
                                return data.female;
                            }
                        },
                        {
                            data: null, render: function (data) {
                                return data.hall;
                            }
                        },
                        {
                            data: null, render: function (data) {
                                return data.date;
                            }
                        },
                        {
                            data: null, render: function (data) {
                                return  (data.session == 'Ca Trưa') ? '11:00' : '17:00';
                            }
                        },
                        {
                            data: null, render: function (data) {
                                return data.table_extra;
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
            	this.$http.get(API.WEDDING_DRESS_MANAGEMENT_GET_COMMON_DATA, { }).then(
                function (success) {
                },
                function (error) {
                }).then(function(){
                	this.isLoadding = false
                })
            },
            clearSearch(){
            	this.filter = {
					male : null,
					female : null,
					phone_number : null,
					hall : null,
					session : null,
					date : null,
				}
				this.searchWedding()
            },
            searchWedding(){
            	this.isLoadding = true
            	let data = this.filter
            	this.$http.get(API.WEDDING_DRESS_MANAGEMENT_SEARCH, { params : data }).then(
                function (success) {
                },
                function (error) {
                }).then(function(){
            		this.isLoadding = false
                })
            },
            submitCreateWedding(data){
            	this.isLoadding = true
            	this.$http.post(API.WEDDING_DRESS_MANAGEMENT_CREATE, this.order ).then(success => {
                    toastr.success('Create Sucessfully.')
                }, response => {
                }).then(function(){
                	this.isLoadding = false
                })
            }
	    },
	}
</script>