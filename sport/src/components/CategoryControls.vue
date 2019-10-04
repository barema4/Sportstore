<template>
<div class="container-fluid">
    <div class="row my-2 " v-for="category in categories" v-bind:key="category">
        <button class="btn btn-block"
        v-on:click="setCurrentCategory(category)"
        v-bind:class="category == currentCategory
        ? 'btn-primary' : 'btn-secondary'">
        {{ category }}
        </button>
    </div>
</div>
    
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
    data(){
        return {

        }
    },
    computed: {
        ...mapState(['currentCategory']),
        ...mapGetters(['categories'])
    },
    methods: {
        ...mapActions(["setCurrentCategory"])
    }
}
</script>