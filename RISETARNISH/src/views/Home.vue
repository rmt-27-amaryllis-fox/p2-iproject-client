<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useErapiStore } from '../stores/erapi'
import Card from '../components/Card.vue';
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import Weapons from './Weapons.vue'

export default {
  name: 'Home',
  components: { Card, Navbar, Sidebar, Weapons },
  data() {
    return {
      currentPage: 1
    }
  },
  computed: {
    ...mapState(useErapiStore, {
      weapons: 'weapons'
    })
  },
  methods: {
    ...mapActions(useErapiStore, {
      getWeapon: 'getWeapon',
      weaponByCategory: 'weaponByCategory'
    }),

    async triggerPagination(page) {
      this.currentPage = page
      if (this.currentPage <= 1) {
        this.currentPage = 1
        this.getWeapon(this.currentPage)
      } else if (this.currentPage >= this.weapons.totalData) {
        this.currentPage = this.weapons.totalData
        this.getWeapon(this.currentPage)
      } else {
        this.getWeapon(this.currentPage)
      }
    },

    async test() {
      console.log('test')
    }

  },
  created() {
    this.getWeapon()
  },
}
</script>

<template>
  <!-- Navbar -->
  <Navbar />
  <!-- Home -->
  <section id="home">
    <!-- nanti kepake -->
    <nav>
      <ul class="pagination">
        <li class="page-item"><a @click.prevent="triggerPagination(currentPage-1)" class="page-link" href="#">Previous</a></li>
        <li v-for="(element, i) in weapons.totalData" :key="element" class="page-item"><a @click.prevent="triggerPagination(element)" class="page-link" >{{ element }}</a></li>
        <li class="page-item"><a @click.prevent="triggerPagination(currentPage+1)" class="page-link" >Next</a></li>
      </ul>
    </nav>

    <div id="card">
      <!-- Sidebar -->
      <Sidebar />
      <!-- Card -->
      <div class="row three-by-three">
        <Card
          v-for="weapon in weapons.rows"
          :key="weapon.id"
          :weapon="weapon"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
nav {
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 1.5em;
}
</style>
  