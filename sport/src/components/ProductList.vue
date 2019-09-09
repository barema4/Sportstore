<template>
    <div>
        <div v-for="p in products" v-bind:Key="p.id" class="card m-1 p-1 bg-light">
            <h4>
                {{p.name}}
                <span class="badge badge-pill badge-primary float-right">{{p.rice}}</span>
            </h4>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data(){
        return{

        }
    },
    computed: {
        ...mapState(['products'])

    }
}
</script>