<template>
	<div class="row" style="margin-top: 40px">
		<div class="row">
		    <div class="col-md-12">
		        <div class="panel panel-white tab-top">
		            <slot name="tab-top"></slot>
		        </div>
		    </div>
		</div>
		<div class="row">
			<div class="col-md-12">
		        <div class="panel panel-white tab-bottom">
		            <slot name="tab-bottom"></slot>
		        </div>
	    	</div>
		</div>
		<slot name="router"></slot>
	</div>
</template>
<script>
	export default {}
</script>
