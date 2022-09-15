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
    <div class="card bungkusCard">
      <img
        style="width: auto; height: 520px; object-fit: cover"
        :src="data.image"
        class="card-img-top"
      />
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
<style scoped>
.bungkusCard {
  transition: 0.5s;
}
.bungkusCard:hover {
  box-shadow: 0px 0px 10px rgba(57, 154, 231, 0.6);
  border-radius: 10px;
}
</style>
