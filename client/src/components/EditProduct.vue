<script>
import { mapWritableState, mapActions } from "pinia";
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
    ...mapActions(useInventoriesStore, ["editProduct"]),
    async editProduk() {
      let name = this.oneProduct.name;
      let image = this.oneProduct.image;
      let stock = this.oneProduct.stock;
      let CategoryId = this.oneProduct.CategoryId;
      await this.editProduct(name, image, stock, CategoryId);
    },
  },
  computed: {
    ...mapWritableState(useInventoriesStore, ["oneProduct"]),
  },
  created() {
    this.name = this.oneProduct.name;
    this.image = this.oneProduct.image;
    this.stock = this.oneProduct.stock;
    this.CategoryId = this.oneProduct.CategoryId;
  },
};
</script>
<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-12 col-md-6 offset-md-3">
        <form @submit.prevent="editProduk" class="shadow">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title mb-3 text-center">Add Product</h3>
              <div class="mb-3">
                <label for="text" class="form-label">Name</label>
                <input
                  v-model="oneProduct.name"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">imageUrl</label>
                <div>
                  <input
                    v-model="oneProduct.image"
                    type="text"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">stock</label>
                <input
                  v-model="oneProduct.stock"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">categories</label>
                <select v-model="oneProduct.CategoryId" class="form-select">
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
