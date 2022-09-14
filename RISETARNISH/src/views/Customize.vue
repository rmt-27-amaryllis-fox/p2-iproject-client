<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useErapiStore } from '../stores/erapi'
import { useUserStore } from '../stores/user';
import Card from '../components/Card.vue';
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import CardCustom from '../components/CardCustom.vue'

export default {
  name: 'Home Shield',
  components: { Card, Navbar, Sidebar, CardCustom },
  data() {
    return {
    }
  },
  computed: { 
    ...mapWritableState(useUserStore, {
      bookmarks: 'bookmarks',
      isLogin: 'isLogin'
    })
  },
  methods: { 
    ...mapActions(useUserStore, {
      getBookmark: 'getBookmark'
    }),

  },
  created() {
    this.getBookmark()
  },
}
</script>

<template>
  <!-- Navbar -->
  <Navbar />
  <!-- Home -->
  <section id="home">
    <router-link v-if="isLogin" to="/add" class="btn btn-outline-secondary mb-3">ADD NEW CUSTOMIZE</router-link>
    <div id="card">
      <!-- Sidebar -->
      <Sidebar />
      <!-- Card -->
      <div class="row customize">
        <CardCustom 
          v-for="bookmark in bookmarks"
          :key="bookmark.id"
          :bookmark="bookmark"
        />
        
      </div>
    </div>
  </section>
</template>

<style scoped>
section#home {
  margin-top: 2em;
}

div.grid-4-by-4 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  height: auto;
}

div.customize {
  margin-right: 1.5em;
  margin-left: 1.5em;
}

div.card {
  margin-bottom: 1.5em;
}
</style>
  