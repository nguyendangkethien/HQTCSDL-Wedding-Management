<template>
    <div class="modal fade panel" :id="configs.modeId" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" active="true" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog" :class="modalSize">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="panel-control pull-right"> 
                        <a href="javascript:void(0);" @click="$emit('cancel-modal-create')" data-toggle="tooltip" data-placement="top" title="" data-original-title="Close" data-dismiss="modal"> 
                            <i class="icon-close"></i> 
                        </a> 
                    </div>
                  <h4 class="modal-title" v-html="configs.title"></h4>
                </div>
                <div class="modal-body clearfix">
                    <slot name="content-body"></slot>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-success btn-rounded btn-create-submit" data-loading-text="<i class='fa fa-spinner fa-pulse fa-fw'></i> Waiting..." data-control="create" @click="$emit('submit-modal-create')" v-html="btnTitleSubmit"></button>
                    <button type="button" class="btn btn-default btn-rounded" @click="$emit('cancel-modal-create')" data-control="cancel-create" v-html="btnTitleCancel" data-dismiss="modal" v-if="validBtnCancel"></button>
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
            }
        }
    }
</script>
