<script>
import { mapWritableState, mapActions, mapState } from 'pinia';
import { useCounterStore } from "../stores/counter"
import Swal from "sweetalert2"
export default {
    props: {
        painting: Object
    },
    computed: {
        ...mapState(useCounterStore, ["paymentToken"],),
    },
    methods: {
        ...mapActions(useCounterStore, ["getPainting", "productById", "addFavourite"]),
        formatPrice(value) {
            let val = (value / 1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        ...mapWritableState(useCounterStore, ["products", "paintings"],),
        productById() {
            console.log(this.product.id);
            this.productById(this.product.id)
        },
        DetailPage() {
            console.log(this.painting.id);
            this.$router.push(`/paintings/${this.painting.id}`)
        },
        addFavouriteComponent() {
            console.log(this.painting.id);
            this.addFavourite(this.painting.id).then(() => {
                console.log(this.paymentToken, "PAYMENT TOKEN DI CARDROW");
                window.snap.pay(this.paymentToken, {
                    onSuccess: function (result) {
                        console.log("<<<SUKSES");
                        /* You may add your own implementation here */
                        alert("payment success!"); console.log(result);
                        Swal.fire(
                            'Success,',
                            'Added to Favourites!',
                            'success'
                        )
                    }
                })
            })

        },
        formatPrice(value) {
            let val = (value / 1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        bayarComponent() {
            var payButton = document.getElementById('pay-button');
            payButton.addEventListener('click', function () {

                // Trigger snap popup. @TODO: Replace TRANSACTION_TOKEN_HERE with your transaction token
                window.snap.pay("f6444704-9c56-4d33-a715-6341272f81d0", {
                    onSuccess: function (result) {
                        console.log("<<<SUKSES");
                        /* You may add your own implementation here */
                        alert("payment success!"); console.log(result);
                    }
                })
            });
        }
    },
    // computed: {
    //     id: this.products.id
    // }
}
</script>
    
<template>

    <div class="card my-4" style="width: 18rem;">
        <img style="width:300px;height:300px" id="center-cropped"
            class="card-img-top img-thumbnail img-fluid center-cropped" :src="painting.image" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{painting.title}}</h5>
            <!-- <p class="card-text">{{product.description}}</p> -->
            <p class="card-text">{{painting.artist}}</p>
            <p class="card-text">{{painting.created}}</p>
            <p class="card-text">Rp. {{formatPrice(painting.price)}}</p>
            <!-- <p class="card-text">Stock: {{product.stock}}</p> -->
            <div style="display:flex;align-items:space-between">
                <button @click="DetailPage()" class="btn btn-warning">Detail</button>
                <button @click.prevent="addFavouriteComponent" value="{{painting.id}}" type="button"
                    class="btn btn-outline-danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-heart" viewBox="0 0 16 16">
                        <path
                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                    Purchase!
                </button>
                <!-- <a href="#" class="btn btn-info">Favourite</a> -->
            </div>
            <!-- <a v-if="$route.path.includes('favourites')" href="#" class="btn btn-danger">Remove Favourite</a> -->

        </div>
    </div>

</template>

<style>
/* .center-cropped {
  width: 450px;
  height: 450px;
  background-position: center center;
  background-repeat: no-repeat;
} */
</style>    

