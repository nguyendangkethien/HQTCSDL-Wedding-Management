<template>
	<div class="modal fade panel" :id="configs.id" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
	    <div class="modal-dialog modal-lg">
	        <div class="modal-content">
	            <div class="modal-header">
	                <h4 class="modal-title" id="myModalLabel" style="color: #a94442;" v-html="configs.title"></h4>
	            </div>
	            <div class="modal-body">
	                <slot name="content"></slot>
	            </div>
	            <div class="modal-footer">
	                <button @click="$emit('duplicate-accept',configs.id)" type="button" class="btn btn-primary btn-rounded" v-html="configs.btnText"></button>
	                <button @click="$emit('duplicate-cancel',configs.id)" type="button" data-dismiss="modal" class="btn btn-default btn-rounded">Back</button>
	            </div>
	        </div>
	    </div>
	</div>
</template>
<script>
    export default {
        props : {
            configs : {
                type: Object,
                required: true,
            }
        }
    }
</script>
