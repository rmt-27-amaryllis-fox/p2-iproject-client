<script>
import { mapWritableState, mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';
// import DetailCard from '../components/DetailCard.vue';
export default {
    // components: {
    //     DetailCard
    // },
    computed: {
        ...mapWritableState(useCounterStore, ["productById", "fetchProducts", "qrImage"])
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
    }
}

</script>

<template>


<h1 class="text-light my-3 text-center" style="font-family:monospace">{{this.productById.title}}</h1>    
<div class="container col "
        style="display:flex;flex-wrap:wrap;flex-direction:row;justify-content: space-around;width:75%;margin:auto">
    
        <div class="card  col-8" style="width: 75%;">
            <img class="card-img-top" :src="this.productById.image" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{this.productById.title}}</h5>
                <p class="card-text">{{this.productById.artist}}</p>
                <p class="card-text">{{this.productById.created}}</p>
                <p class="card-text">Price: Rp {{formatPrice(this.productById.price)}}</p>
                <button href="#" class="btn" style="background-color:red;">Favourite</button>
            </div>
        </div>
        <div class="my-4 col-4">
            <h4 class="text-light" style="text-align:center;font-family:monospace">Share this page!</h4>
            <img :src="qrImage" />

            <div>
                <button style="width:100%" class="btn btn-info" @click="changePage()">Back To Home</button>
            </div>
        </div>



    </div>
</template>

<style>

</style>