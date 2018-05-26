<template>
	<div>
	    <modal-edit :configs="configs" @cancel-modal-edit="destroyComponent()" @modal-edit-switched="" @modal-edit-unswitch="" @submit-modal-edit="">
	        <div slot="content-body">
	       	 	<div class="row">
	        		<div class="col-md-4 form-group">
		        		<b-text-field v-model="paymentBill.male" label="Tên Chú Rể" placeholder="Tên Chú Rể"></b-text-field>
		        	</div>
		        	<div class="col-md-4 form-group">
		        		<b-text-field v-model="paymentBill.female" label="Tên Cô Dâu" placeholder="Tên Cô Dâu"></b-text-field>
		        	</div>
		        	<div class="col-md-4 form-group">
	            		<b-date-and-time label="Ngày Thanh Toán"  v-model="paymentBill.payment_date" placeholder="Ngày Thanh Toán" time-format="MM-DD-YYYY" id="edit-filter-date-start-order"></b-date-and-time>
		        	</div>

		        	<div class="col-md-4 form-group">
		        		<b-telerik-numberic org-placeholder="Đơn Giá Bàn" v-model="paymentBill.quantity_table" placeholder="Đơn Giá Bàn" label="Đơn Giá Bàn" affix=" Bàn" max-length="4" interrupt="," type="'suffix'" rounding-decimal="0"></b-telerik-numberic>
		        	</div>
		        	<div class="col-md-4 form-group">
		        		<b-telerik-numberic org-placeholder="Đơn Giá Bàn" v-model="paymentBill.unit_price_table" placeholder="Đơn Giá Bàn" label="Đơn Giá Bàn" affix=" đ" max-length="9" interrupt="," type="'suffix'" rounding-decimal="0"></b-telerik-numberic>
		        	</div>
		        	<div class="col-md-4 form-group">
		        		<b-telerik-numberic org-placeholder="Tổng Tiền Bàn" v-model="paymentBill.total_price_table" placeholder="Tổng Tiền Bàn" label="Tổng Tiền Bàn" affix=" đ" max-length="12" interrupt="," type="'suffix'" rounding-decimal="0"></b-telerik-numberic>
		        	</div>
	        	</div>
	        	<div class="row">
	        		<div class="col-md-12 form-group">
	        			<div class="table-responsive table-loading">
					      	<table id="wedding-management-payment-bill-table" class="tbl2 display table" style="width: 100%; cellspacing: 0;">
					            <thead>
					              	<tr>
						                <th>STT</th>
						                <th>Dịch Vụ</th>
						                <th>Số Lượng</th>
						                <th>Đơn Giá</th>
						                <th>Thành Tiền</th>
					              	</tr>
					            </thead>
					            <tfoot>
					              	<tr>
						                <th>STT</th>
						                <th>Dịch Vụ</th>
						                <th>Số Lượng</th>
						                <th>Đơn Giá</th>
						                <th>Thành Tiền</th>
					              	</tr>
					            </tfoot>
					      	</table>
					    </div>
		        	</div>
	        	</div>
	        	<div class="row">
		        	<div class="col-md-12">
		        		<div class="form-group">
		        			<h4>Tổng tiền dịch vụ: {{ paymentBill.total_price_service }} (đồng)</h4>
		        		</div>
		        		<div class="form-group">
		        			<h4>Tổng tiền hóa đơn: {{ paymentBill.total_price_bill }} (đồng)</h4>
		        		</div>
		        		<div class="form-group">
		        			<h4>Tiền đặt cọc: {{ paymentBill.total_price_deposite }} (đồng)</h4>
		        		</div>
		        		<div class="form-group">
		        			<h3>Còn lại: {{ paymentBill.final_price }} (đồng)</h3>
		        		</div>
		    		</div>
	        	</div>
	        </div>
	    </modal-edit>
	    <loadding v-show="isLoadding"></loadding>
	</div>
</template>
<script>
	import loadding from '@/../../core/components/Loadding.vue'
	import ModalEdit from '@/../../core/components/partials/ModalEdit.vue'
	export default {
		components: {
	        loadding,
	        ModalEdit
	    },
		data(){
	    	return{
	    		isLoadding : false,
	    		objectID : this.$route.params.objectID,
	    		configs : {
                    modeId : 'modal-payment-bill',
                    title  : 'Lập Hóa Đơn Thanh Toán',
                },
                paymentBill : {
                	male : null,
                	female : null,
                	payment_date : null,
                	quantity_table : null,
                	unit_price_table : null,
                	total_price_table : null,
                	service_list : [
	                	{
	                		id : 1,
	                		service : '-',
	                		quantity : '-',
	                		unit_price : '-',
	                		total_price : '-',
	                	}
                	],
                	total_price_service : 0,
                	total_price_bill : 0,
                	total_price_deposite : 0,
                	final_price : 0,
                },
	    	}
	    },
	    mounted(){
	    	this.init()
	    },
	    beforeDestroy(){
            $('.modal-backdrop.fade').css("display", "none")
            this.$emit('edit-activity-close')
        },
	    methods: {
	    	init(){
	    		$('#' + this.configs.modeId).modal('show')
	    		this.reRenderTable(this.paymentBill.service_list)
	    	    this.$nextTick(function(){
	    			panelServices.switch('.modal-edit-switch-panel', false)
	            })
	    	},
	    	destroyComponent(){
                this.$destroy()
                this.$router.go(-1)
            },
            reRenderTable(data){
             	$("#wedding-management-payment-bill-table").DataTable({
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
                              	return data.service;
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
                                return data.unit_price;
                            }
                        },
                        {
                            data: null, render: function (data) {
                                return data.total_price;
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