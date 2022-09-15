<script>
import { mapState, mapActions } from "pinia";
import { useMedicineStore } from "../stores/medicine";
import ItemCard from "../components/itemCard.vue";

export default {
  methods: {
    ...mapActions(useMedicineStore, ["getMedicine"]),
  },
  components: {
    ItemCard,
  },
  computed: {
    ...mapState(useMedicineStore, ["medicines"]),
  },
  created() {
    this.getMedicine();
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <h1 class="mb-5">Penawaran Obat/Suplemen</h1>
      <ItemCard
        v-for="medicine in medicines"
        :key="medicine.id"
        :medicine="medicine"
      />
    </div>
  </div>
</template>

<style></style>
