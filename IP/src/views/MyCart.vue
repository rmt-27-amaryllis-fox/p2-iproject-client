<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  computed: {
    ...mapState(useUserStore, ["myCart"]),
  },
  methods: {
    ...mapActions(useUserStore, ["fetchMyCart", "deleteFromCart"]),
  },
  created() {
    this.fetchMyCart();
  },
};
</script>

<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-12">
        <table class="table table-dark">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item Name</th>
              <th scope="col">Price</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cart, index) in myCart">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ cart.itemName }}</td>
              <td>Rp. {{ cart.price }}</td>
              <td>
                <button
                  @click.prevent="deleteFromCart(cart.id)"
                  type="button"
                  class="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <RouterLink to="/checkout">
          <button type="button" class="btn btn-warning">
            Checkout
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
