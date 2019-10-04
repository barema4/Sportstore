<template>
<div v-if="showSearch" class="row my-2">
<label class="col-2 col-form-label text-right">Search:</label>
<input class="col form-control"
v-bind:value="searchItem" v-on:input="doSearch"
placeholder="Enter search term..." />
<button class="col-1 btn btn-sm btn-secondary mx-4"
v-on:click="handleClose">
Close
</button>
</div>
    
</template>
<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
    data(){
        return {

        }
    },
 
computed: {
...mapState(["searchItem", "showSearch"])
},

methods: {
...mapMutations(["setShowSearch"]),
...mapActions(["clearSearchItem", "search"]),
handleClose() {
this.clearSearchItem();
this.setShowSearch(false);
},
doSearch($event) {
this.search($event.target.value);
}
}
}
</script>