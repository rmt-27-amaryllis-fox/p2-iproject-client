<script>
import { mapActions, mapState } from "pinia";
import { useCartStore } from "../stores/cart";
import CartCard from "../components/CartCard.vue";
import AddAddress from "../views/AddAddress.vue";

export default {
  data() {
    return {
      shippingFee: this.shipping,
    };
  },
  created() {
    this.getAddress();
    this.shippingFee(this.address);
    this.getCart();
  },
  computed: {
    ...mapState(useCartStore, ["carts", "address", "shipping"]),
    // totalPrice() {
    //   const item = this.carts[0].Medicine.price.toLocaleString("ID-id");
    //   const shippingFee = +this.shipping;
    //   const total = shippingFee + item;
    //   return total;
    // },
  },
  components: {
    CartCard,
    AddAddress,
  },
  methods: {
    ...mapActions(useCartStore, [
      "getCart",
      "getAddress",
      "shippingFee",
      "deleteItem",
    ]),
  },
  data() {
    return {
      destination: this.carts,
    };
  },
};
</script>

<template>
  <div class="container mt-5">
    <router-link to="/address" class="btn btn-primary">Add Address</router-link>
    <h1>Troli Belanja</h1>
    <hr />
    <CartCard v-for="cart in carts" :key="cart.id" :cart="cart" />
    <h1>Shipping Fee: {{ shipping }}</h1>
    <h1>Total Price:{{ carts[0].Medicine.price.toLocaleString("ID-id") }}</h1>
  </div>
</template>

<style></style>
