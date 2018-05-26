<template>
	<div class="toolbar"  style="margin:-20px">
		<div class="page-top">
	    	<slot name="toolbar-title">
	    	</slot>
		    <div class="page-menu">
		    	<slot name="toolbar-content"></slot>
		    </div>
		</div>
		<slot name="toolbar-modal"></slot>
	</div>
</template>

<script>
	import helper from '../helper/helper.js'
	let typesToolbar = ['transferee','client','vendor','task']
	export default {
		data(){
			return {
				isDetailMode : false,
			}
		},
		mounted(){
		},
		props : {
			configs : {
				type: Object,
				required: true,
				validator: function (configs) {
			        return helper.in_array(configs.type,typesToolbar)
			    }
			}
		},
		watch : {
			isDetailMode : function(value){
				this.$emit('is-detail-mode',value);
			}
		}
	}
</script>
