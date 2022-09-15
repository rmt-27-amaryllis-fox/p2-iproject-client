<script>
    import { mapState, mapActions } from 'pinia';
    import { useUserStore } from '../stores/user';
    export default {
        computed : {
            ...mapState(useUserStore, ['isLoggedIn', 'inLoginPage'])
        },
        methods : {
            ...mapActions(useUserStore, ['logout', 'moveToLogin', 'moveToRegister'])
        }
    }
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-color">
  <div class="container-fluid">
    <!-- <h1>Cryptoverse</h1> -->
    <img src="../assets/cryptoverse.png" alt="" class="logo-navbar">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex" id="navbarNav">
      <ul class="navbar-nav d-flex">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item" v-if="!isLoggedIn">
          <!-- <router-link to="/register" class="nav-link">Register</router-link> -->
          <a href="" @click.prevent="moveToRegister" class="nav-link">Register</a>
        </li>
        <li class="nav-item" v-if="!isLoggedIn">
          <!-- <router-link to="/login" class="nav-link">Login</router-link> -->
          <a href="" @click.prevent="moveToLogin" class="nav-link">Login</a>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <router-link to="/wallet" class="nav-link">Wallet</router-link>
        </li>
        <li class="nav-item logout" v-if="isLoggedIn">
          <a href="" @click.prevent="logout" class="nav-link">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>