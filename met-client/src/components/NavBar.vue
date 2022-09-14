<script>
  import { mapWritableState } from 'pinia';
  import { useCounterStore } from '../stores/counter';
  
  
  
  export default {
    methods: {
      logoutHandler() {
        localStorage.clear(),
        this.isLogin = false
          this.$router.push("/login")
      },
      changePage() {
        this.isLogin = true
        this.$router.push("/favourites")
        console.log(error);
      },
      returnHome() {
        this.isLogin = true
        this.$router.push("/home")
      },
    },
    computed: {
          ...mapWritableState(useCounterStore, ["isLogin"]),
      },
  }
  </script>
  
  <template>
  
    <section id="navbar-section">
      <nav class="navbar navbar-expand-lg mb-5 border-bottom" style="background-color: rgba(200, 0, 0, 0.5)">
        <img src="../assets/met-logo1.jpg" style="max-width:10%;height:auto">
        <div class="container-fluid">
          <a class="navbar-brand text-light" style="font-size:40px;font-family: monospace;" href="#">Digital.</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText" v-if="this.isLogin">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"
                @click="returnHome">Home</a>
              </li>
              <li class="nav-item">
                <a id="histories" class="nav-link" href="#" @click="changePage">My Favourites</a>
              </li>
            </ul>
            <button id="logout" type="button" class="btn btn-danger" @click="logoutHandler">
              Logout
            </button>
          </div>
        </div>
      </nav>
    </section>
  
  </template>
  
  