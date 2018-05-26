<template>
	<div>
		<span style="cursor:pointer" class="icon-type" :class="classes" data-toggle="tooltip" data-placement="top" :title="title" aria-hidden="true" :data-original-title="title"></span>
	</div>
</template>
<script>
	export default {
	data() {
		return {
			
		}
	},
    props: ['data', 'index'],
    methods: {

    },
    computed: {
    	title() {
    		if (this.data.type) return this.data.type
    		else return ''
    	},
    	classes() {
    		if (this.data.type) {
                let class_tmp = ''
                switch(this.data.type) {
                    case 'Log':
                        class_tmp = 'halflings halflings-time'
                        break;
                    case 'Appointment':
                        class_tmp = 'glyphicon glyphicon-calendar'
                        break;
                    case 'Call':
                        class_tmp = 'glyphicon glyphicon-phone-alt'
                        break;
                    case 'Meeting':
                        class_tmp = 'fa fa-users icon-active'
                        break;
                    case 'Personal Activity':
                        class_tmp = 'glyphicon glyphicon-businessman icon-active'
                        break;
                    case 'Task':
                        class_tmp = 'fa fa-tasks icon-active'
                        break;
                    case 'Vacation':
                        class_tmp = 'glyphicon glyphicon-plane'
                        break;   
                    default:
                        class_tmp = 'fa fa-ellipsis-h icon-active'
                }
                return class_tmp
            }
    		else return ''	
    	},
    	status() {
    		if (this.data.statusDetail) return this.data.statusDetail.name
    		else return '-'
    	}
    }
}
</script>
<style scoped>
	
</style>