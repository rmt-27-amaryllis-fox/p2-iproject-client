<script>
import { mapActions } from "pinia";
import { useInventoriesStore } from "../stores/inventories";
export default {
  data() {
    return {
      name: "",
      image: "",
      stock: "",
      CategoryId: "",
    };
  },
  methods: {
    ...mapActions(useInventoriesStore, ["addProduct"]),
    async addProduk() {
      let name = this.name;
      let image = this.image;
      let stock = this.stock;
      let CategoryId = this.CategoryId;
      await this.addProduct(name, image, stock, CategoryId);
    },
  },
};
</script>
<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 col-md-6 offset-md-3">
        <form @submit.prevent="addProduk" class="shadow">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title mb-3 text-center">Add Product</h3>
              <div class="mb-3">
                <label for="text" class="form-label">Name</label>
                <input v-model="name" type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="form-label">imageUrl</label>
                <div>
                  <input v-model="image" type="text" class="form-control" />
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">stock</label>
                <input v-model="stock" type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="form-label">categories</label>
                <select v-model="CategoryId" class="form-select">
                  <option value="" selected disabled>Choose categories</option>
                  <option value="1">Pakaian</option>
                  <option value="2">Warehouse</option>
                </select>
              </div>
              <div class="mb-3">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style></style>
