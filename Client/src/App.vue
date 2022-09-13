<script>
import { RouterLink, RouterView } from "vue-router";
import navbarVue from "./components/navbar.vue";
export default {
  components: {
    navbarVue,
  },
};
</script>

<template>
  <div>
    <navbarVue></navbarVue>
    <RouterView />
  </div>
</template>

<style></style>
