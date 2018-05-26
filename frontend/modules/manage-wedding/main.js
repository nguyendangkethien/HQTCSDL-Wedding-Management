import Vue from 'vue'
import VueResource from 'vue-resource'
import 'b-components'
import App from './App.vue'
import toastr from 'toastr'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueResource)

let vueApp = new Vue({
    el: '#wedding-dress-app',
    router,
    components: {
        App
    },
    render: h => h(App)
});

window.vueApp = vueApp