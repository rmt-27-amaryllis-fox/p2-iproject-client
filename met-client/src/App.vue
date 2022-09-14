<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomePage from './views/HomePage.vue'
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

</script>

<template>

  <div style="background-color:rgb(30,30,50)">
    <NavBar />
    <RouterView />
    <!-- <RouterView /> -->
    <Footer />

  </div>

</template>




