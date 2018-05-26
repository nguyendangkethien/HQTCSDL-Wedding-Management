<template>
	<div>
		<span data-toggle="tooltip" data-placement="top" :title="title" aria-hidden="true" :data-original-title="description" class="label label-table" :class="classes">{{status}}</span>
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
    	erase() {
    		let id = this.data.id; // delete the item
    		alert(id)
    	}
    },
    computed: {
    	title() {
    		if (this.data.is_active) return 'Status true'
    		else return 'Status false'
    	},
    	description() {
    		if (this.data.is_active) return 'Status true'
    		else return 'Status false'
    	},
    	classes() {
    		if (this.data.is_active) return 'label-active'
    		else return 'label-queued'	
    	},
    	status() {
    		if (this.data.test == undefined) return 'Active'
    		else return 'Inactive'	
    	}
    }
}
</script>
<style scoped>
	
</style>