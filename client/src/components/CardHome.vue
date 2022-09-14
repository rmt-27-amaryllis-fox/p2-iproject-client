<script>
import { mapActions } from "pinia";
import { useInventoriesStore } from "../stores/inventories";
export default {
  props: ["data"],
  methods: {
    ...mapActions(useInventoriesStore, ["deleteProduct", "getProductbyId"]),
    async deleted() {
      await this.deleteProduct(this.data.id);
    },
    edit() {
      this.$router.push(`/editproduct/${this.data.id}`);
      this.getProductbyId(this.data.id);
    },
  },
};
</script>
<template>
  <div class="col-12 col-md-3 mt-3">
    <div class="card shadow">
      <img :src="data.image" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ data.name }}</h5>
        <h5 class="card-text">stock: {{ data.stock }}</h5>
        <div class="row">
          <div class="col mt-2">
            <button @click="edit" type="submit" class="btn btn-outline-primary">
              Edit
            </button>
            <button
              @click="deleted"
              type="submit"
              class="btn btn-outline-primary m-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
