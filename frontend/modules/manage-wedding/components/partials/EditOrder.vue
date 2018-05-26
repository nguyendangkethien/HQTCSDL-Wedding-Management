<template>
	<div>
	    <modal-edit :configs="configs" @cancel-modal-edit="destroyComponent()" @modal-edit-switched="" @modal-edit-unswitch="" @submit-modal-edit="">
	        <div slot="content-body">
	        	<div class="row">
		       	 	<div class="col-md-1 form-group pr-0">
			        	<b-telerik-numberic org-placeholder="ID" v-model="filter.id" placeholder="ID" label="ID" affix="" max-length="6" interrupt=" " type="'suffix'" rounding-decimal="0"></b-telerik-numberic>
		        	</div>
		        	<div class="col-md-3 form-group">
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
	            		<b-date-and-time label="Ngày" placeholder="Ngày" time-format="MM-DD-YYYY" v-model="filter.date" id="edit-filter-date-start-wedding"></b-date-and-time>
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
                    modeId : 'modal-eidt-order',
                    title  : 'Chỉnh Thông Tin Tiệc Cưới',
                    btnSubmit : 'Xuất Hóa Đơn'
                },
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
	    		this.$nextTick(function(){
	    			panelServices.switch('.modal-edit-switch-panel', false)
	            })
	    	},
	    	destroyComponent(){
                this.$destroy()
                this.$router.go(-1)
            },
	    },
	}
</script>