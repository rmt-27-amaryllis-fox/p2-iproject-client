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
  <div
    class="col-8 col-sm-5 col-md-4 col-lg-3 mt-3 d-flex justify-content-center"
  >
    <div class="card bungkusCard">
      <img :src="data.image" class="card-img-top imgCard" />
      <div class="card-body">
        <h5 class="card-title">
          <span class="badge bg-secondary">{{ data.name }}</span>
        </h5>
        <h5 class="card-text">
          <span class="badge bg-secondary">stock: {{ data.stock }}</span>
        </h5>
        <div class="row">
          <div class="d-grid mt-2">
            <button @click="deleted" type="submit" class="btn btn-primary mb-2">
              Delete
            </button>
            <button @click="edit" type="submit" class="btn btn-primary">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bungkusCard {
  transition: 0.5s;
  height: auto;
  width: 90%;
}
.bungkusCard:hover {
  box-shadow: 0px 0px 10px rgba(57, 154, 231, 0.6);
  border-radius: 10px;
  transform: scale(1.1);
  z-index: 3;
}
.imgCard {
  object-fit: fill;
  height: auto;
  width: 100%;
}
</style>
