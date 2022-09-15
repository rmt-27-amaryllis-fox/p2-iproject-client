<script>
import CardEmploye from "./CardEmploye.vue";
import { mapState, mapWritableState } from "pinia";
import { useEmployeesStore } from "../stores/employee";
import { useInventoriesStore } from "../stores/inventories";
export default {
  components: {
    CardEmploye,
  },
  methods: {},
  computed: {
    ...mapState(useEmployeesStore, ["employees"]),
    ...mapWritableState(useInventoriesStore, ["loading"]),
  },
};
</script>
<template>
  <div class="container mt-3">
    <div class="row mt-3">
      <div class="d-flex justify-content-center">
        <h4>List Employees</h4>
      </div>
      <!-- CardHome -->
      <div v-if="!loading" class="row mt-3">
        <CardEmploye v-for="el in employees" :key="el.id" :data="el" />
      </div>
      <div
        v-else-if="loading"
        class="d-flex align-items-center justify-content-center"
      >
        <img
          style="width: 500px; height: 500px"
          src="https://c.tenor.com/6gHLhmwO87sAAAAi/gg.gif"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
