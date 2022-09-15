<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
export default {
  Navbar,
  components: { Navbar },
};
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style scoped></style>
