<script>
import { RouterView } from 'vue-router'
import { mapActions } from 'pinia';
import { useAllStateStore } from './stores/allState.js';

export default {
  components: {
    RouterView,
  },
  methods: {
    ...mapActions(useAllStateStore, ["changeStatusLogin", "getMyJobs", "getJobs"]),
  },
  created() {
    this.changeStatusLogin();
  },
}
</script>

<template>
  <RouterView />
</template>

<style>

</style>
