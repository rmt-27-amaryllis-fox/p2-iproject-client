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
    }
  },
  computed: { 
    ...mapState(useErapiStore, {
    })
  },
  methods: { 
    ...mapActions(useErapiStore, {
    }),

  },
  created() {
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
      <div class="row customize">
        <div class="card">
          <div class="card-body">
            <h2>All-Knowing Set</h2>
            <div class="grid-4-by-4">
              <div class="card item">
                <img src="https://eldenring.fanapis.com/images/armors/17f69751613l0i0nbp9nsdqjza4rxf.png">
              </div>
              <div class="card item">
                <img src="https://eldenring.fanapis.com/images/armors/17f69515b49l0i0nbno079cqzlskebf.png">
              </div>
              <div class="card item">
                <img src="https://eldenring.fanapis.com/images/armors/17f6984f152l0i0nc38cztqhxqc6rw.png">
              </div>
              <div class="card item">
                <img src="https://eldenring.fanapis.com/images/armors/17f696e0685l0i0nblzy58h0qvewk.png">
              </div>
            </div>
            <div class="grid-4-by-4">
              <div class="card item">
                <img src="https://eldenring.fanapis.com/imgs/weapons/17f69d12746l0i1ojbzxzgz6gfjsi.png">
              </div>
              <div class="card item">
                <img src="https://eldenring.fanapis.com/images/shields/17f69c62fe8l0i124u8fi4nc7dbfbf.png">
              </div>
            </div>
          </div>
        </div>
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
  height: 45%;
}

div.customize {
  margin-right: 1.5em;
  margin-left: 1.5em;
}

div.card {
  margin-bottom: 1.5em;
}
</style>
  