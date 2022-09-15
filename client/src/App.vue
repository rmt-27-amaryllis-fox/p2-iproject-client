<script>
import NavBar from "./components/NavBar.vue";
import { mapWritableState } from "pinia";
import { useUserStore } from "./stores/user";

export default {
  components: {
    NavBar,
  },
  computed: {
    ...mapWritableState(useUserStore, ["isLog"]),
  },
  created() {
    if (localStorage.getItem("token")) {
      this.isLog = true;
    } else {
      this.isLog = false;
    }
  },
};
</script>

<template>
  <NavBar />
  <router-view></router-view>
</template>

<style></style>
