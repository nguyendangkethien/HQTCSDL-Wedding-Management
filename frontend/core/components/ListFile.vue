<template>
	<div class="b__components arc-list-files">
		<ul class="list-files">
			<li v-for="f in files">
				<a :href="f" target="_blank">{{ fileName(f) }}</a>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		props : ['value'],
		computed : {
			files () {
				return this.value ? this.value : []
			}
		},
		methods: {
			fileName(link){
				let strs = link.split('/')
				return strs[strs.length-1]
			}
		}
	}
</script>
<style>
	.arc-list-files .list-files {
    padding: 0;
    list-style: none;
	}

	.arc-list-files .list-files a {
	    text-decoration: none;
	    padding-bottom: 5px;
	    display: block;
	}
</style>