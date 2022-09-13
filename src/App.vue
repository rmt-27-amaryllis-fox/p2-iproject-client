<script>
import NavBar from "./components/NavBar.vue";
import {mapWritableState} from "pinia";
import {useUserStore} from "./stores/user";

export default {
  components: {NavBar},
  computed: {
    ...mapWritableState(useUserStore, ['identity'])
  },
  created() {
    if (localStorage.getItem('access_token')) {
      this.identity = localStorage.getItem('identity');
    }
  }
}
</script>

<template>
  <NavBar/>
  <router-view/>
</template>

<style scoped>
</style>
