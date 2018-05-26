<template>
    <form id="add-vendor-contact" action="javascript:void(0);">
        <div class="modal fade panel" :id="configs.modeId" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" active="true" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog modal-lg new-contact-modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="panel-control pull-right"> 
                            <a href="javascript:void(0);" @click="$emit('cancel-modal-print')" data-toggle="tooltip" data-placement="top" title="" data-original-title="Close" data-dismiss="modal"> 
                                <i class="icon-close"></i> 
                            </a> 
                        </div>
                      <h4 class="modal-title" v-html="configs.title"></h4>
                    </div>
                    <div class="modal-body clearfix">
                        <slot name="content-body"></slot>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-success btn-rounded" data-loading-text="<i class='fa fa-spinner fa-pulse fa-fw'></i> Waiting..." data-control="create" @click="$emit('submit-modal-print')">Print</button>
                        <button type="button" class="btn btn-default btn-rounded" @click="$emit('cancel-modal-print')" data-control="cancel-create">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
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
