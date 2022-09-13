<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import { mapState, mapActions } from "pinia";
import { useInventoriesStore } from "./stores/inventories";
import { useEmployeesStore } from "./stores/employee";
export default {
  components: {
    Navbar,
  },
  // computed: {
  //   ...mapState(useInventoriesStore, ["inventories"]),
  // },
  methods: {
    ...mapActions(useInventoriesStore, ["getInventories", "getCategories"]),
    ...mapActions(useEmployeesStore, ["getEmployees"]),
  },
  created() {
    this.getInventories();
    this.getEmployees();
    this.getCategories();
  },
};
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style></style>
