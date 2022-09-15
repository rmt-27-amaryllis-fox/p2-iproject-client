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
        this.$router.push("/owned")
      },
      returnHome() {
        this.isLogin = true
        this.$router.push("/")
      },
      login(){
        this.$router.push('/login')
      },
      goHome(){
        this.$router.push('/')
      }
    },
    computed: {
          ...mapWritableState(useCounterStore, ["isLogin"]),
    },
    created(){
      if(localStorage.access_token){
        this.isLogin=true
      }
    }
  
        
  }
  </script>
  
  <template>
  
    <section id="navbar-section">
      <navbar class="navbar mb-5 navbar-expand-lg mb-5 border-bottom" style="background-color: rgba(120, 0, 0, 1)">
        <img src="../assets/met-logo1.jpg" style="max-width:10%;height:auto">
        <div class="container-fluid">
          <a class="navbar-brand text-light" style="font-size:40px;font-family: monospace;" href="#" @click="this.$router.push('/')">Digital.</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText" v-if="isLogin == true" >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-light" style="font-family:monospace" aria-current="page" href="#"
                @click="returnHome">Home</a>
              </li>
              <li class="nav-item">
                <a id="histories" style="font-family:monospace" class="nav-link text-white" href="#" @click="changePage">My Collection</a>
              </li>
            </ul>
            <button id="logout" type="button" class="btn text-white" style="background-color:rgb(120,12,12);font-family:monospace;font-size:20px" @click="logoutHandler">
              Logout
            </button>
          </div>
          <div class="flex flex-end">
          <button v-if="isLogin == false" id="logout" type="button" class="btn text-white" style="background-color:rgb(120,12,12);font-family:monospace;font-size:20px" @click.prevent="goHome">
            Home
          </button>
          <button v-if="isLogin == false" id="logout" type="button" class="btn text-white" style="background-color:rgb(120,12,12);font-family:monospace;font-size:20px" @click.prevent="login">
            Login
          </button>
        </div>
        </div>
      </navbar>
    </section>
  
  </template>
  
  