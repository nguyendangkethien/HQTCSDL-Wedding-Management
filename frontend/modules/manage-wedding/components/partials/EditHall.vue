<template>
	<div>
	    <modal-edit :configs="configs" @cancel-modal-edit="destroyComponent()" @modal-edit-switched="" @modal-edit-unswitch="" @submit-modal-edit="">
	        <div slot="content-body">
   	 			<div class="row">
	        		<div class="col-md-6 form-group">
		        		<b-text-field v-model="editHall.name" label="Tên Sảnh" placeholder="Tên Sảnh"></b-text-field>
		        	</div>
		        	<div class="col-md-6 form-group">
                    	<b-select item-text="value" item-val="id" v-model="editHall.type" label="Loại Sảnh" placeholder="Loại Sảnh" :list="hallType"></b-select>
		        	</div>
	        	</div>
	        	<div class="row">
	        		<div class="col-md-6 form-group">
		        		<b-telerik-numberic org-placeholder="Số Lượng Bàn Tối Đa" v-model="editHall.price_min" placeholder="Số Lượng Bàn Tối Đa" label="Số Lượng Bàn Tối Đa" id="" affix=" Bàn" max-length="9" interrupt="," type="'suffix'" rounding-decimal="0"></b-telerik-numberic>
		        	</div>
		    		<div class="col-md-6 form-group">
		        		<b-telerik-numberic org-placeholder="Đơn Giá Bàn Tối Thiểu" v-model="editHall.max_num_table" placeholder="Đơn Giá Bàn Tối Thiểu" label="Đơn Giá Bàn Tối Thiểu" id="" affix=" đ" max-length="9" interrupt="," type="'suffix'" rounding-decimal="0"></b-telerik-numberic>
		        	</div>
	        	</div>
	        	<div class="row">
		        	<div class="col-md-12 form-group">
		    			<b-textarea placeholder="Ghi Chú" label="Ghi Chú" v-model="editHall.note"></b-textarea>
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
                    modeId : 'modal-eidt-hall',
                    title  : 'Chỉnh Sửa Sảnh',
                },
                editHall : {
	    			name : null,
					type : null,
					price_min : null,
					max_num_table : null,
					note : null,
					status : true,
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
	    	}
	    },
	    mounted(){
	    	this.init()
	    },
	    beforeDestroy(){
            $('.modal-backdrop.fade').css("display", "none")
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