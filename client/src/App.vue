<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<template>
  <Navbar />
  <router-view> </router-view>
</template>

<style>
.form-label,
.form-control,
.caption,
.card-weather-desc,
.card-created-at,
.dropdown-options {
  font-family: "Montserrat", sans-serif;
}

.title,
.btn,
.post-detail-caption {
  font-family: "Poppins", sans-serif;
}

.title-big,
.card-location {
  font-family: "League Spartan", sans-serif;
}
</style>
