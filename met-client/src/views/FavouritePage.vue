<script>
    import { mapActions, mapWritableState } from 'pinia';
    import CardRow from '../components/CardRow.vue';
    import { useCounterStore } from '../stores/counter';
    
    export default {
        components: {
            CardRow
        },
        methods: {
            ...mapActions(useCounterStore, ["fetchFavourites"]),
            changePage() {
                this.$router.push("/")
            },
        },
        computed: {
            ...mapWritableState(useCounterStore, ["products"])
        },
        created() {
            this.fetchFavourites()
        }
    }
    
    </script>
    
    <template>
        <h1>YOUR Favourite Products</h1>
        <div>
            <button class="btn btn-info" @click="changePage()">Back To Home</button>
        </div>
        <div style="display:flex;flex-wrap:wrap;justify-content:space-around;width:80%;margin:auto" class="my-4">
            <CardRow v-for="product in products" :key="product.Product.id" :product="product.Product" />
        </div>
    
    
    </template>