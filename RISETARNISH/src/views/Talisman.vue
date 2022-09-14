<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useErapiStore } from '../stores/erapi';
import Sidebar from '../components/Sidebar.vue';
import TableRow from '../components/TableRow.vue'
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Weapons',
  components: { Sidebar, TableRow, Navbar },
  data() {
    return {
      currentPage: 1
    }
  },
  computed: {
    ...mapState(useErapiStore, {
      talismans:'talismans'
    })
  },
  methods: {
    ...mapActions(useErapiStore, {
      getTalisman: 'getTalisman'
    }),

    async triggerPagination(page) {
      this.currentPage = page
      if (this.currentPage <= 1) {
        this.currentPage = 1
        this.getTalisman(this.currentPage)
      } else if (this.currentPage >= 5) {
        this.currentPage = 5
        this.getTalisman(this.currentPage)
      } else {
        this.getTalisman(this.currentPage)
      }
    },
  },
  created() {
    this.getTalisman()
  },
}
</script>

<template>

  <Navbar />
  
  <nav>
    <ul class="pagination">
      <li class="page-item"><a @click.prevent="triggerPagination(currentPage-1)" class="page-link" href="#">Previous</a></li>
      <li v-for="(element, i) in 5" :key="element" class="page-item"><a @click.prevent="triggerPagination(element)" class="page-link" >{{ element }}</a></li>
      <li class="page-item"><a @click.prevent="triggerPagination(currentPage+1)" class="page-link" >Next</a></li>
    </ul>
  </nav>
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
            <th scope="col">Effect</th>
          </tr>
        </thead>
        <tbody>
          <TableRow 
            v-for="talisman in talismans"
            :key="talisman.id"
            :talisman="talisman"
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
nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 2em;
  margin-right: 1.5em;
}
</style>
  