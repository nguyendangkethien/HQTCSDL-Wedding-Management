<template>
    <div class="b__uploads">
        <div :id = "id" class="upload-new-doc uk-placeholder uk-text-center">
            <span uk-icon="icon: cloud-upload"></span>
            <span class="uk-text-middle"><i class="fa fa-cloud-upload" aria-hidden="true"></i> Attach file by dropping here or</span>
            <div uk-form-custom>
                <input type="file" name="file">
                <span class="uk-link">selecting one</span>
            </div>
        </div>
        <progress class="uk-progress" value="0" max="100" hidden></progress>
    </div>
</template>
<script>
	import UIkit from 'uikit'

    export default {
    	props : ['id', 'config'],
    	mounted (){
    		this.initUpload()
    	},
    	methods : {
    		initUpload () {
    			let bar = $("#"+this.id + "+.uk-progress")[0];
    			let vueInstance = this
	    		UIkit.upload(`#${ this.id }`, {
	    			...vueInstance.config,
		            upload () {
		            	vueInstance.$emit('upload', arguments)
		            },
		            beforeSend () { 
		            	
		            	vueInstance.$emit('before-send', arguments)
		            },
		            beforeAll() { 
		            	vueInstance.$emit('before-all', arguments)
		            },
		            load () { 
		            	vueInstance.$emit('load', arguments)
		            },
		            error() { 
		            	vueInstance.$emit('error', arguments)
		            },
		            complete() { 
		            	vueInstance.$emit('complete', arguments)
		            },
		            loadStart(e) {
		                vueInstance.$emit('load-start', arguments)

		                bar.removeAttribute('hidden');
		                bar.max =  e.total;
		                bar.value =  e.loaded;
		            },

		            progress(e) {
		                vueInstance.$emit('progress', arguments)

		                bar.max =  e.total;
		                bar.value =  e.loaded;

		            },

		            loadEnd(e) {
		                vueInstance.$emit('load-end', arguments)
		                bar.max =  e.total;
		                bar.value =  e.loaded;
		            },

		            completeAll() {
		                vueInstance.$emit('complete-all', arguments)

		                setTimeout(function () {
		                    bar.setAttribute('hidden', 'hidden');
		                }, 1000);
		            }
	        	});
    		}
    	}
    }
</script>