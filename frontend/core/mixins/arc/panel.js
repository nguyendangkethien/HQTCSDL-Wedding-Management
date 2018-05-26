export default {
	methods : {
        changeStatePanel(element = '', state = false)
        {
            panelServices.switch(element,state)
            
            this.$emit('state-panel',state,element)
            
        },
	}
}
