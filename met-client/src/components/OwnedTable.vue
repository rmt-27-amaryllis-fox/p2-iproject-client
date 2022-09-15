<script>
import { mapWritableState, mapActions, mapState } from 'pinia';
import { useCounterStore } from "../stores/counter"

export default {
    data() {
        return {
           
        }
    },
    props: {
        owned: Object,
        
    },
    computed: {
        ...mapState(useCounterStore, ["owneds"])
    },
    methods: {
        formatPrice(value) {
            let val = (value / 1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
    }
}
    
</script>


<template>

    <tr class="text-white align-middle text-center" style="font-size: 20px">
        <!-- <th scope="row">{{owned.User.id}}</th> -->
        <td>{{owned.title}}</td>
        <td>{{owned.artist}}</td>
        <td class="w-25"><img :src="owned.imgUrl" class="img-thumbnail img-fluid"></td>
        <td>Rp. {{formatPrice(owned.price)}}</td>
        <td>{{owned.purchaseDate}}</td>
        <td>{{owned.User.username}}</td>

    </tr>
</template>