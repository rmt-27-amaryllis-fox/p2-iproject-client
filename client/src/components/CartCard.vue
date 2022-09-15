<script>
import { mapActions, mapState } from "pinia";
import { useCartStore } from "../stores/cart";
import AddAddress from "../views/AddAddress.vue";
export default {
  data() {
    return {
      quantity: "",
    };
  },
  computed: {
    ...mapState(useCartStore, ["address"]),
    qty() {},
  },
  methods: {
    ...mapActions(useCartStore, ["getCart", "getAddress", "deleteItem"]),
  },
  created() {
    this.getCart();
  },
  props: ["cart"],
  components: {
    AddAddress,
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="d-flex justify-content-start">
        <img
          :src="cart.Medicine.imgUrl"
          class="img-fluid"
          style="width: 150px"
        />
        <div
          class="d-flex flex-row justify-content-start align-items-center w-75"
        >
          <div>
            <h6 class="me-6">{{ cart.Medicine.name }}</h6>
          </div>
          <div class="w-25 ms-5">
            Rp. {{ cart.Medicine.price.toLocaleString("ID-id") }}
          </div>
          <div class="ms-auto">
            <button @click="deleteItem(cart.id)">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr />
</template>

<style></style>
