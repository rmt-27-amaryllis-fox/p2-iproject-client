<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomePage from './views/HomePage.vue'
import NavBar from './components/NavBar.vue';
</script>

<template>

  <div style="background-color:rgb(30,30,50)">
    <NavBar />
    <RouterView />

  <!-- <RouterView /> -->

  </div>

</template>


