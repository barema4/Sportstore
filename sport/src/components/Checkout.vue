<template>
<div>
    <div class="container">
        <div class="row">
            <div class="col bg-dark text-white">
                <a class="navbar-brand">SPORTS STORE</a>

            </div>
        </div>
    </div>
    <div class="m-2  name">
        <div class="form-group m-2 ">
            <label for="">Name</label>
            <input type="text" v-model="name" class="form-control">

        </div>
    </div>
    <div class="text-center">
        <router-link to="/cart" class="btn btn-secondary m-1">
        Back
        </router-link>
        <button class="btn btn-primary m-1" v-on:click="submitOrder">
        Place Order
        </button>
    </div>
</div>
    
</template>
<script>
export default {
    data(){
        return {
            name: null
        }
    },
    methods: {
        submitOrder(){
            // Save Order
        }
    }
}
</script>
<style scoped>
.name{
    margin: 2rem 30rem !important;
}
</style>