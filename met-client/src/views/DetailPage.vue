<script>
    import { mapState, mapWritableState, mapActions } from 'pinia';
    import { useCounterStore } from '../stores/counter';
    // import DetailCard from '../components/DetailCard.vue';
    export default {
        // components: {
        //     DetailCard
        // },
        computed: {
            ...mapWritableState(useCounterStore, ["productById", "fetchProducts", "qrImage", "isLoading"]),
           
        ...mapState(useCounterStore, ["paymentToken"],),
        },
        methods: {
            ...mapActions(useCounterStore, ["getProductById", "fetchProducts"]),
            changePage() {
                this.$router.push("/")
            },
            formatPrice(value) {
                let val = (value / 1).toFixed(2).replace('.', ',')
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            },
    
    
        },
        created() {
            this.getProductById(this.$route.params.id)
            console.log(this.$route.params.id)
            console.log(this.productById.created);
            
        }
    }
    
    </script>
    
    <template>
    
    
    <div style="align-content:center" v-if="isLoading == true" class="w-auto h-auto">
        <h2 class="text-light text-center">Loading ... <br><br>this may take up to 10 seconds</h2>
        <img style="width:auto;height:auto;opacity:0.3"
          src="https://static.vecteezy.com/system/resources/thumbnails/008/174/698/original/animation-loading-circle-icon-loading-gif-loading-screen-gif-loading-spinner-gif-loading-animation-loading-on-black-background-free-video.jpg"
          alt="loading screen">
      </div>
        <main v-if="isLoading == false">
            <h1 class="text-light my-3 text-center" style="font-family:monospace">{{this.productById.title}}</h1>
            <div class="container col "
                style="display:flex;flex-wrap:wrap;flex-direction:row;justify-content: space-around;width:75%;margin:auto">
    
                <div class="card  col-8" style="width: 75%;">
                    <img class="card-img-top" :src="this.productById.image" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{this.productById.title}}</h5>
                        <p class="card-text">{{this.productById.artist}}</p>
                        <p class="card-text">{{this.productById.created}}</p>
                        <p class="card-text">{{this.productById.medium}}</p>
                        <p class="card-text">{{this.productById.dimensions}}</p>
                        <!-- <p class="card-text">Price: Rp {{formatPrice((new Date().getFullYear() - this.productById.objectEndDate) * 10000)}}</p> -->
                        <p class="card-text">Rp {{formatPrice((new Date().getFullYear() - this.productById.created) * 10000)}}</p>
                        <!-- <button href="#" class="btn" style="background-color:red;" @click.prevent="addFavouriteComponent">Favourite</button> -->
                    </div>
                </div>
                <div class="my-4 col-auto">
                    <h4 class="text-light" style="text-align:center;font-family:monospace">Share this page!</h4>
                    <img :src="qrImage" />
    
                    <div>
                        <button style="width:100%;background-color:rgb(12,12,100);" class="btn text-white" @click.prevent="changePage" >Back To Home</button>
                    </div>
                </div>
    
    
            </div>
        </main>
    </template>
    
    <style>
    div {
        font-family: monospace
    }
    </style>