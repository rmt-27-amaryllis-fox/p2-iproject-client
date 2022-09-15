<template>
  <div class="container">
    <sidebar />
    <router-view />
  </div>
</template>

<script>
import sidebar from '../components/Sidebar.vue';

export default {
  components: {
    sidebar
  }
}
</script>

<style>
.container {
  display: flex;
  min-height: 100vh;
  padding: 0;
}
</style>