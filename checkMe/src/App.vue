<script>
import { mapState } from "pinia";
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import LoadPage from "./views/LoadPage.vue";
import { useMedicStore } from "./stores/medic";

export default {
  components: { NavBar, LoadPage },
  computed: { ...mapState(useMedicStore, ["loadingFlag"]) },
};
</script>

<template>
  <header>
    <div class="wrapper">
      <NavBar />
    </div>
  </header>
  <div class="loading" v-if="loadingFlag">
    <LoadPage v-if="loadingFlag" />
  </div>
  <RouterView />
</template>

<style>
.loading {
  position: absolute; /* Sit on top of the page content */
  display: hidden; /* Hidden by default */
  width: 50%; /* Full width (cover the whole page) */
  height: 50%; /* Full height (cover the whole page) */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
  justify-content: center;
}
</style>
