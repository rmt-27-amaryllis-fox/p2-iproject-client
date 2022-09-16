<script>
  import { mapState, mapActions, mapWritableState } from 'pinia'
  import { useErapiStore } from '../stores/erapi'
  import Card from '../components/Card.vue';
  import Navbar from '../components/Navbar.vue'
  import Sidebar from '../components/Sidebar.vue'
import { useUserStore } from '../stores/user';
  
  export default {
    name: 'Home Shield',
    components: { Card, Navbar, Sidebar },
    data() {
      return {
        title: '',
        rightHand: '',
        leftHand: '',
        helmet: '',
        chestArmor: '',
        gauntlet: '',
        legArmor: '',
      }
    },
    computed: { 
      ...mapState(useUserStore, {
      })
    },
    methods: { 
      ...mapActions(useUserStore, {
        addBookmark: 'addBookmark'
      }),
      
      async eventAdd() {
        this.addBookmark(this.title, this.rightHand, this.leftHand, this.helmet, this.chestArmor, this.gauntlet, this.legArmor)
      }
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
        <!-- Form -->
        <div class="row customize">
          <div class="row">
            <form id="types-form" @submit.prevent="eventAdd">
              <div class="mb-3">
                <label for="types-name">Title</label>
                <input v-model="title" type="text" class="form-control" placeholder="Enter Right Hand" autocomplete="off" />
              </div>
              <div class="mb-3">
                <label for="types-name">Right Hand (Weapon)</label>
                <input v-model="rightHand" type="text" class="form-control" placeholder="Enter Right Hand" autocomplete="off" />
              </div>
              <div class="mb-3">
                <label for="types-name">Left Hand (Shield)</label>
                <input v-model="leftHand" type="text" class="form-control" placeholder="Enter Left Hand" autocomplete="off" />
              </div>
              <div class="mb-3">
                <label for="types-name">Helmet</label>
                <input v-model="helmet" type="text" class="form-control" placeholder="Enter Helmet" autocomplete="off" />
              </div>
              <div class="mb-3">
                <label for="types-name">Chest Armor</label>
                <input v-model="chestArmor" type="text" class="form-control" placeholder="Enter Chest Armor" autocomplete="off" />
              </div>
              <div class="mb-3">
                <label for="types-name">Gauntlets</label>
                <input v-model="gauntlet" type="text" class="form-control" placeholder="Enter Gauntlets" autocomplete="off" />
              </div>
              <div class="mb-3">
                <label for="types-name">Leg Armor</label>
                <input v-model="legArmor" type="text" class="form-control" placeholder="Enter Leg Armor" autocomplete="off" />
              </div>
              <button class="btn btn-outline-primary">Save</button>
            </form>
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
    