<template>
	<div>
	    <modal-edit :configs="configs" @cancel-modal-edit="destroyComponent()" @modal-edit-switched="" @modal-edit-unswitch="" @submit-modal-edit="">
	        <div slot="content-body">
	       	 	Hóa Đơn Thanh Toán
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
                    title  : 'Hóa Đơn Thanh Toán',
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
	    	},
	    	destroyComponent(){
                this.$destroy()
                this.$router.go(-1)
            },
	    },
	}
</script>