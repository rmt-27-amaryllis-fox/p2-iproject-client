<script>
import { mapWritableState, mapActions } from 'pinia';
import { useCounterStore } from './stores/counter';
import Sidebar from './components/Sidebar.vue';
export default {
  computed: {
    ...mapWritableState(useCounterStore, ["alreadyLogin"])
  },
  created() {
    this.alreadyLogin = localStorage.access_token;
  },
  components: { Sidebar }
}
</script>

<template>
  <div class="d-flex vh-100 align-items-center" style="background-color: #FBF9F9;">
    <div class="container-fluid">
      <div class="row">
        <Sidebar v-if="alreadyLogin" />
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style>

</style>
