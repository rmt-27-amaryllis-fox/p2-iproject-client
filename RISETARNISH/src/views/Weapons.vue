<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useErapiStore } from '../stores/erapi';
import Sidebar from '../components/Sidebar.vue';
import TableRow from '../components/TableRow.vue'
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Weapons',
  components: { Sidebar, TableRow, Navbar },
  data() { },
  computed: {
    ...mapState(useErapiStore, {
      WeaponsByCategory:'WeaponsByCategory'
    })
  },
  methods: { },
  created() {
  },
}
</script>

<template>

  <Navbar />
  
  <div id="card">
    <!-- Sidebar -->
    <Sidebar />
    <!-- Card -->
    <div>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col" width="90px">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phy</th>
            <th scope="col">Mag</th>
            <th scope="col">Fire</th>
            <th scope="col">Ligh</th>
            <th scope="col">Holy</th>
            <th scope="col">Crit</th>
            <th scope="col">Scales With</th>
            <th scope="col">Weight</th>
          </tr>
        </thead>
        <tbody>
          <TableRow 
            v-for="weapon in WeaponsByCategory"
            :key="weapon.id"
            :weapon="weapon"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
div#card {
  margin-top: 2em;
  margin-right: 1.5em;
  margin-left: 0.5em;
}
</style>
  