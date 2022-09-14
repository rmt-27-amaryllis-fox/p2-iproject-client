<script>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import HomePage from "./views/HomePage.vue";
export default {
  components: {
    NavBar,
    HomePage,
  },
};
</script>

<template>
  <NavBar />
  <!-- <HomePage /> -->

  <RouterView />
</template>

<style scoped></style>
