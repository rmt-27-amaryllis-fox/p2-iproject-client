<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCartStore } from "../stores/cart";
import CartCard from "../components/CartCard.vue";
import AddAddress from "../views/AddAddress.vue";
import LoadingPage from "../views/LoadingPage.vue";

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
    ...mapWritableState(useCartStore, ["orderId"]),
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
    LoadingPage,
  },
  methods: {
    ...mapActions(useCartStore, [
      "getCart",
      "getAddress",
      "shippingFee",
      "deleteItem",
      "checkOut",
    ]),
    pay(gross) {
      this.checkOut(gross);
    },
  },
  data() {
    return {};
  },
};
</script>

<template>
  <LoadingPage v-if="!shipping" />

  <div v-else class="container mt-5">
    <h1>Troli Belanja</h1>
    <hr />
    <CartCard v-for="cart in carts" :key="cart.id" :cart="cart" />
    <h1>Shipping Fee: {{ shipping }}</h1>
    <h1>Total Price:{{ carts[0].Medicine.price.toLocaleString("ID-id") }}</h1>
    <button type="submit" @click="pay(carts[0].Medicine.price)">
      <img src="https://img.icons8.com/color/48/000000/checkout.png" /> Checkout
    </button>
  </div>
</template>

<style></style>
