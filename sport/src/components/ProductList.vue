<template>
    <div>
        <div v-for="p in products" v-bind:Key="p.id" class="card m-1 p-1 bg-light">
            <h4>
                {{p.name}}
                <span class="badge badge-pill badge-primary float-right">{{ p.price | currency }}</span>
            </h4>
            <div class="card-text bg-white p-1">{{ p.description }}</div>
        </div>
        <page-controls/>
    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import PageControls from './PageControls'

export default {
    data(){
        return{

        }
    },
    computed: {
        ...mapState(['products']),
        ...mapGetters({ products: 'processedProducts'})


    },
    filters:{
        currency(value){
            return new Intl.NumberFormat("en-US",{style: "currency", currency: "USD"}).format(value)
        }
    },
    components: {
        PageControls
    }
}
</script>