<template>
	<div :class="getClassPanelEdit()" :active="configs.active ? 'true' : 'false'" :id="configs.name">
        <div class="panel-heading">
            <h3 class="panel-title" v-html="configs.title"></h3>
            <div class="panel-control"> 
                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Expand/Collapse" class="panel-collapse">
                    <i class="icon-arrow-down"></i>
                </a> 
                <a data-toggle="tooltip" data-placement="top" title="Edit" class="panel-edit" @click="switched()" v-if="isEdit">
                    <i class="icon-note"></i> 
                </a> 
            </div>
        </div>
        <div class="panel-body">
            <slot name="panel-content"></slot>
            <div class="btn-group-action">
                <button @click="$emit('submit',configs.name)" data-loading-text="<i class='fa fa-spinner fa-pulse fa-fw'></i> Waiting..." type="button" class="btn btn-primary btn-rounded" data-control="update">Update</button>
                <button @click="$emit('cancel',configs.name)" type="button" class="btn btn-default btn-rounded panel-cancel-edit" data-control="cancel-update">Cancel</button>
            </div>
        </div>
    </div>
</template>
<script>
    import PanelMixin from '../../mixins/arc/panel'
	export default {
        mixins: [ PanelMixin ],
		props : {
            configs : {
                type: Object,
                required: true,
            },
            isEdit : {
                type: Boolean,
                default: function () {
                    return true
                }
            }
        },
        methods : {
        	getClassPanelEdit(){
                if(this.configs.panelClass)
                    return this.configs.panelClass + ' ' + this.configs.name 
        		return 'panel panel-border ' + this.configs.name 
        	},
            switched(){
                this.changeStatePanel('.' + this.configs.name,true)
                this.$emit('switched')
            },
        }
	}
</script>