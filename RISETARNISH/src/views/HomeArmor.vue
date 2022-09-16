<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useErapiStore } from '../stores/erapi'
import Card from '../components/Card.vue';
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import Weapons from './Weapons.vue'

export default {
  name: 'Home Armor',
  components: { Card, Navbar, Sidebar, Weapons },
  data() {
    return {
      currentPage: 1
    }
  },
  computed: { 
    ...mapState(useErapiStore, {
      armors:'armors'
    })
  },
  methods: { 
    ...mapActions(useErapiStore, {
      getArmor: 'getArmor'
    }),

  },
  created() {
    this.getArmor()
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
          v-for="armor in armors"
          :key="armor.id"
          :armor="armor"
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
  