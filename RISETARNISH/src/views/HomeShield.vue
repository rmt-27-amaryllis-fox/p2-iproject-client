<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useErapiStore } from '../stores/erapi'
import Card from '../components/Card.vue';
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'Home Shield',
  components: { Card, Navbar, Sidebar },
  data() {
    return {
      currentPage: 1
    }
  },
  computed: { 
    ...mapState(useErapiStore, {
      shields:'shields'
    })
  },
  methods: { 
    ...mapActions(useErapiStore, {
      getShield:'getShield'
    }),

  },
  created() {
    this.getShield()
  },
}
</script>

<template>
  <!-- Navbar -->
  <Navbar />
  <!-- Home -->
  <section id="home">
    <div id="card">
      <!-- Sidebar -->
      <Sidebar />
      <!-- Card -->
      <div class="row three-by-three">
        <Card
          v-for="shield in shields"
          :key="shield.id"
          :shield="shield"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
section#home {
  margin-top: 2em;
}
</style>
  