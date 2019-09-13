import Vue from "vue";
import VueRouter from "vue-router";
import Store from '../components/Store.vue'
import ShopingCart from '../components/ShopingCart.vue'
import Checkout from "../components/Checkout";
import OrderThanks from "../components/OrderThanks";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Store
        },
        {
            path: '/cart',
            component: ShopingCart
        },
        { 
            path: "/checkout",
            component: Checkout
        
        },
        { 
            path: "/thanks/:id",
             component: OrderThanks
            
            },
        { 
            path: "*", redirect: "/"
        
         }
    ]
})