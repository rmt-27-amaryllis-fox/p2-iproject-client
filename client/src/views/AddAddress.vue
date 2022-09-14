<script>
import { mapActions } from "pinia";
import { useCartStore } from "../stores/cart";

export default {
  methods: {
    ...mapActions(useCartStore, ["addAddress"]),
  },
  data() {
    return {
      value: {
        name: "",
        street: "",
        city: "",
      },
    };
  },
};
</script>

<template>
  <div class="container">
    <h1>Add Address</h1>
    <div class="row">
      <form @submit.prevent="addAddress(value)">
        <div class="mb-3 col-auto">
          <label for="Name" class="form-label">Name</label>
          <input v-model="value.name" type="text" class="form-control" />
        </div>
        <div class="mb-3 col-auto">
          <label for="Name" class="form-label">Street</label>
          <input v-model="value.street" type="text" class="form-control" />
        </div>
        <div class="mb-3 col-auto">
          <label for="Name" class="form-label">City</label>
          <select
            v-model="value.city"
            id="transportation-type"
            class="form-select"
            required
          >
            <option selected disabled>-- Select Type --</option>
            <option value="151">Jakarta Barat</option>
            <option value="152">Jakarta Pusat</option>
            <option value="153">Jakarta Selatan</option>
            <option value="154">Jakarta Timur</option>
            <option value="155">Jakarta Utara</option>
          </select>
        </div>

        <button type="submit" class="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  </div>
</template>

<style></style>
