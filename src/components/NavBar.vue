<script>
import {mapWritableState} from "pinia";
import {useUserStore} from "../stores/user";

export default {
  name: "NavBar",
  computed: {
    ...mapWritableState(useUserStore, ['identity'])
  },
  methods: {
    onLogoutHandler() {
      Swal.fire({
        title: 'Are you sure want to logout?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.identity = '';
          localStorage.clear();
          this.$router.push({name: 'home'});
          Swal.fire(
              'Success!',
              'Goodbye!',
              'success'
          )
        }
      })
    },
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold" href="#">Kantong Saham</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown" style="width: 100%">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'news'}">News</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'watchlist'}">Watchlist</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'calculator'}">Calculator</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item" v-if="!identity">
            <router-link class="nav-link" :to="{name: 'login'}">Login</router-link>
          </li>
          <li class="nav-item" v-if="!identity">
            <router-link class="nav-link" :to="{name: 'register'}">Register</router-link>
          </li>
          <li class="nav-item dropdown" v-if="identity">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              {{ identity }}
            </a>
            <ul class="dropdown-menu dropdown-menu-end rounded-0">
              <li>
                <div>
                  <router-link class="dropdown-item" :to="{name: 'profile'}">My Profile</router-link>
                </div>
              </li>
              <li><a class="dropdown-item" href="#" @click.prevent="onLogoutHandler">Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<style scoped>

li > div .router-link-active {
  font-weight: bold;
  color: black;
}

.router-link-active {
  color: white;
}
</style>