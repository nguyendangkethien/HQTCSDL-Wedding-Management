<template>
	<div class="panel-body">
        <div role="tabpanel">
            <ul :class="getClassPanel()" role="tablist">
                <li v-for="(tab, key, index) in configs.tabs" role="presentation" :class="setClassTab(tab)" :id="tab.id" @click="$emit('emit-' + tab.emit)">
                    <a v-html="tab.html" class="b-menu-custom dropdown-toggle" data-toggle="dropdown"></a>
                    <ul v-if="tab.childs" class="dropdown-menu services-dropdown-menu" role="menu">
                        <li v-for="(child, key, index) in tab.childs" v-html="child.html" @click="$emit('emit-child-' + child.emit)">
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="tab-content px-0">
                <slot :name="tab.name" v-for="(tab, key, index) in configs.tabs"></slot>
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
        data(){
        	return {
        		typePanel : null,
        	}
        },
        methods : {
        	getClassPanel(){
        		if(this.configs.typePanel)
        			return "nav nav-pills b-nav-custom"
        		return "nav nav-tabs b-nav-custom"
        	},
            setClassTab(tab)
            {
                if(tab.active)
                    return 'active'
                if(tab.hasChild)
                    return 'dropdown domestic-tab'
            }
        }
	}
</script>
<style>
    .b-nav-custom>li .b-menu-custom {
        color: #777;
        text-decoration: none;
        padding: 0;
    }
    .b-nav-custom>li .b-menu-custom a {
        color: #777;
        text-decoration: none;
        padding: 10px 15px;
        display: block;
    }
    .nav-pills.b-nav-custom>li.active {
        color: #fff;
        background-color: #7a6fbe;
    }
    .nav-pills.b-nav-custom>li.active .b-menu-custom a {
        color: white;
    }
    .nav-tabs>li.active>a>a, .nav-tabs>li.active>a>a:focus, .nav-tabs>li.active>a>a:hover {
        color: inherit;
        text-decoration: none;
    }
    .nav-tabs>li>a>a, .nav-tabs>li>a>a:focus, .nav-tabs>li>a>a:hover {
        color: inherit;
        text-decoration: none;
    }    
</style>