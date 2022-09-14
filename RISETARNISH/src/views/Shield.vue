<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useErapiStore } from '../stores/erapi';
import Sidebar from '../components/Sidebar.vue';
import TableRow from '../components/TableRow.vue'
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Shields',
  components: { Sidebar, TableRow, Navbar },
  data() { },
  computed: {
    ...mapState(useErapiStore, {
      shieldsByCategory: 'shieldsByCategory'
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
            <th scope="col">Description</th>
            <th scope="col">Weight</th>
          </tr>
        </thead>
        <tbody>
          <TableRow 
            v-for="shield in shieldsByCategory"
            :key="shield.id"

            :shield="shield"
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
  