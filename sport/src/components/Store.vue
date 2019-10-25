<template>
    <div class="container">
        <div class="row">
            <div class="col bg-dark text-white">
                <a href="" class="navbar-brand">SPORTS STORE</a>
                <cart-summary />
            </div>
        </div>
        <div class="row">
            <div class="col-3 bg-info p-2">
                <CategoryControls />
                <button class="btn btn-block btn-warning mt-5"
                 v-on:click="setShowSearch(true)">
                  Search
                 </button>
            </div>
            <div class="col-9 bg-success p-2">
                <search/>
                <!-- <h4 class="text-white m-2">Products</h4> -->
                <product-list />
            </div>
        </div>
    </div>
</template>
<script>
import ProductList from './ProductList'
import CategoryControls from './CategoryControls'
import CartSummary from './CartSummary'
import Search from './Search'
import { mapMutations } from 'vuex'
export default {
    data(){
        return{

        }
    },
    components: {
        ProductList,
        CategoryControls,
        CartSummary,
        Search
    },
    methods: {
...mapMutations(['setShowSearch'])
   
   }
}
</script>

<style scoped>
.bg-success{
    background-color: aliceblue !important;
}
</style>