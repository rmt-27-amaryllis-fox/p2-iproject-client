<template>
  <sidebar/>
  <router-view/>
</template>

<script>
  import sidebar from '../components/Sidebar.vue';

  export default {
    components: {
      sidebar
    }
  }
</script>