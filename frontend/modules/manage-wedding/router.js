import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import EditHall from '@/components/partials/EditHall.vue'
import EditOrder from '@/components/partials/EditOrder.vue'
import PaymentBill from '@/components/partials/PaymentBill.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
    	{
            path: '/',
            component: HomePage,
            name: 'home',
            children: [
	            {
	            	path: 'edit-hall/:objectID',
		            component: EditHall,
		            name: 'editHall',
	            },
				{
	            	path: 'edit-order/:objectID',
		            component: EditOrder,
		            name: 'editOrder',
	            },
	            {
	            	path: 'payment-bill/:objectID',
		            component: PaymentBill,
		            name: 'paymentBill',
	            },
            ]
        },

    ]
})

export default router