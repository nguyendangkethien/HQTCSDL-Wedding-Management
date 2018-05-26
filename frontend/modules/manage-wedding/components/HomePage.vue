<template>
	<div>
		<div class="panel panel-white">
        	<panel-layout :configs="configs" @emit-tab-manage-hall="setConfigTabEmitEvent('tab-manage-hall')" @emit-tab-manage-wedding="setConfigTabEmitEvent('tab-manage-wedding')" @emit-tab-manage-report="setConfigTabEmitEvent('tab-manage-report')">
				<div slot="tab-manage-hall" role="tabpanel" class="tab-pane fade in" :class="(findValueObjectByParamAndName(configs.tabs, 'tab-manage-hall', 'active') == true) ? 'active' : ''" :id="findValueObjectByParamAndName(configs.tabs, 'tab-manage-hall', 'id')">
					<hall-management v-if="findValueObjectByParamAndName(configs.tabs, 'tab-manage-hall', 'active')" ref="hallManagement"></hall-management>
				</div>
				<div slot="tab-manage-wedding" role="tabpanel" class="tab-pane fade in" :class="(findValueObjectByParamAndName(configs.tabs, 'tab-manage-wedding', 'active') == true) ? 'active' : ''" :id="findValueObjectByParamAndName(configs.tabs, 'tab-manage-wedding', 'id')">
					<wedding-management v-if="findValueObjectByParamAndName(configs.tabs, 'tab-manage-wedding', 'active')" ref="weddingManagement"></wedding-management>
				</div>
				<div slot="tab-manage-report" role="tabpanel" class="tab-pane fade in" :class="(findValueObjectByParamAndName(configs.tabs, 'tab-manage-report', 'active') == true) ? 'active' : ''" :id="findValueObjectByParamAndName(configs.tabs, 'tab-manage-report', 'id')">
					<report-management v-if="findValueObjectByParamAndName(configs.tabs, 'tab-manage-report', 'active')" ref="reportManagement"></report-management>
				</div>
			</panel-layout>
	    </div>
		<router-view class="view"></router-view>
	</div>
</template>
<style>
	.b__components.b-select{
		width: 100%;
	}
	.b__components.b-select .b__select_element{
		width: 100%;
	}
</style>
<script>
	import panelLayout from '@/../../core/components/partials/PanelLayout.vue'
	import loadding from '@/../../core/components/Loadding.vue'
	import hallManagement from '@/components/HallManagement.vue'
	import weddingManagement from '@/components/WeddingManagement.vue'
	import reportManagement from '@/components/ReportManagement.vue'
	export default {
		components: {
	        panelLayout,
	        loadding,
	        hallManagement,
			weddingManagement,
			reportManagement,
	    },
	     data() {
	        return {
	            configs : {
	                typePanel : false,
	                tabs : [
	                    {
	                        id : null,
	                        active : true,
	                        html : '<a href="#tab-manage-hall" role="tab" data-toggle="tab">Quản Lý Sảnh</a>',
	                        name : 'tab-manage-hall',
	                        emit : 'tab-manage-hall'
	                    },
	                    {
	                        id : null,
	                        active : false,
	                        html : '<a href="#tab-manage-wedding" role="tab" data-toggle="tab">Quản Lý Tiệc</a>',
	                        name : 'tab-manage-wedding',
	                        emit : 'tab-manage-wedding'
	                    },
	                    {
	                        id : null,
	                        active : false,
	                        html : '<a href="#tab-manage-report" role="tab" data-toggle="tab">Báo Cáo Doanh Số</a>',
	                        name : 'tab-manage-report',
	                        emit : 'tab-manage-report'
	                    }
	                ] 
	            }
	        }
	    },
        methods : {
        	setConfigTabEmitEvent(name){
	            this.$nextTick(function(){
	                this.configs.tabs = this.changePanelConfigActiveByName(this.configs.tabs, name)
	            })
	        },
	        changePanelConfigActiveByName(panelConfig, name){
	            for( let i = 0; i < panelConfig.length; i++ ){
	                if( panelConfig[i].name == name )
	                    panelConfig[i].active = true
	                else
	                    panelConfig[i].active = false
	            }
	            return panelConfig
	        },
	        findValueObjectByParamAndName(array, name, param){ // this function help me find value in object array with param and name, function return value by name with condition param
	            for( let i = 0; i < array.length; i++ ){
	                if( array[i].name == name )
	                    return array[i][param]
	            }
	        },
        },
	}
</script>