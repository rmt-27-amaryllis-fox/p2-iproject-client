<script>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<template>
  <header>
    <div class="wrapper"></div>
    <NavBar />
  </header>
  <RouterView />
</template>

<style></style>
