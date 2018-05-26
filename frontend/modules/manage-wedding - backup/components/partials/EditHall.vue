<template>
	<div>
	    <modal-edit :configs="configs" @cancel-modal-edit="destroyComponent()" @modal-edit-switched="" @modal-edit-unswitch="" @submit-modal-edit="">
	        <div slot="content-body">
	       	 	Chỉnh Sửa Sảnh
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
	    	},
	    	destroyComponent(){
                this.$destroy()
                this.$router.go(-1)
            },
	    },
	}
</script>