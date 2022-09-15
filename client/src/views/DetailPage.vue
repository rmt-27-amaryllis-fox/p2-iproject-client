<script>
import { mapActions, mapState } from "pinia";
import { useMedicineStore } from "../stores/medicine";
import { useCartStore } from "../stores/cart";

export default {
  methods: {
    ...mapActions(useMedicineStore, ["getMedicineById"]),
    ...mapActions(useCartStore, ["addToCart"]),
  },
  computed: {
    ...mapState(useMedicineStore, ["medicine"]),
    convertPrice() {
      return this.medicine ? this.medicine.price.toLocaleString("ID-id") : "";
    },
  },
  watch: {
    "$route.params.id": {
      handler(value) {
        this.getMedicineById(value);
      },
      immediate: true,
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="d-flex">
        <img
          :src="medicine.imgUrl"
          class="img-fluid"
          style="max-width: 400px"
        />
        <div class="d-flex flex-column justify-content-start mt-5">
          <h1 class="mb-4">{{ medicine.name }}</h1>
          <h5>Description:{{ medicine.description }}</h5>
          <h5 class="text-success">Price: Rp. {{ convertPrice }}</h5>
          <h5 class="text-success">Weight: {{ medicine.weight }}gram</h5>
          <button
            @click="addToCart(medicine.id)"
            type="button"
            class="btn btn-outline-primary"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="container">
    <h1>Scan me</h1>
    <img :src="qrCode.qrcode" style="max-width: 200px" />
  </div> -->
</template>

<style></style>
