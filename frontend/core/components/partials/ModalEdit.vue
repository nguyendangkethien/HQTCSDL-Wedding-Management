<template>
    <div class="modal fade" :id="configs.modeId" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
        <div class="panel modal-dialog modal-edit-switch-panel panel-false" :class="modalSize" active="false">
            <div class="modal-content" :class="modalSize">
                <div class="modal-header">
                    <div class="panel-control pull-right"> 
                        <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" v-if="isEdit" v-show="!switched" data-original-title="Edit" @click="switchEditPanel()"> 
                            <i class="icon-note"></i> 
                        </a> 
                        <a  @click="$emit('cancel-modal-edit')" href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-dismiss="modal"> <i class="icon-close"></i> </a> 
                    </div>
                    <slot name="header-title">
                        <h4 class="modal-title" v-html="configs.title">
                        </h4>
                    </slot>    
                </div>
                <div class="modal-body clearfix" style="padding-top: 15px;">
                    <slot name="content-body"></slot>
                </div>
                <div class="modal-footer">
                    <div class="btn-group-action" style="margin-bottom: 0px;">
                        <button type="submit" class="btn btn-success btn-rounded btn-update-submit" data-loading-text="<i class='fa fa-spinner fa-pulse fa-fw'></i> Waiting..." data-control="update" @click="submitModal()" v-html="btnTitleSubmit">{{ btnTitleSubmit }}</button>
                        <button type="button" class="btn btn-default btn-rounded" @click="cancelSwitchPanel()" v-html="btnTitleCancel" data-control="cancel-update" v-if="btnTitleCancel"></button>
                    </div>
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
            },
            isEdit : {
                type: Boolean,
                default: function () {
                    return true
                }
            }
        },
        data() {
            return {
                switched : false,
            }
        },
        computed :
        {
            btnTitleSubmit(){
                if(this.configs.btnSubmit)
                    return this.configs.btnSubmit
                return 'Lưu'
            },
            btnTitleCancel(){
                if(this.configs.btnCancel)
                    return this.configs.btnCancel
                return 'Thoát'
            },
            modalSize()
            {
                if(this.configs.size)
                    return this.configs.size
                return 'modal-lg'
            },
            validBtnCancel(){
                if(this.configs.isHiddenBtnCancel)
                    return false
                return true
            },
            // editPermission(){
            //     if(this.configs.edit)
            //         return false
            //     return true
            // },
        },
        methods: {
            submitModal(){
                this.switched = false
                this.$emit('submit-modal-edit')
            },
            switchEditPanel(){
                if(this.switched == true){
                    this.cancelSwitchPanel()
                }else{
                    panelServices.switch('.modal-edit-switch-panel', true)
                    this.switched = true
                    this.$emit('modal-edit-switched')
                }
            },
            cancelSwitchPanel(){
                panelServices.switch('.modal-edit-switch-panel', false)
                this.switched = false
                this.$emit('modal-edit-unswitch')
            },
        },
    }
</script>
