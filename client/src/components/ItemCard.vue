<script>
import { mapActions } from "pinia";
import { useMedicineStore } from "../stores/medicine";
export default {
  props: ["medicine"],
  methods: {
    ...mapActions(useMedicineStore, ["getMedicineById"]),
    detail(id) {
      console.log(id);
      this.$router.push(`/detail/${id}`);
    },
  },
};
</script>

<template>
  <div class="col-4 mb-3">
    <div class="card" style="width: 18rem; height: 400px">
      <img
        :src="medicine.imgUrl"
        class="card-img-top"
        style="height: 200px; width: 300px"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title text-center">{{ medicine.name }}</h5>
        <h4 class="card-text text-center text-success">
          Rp.{{ medicine.price.toLocaleString("ID-id") }}
        </h4>
      </div>
      <a @click="detail(medicine.id)" href="#" class="stretched-link"></a>
    </div>
  </div>
</template>

<style></style>
