<script>
import { mapActions, mapWritableState } from "pinia";
import { appleStore } from "../stores/counter";
export default {
  computed: {
    ...mapWritableState(appleStore, ['myOrder', 'cancelOrder'])
  },
  methods: {
    ...mapActions(appleStore, [])
  }
}
</script>
<template>
  <div id="my-order">
    <div v-if="!myOrder.length">
      <h1>You Order are Empty</h1>
      <p>to see your ordered list, please order it first!</p>
    </div>

    <div data-aos="fade-up" class="my-order-product" v-for="el in myOrder" :key="el.id" v-if="myOrder.length">
      <span>My Order</span>
      <h1>{{el.Iphone.name}}</h1>
      <div class="ctrl-choose">
        <img :src="el.Iphone.imgUrl" alt="" />
        <div class="pick-color">
          <h3>Color :</h3>
          <p>Color - {{el.color}}</p>
          <h3 class="capacity">Capacity :</h3>
          <p>Storage - {{el.capacity}}</p>
          <br />
          <h3 class="capacity">Price :</h3>
          <p>USA - ${{el.Iphone.price}}</p>
          <br />
          <h3 class="capacity">CPU :</h3>
          <p>{{el.Iphone.CPU}}</p>
          <br />
          <h3 class="capacity">RAM :</h3>
          <p>{{el.Iphone.ram}}</p>
          <br />
          <div class="cancel-order">
            <button @click="cancelOrder(el.id)">Cancel Order</button>
          </div>
        </div>
      </div>
    </div>
    
    
  </div>
</template>
