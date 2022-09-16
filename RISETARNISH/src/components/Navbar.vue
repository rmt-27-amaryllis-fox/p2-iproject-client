<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useUserStore } from '../stores/user';

export default {
  name: '',
  components: { },
  data() { },
  computed: {
    ...mapWritableState(useUserStore, {
      isLogin: 'isLogin'
    })
  },
  methods: { },
  created() {
  },
}
</script>

<template>
  <!-- Navbar -->
  <section class="container-fluid" id="nav">
    <nav class="navbar sticky-top flex-md-nowrap p-0 shadow">
      <div class="container-fluid row">
        <div class="col">
          <a class="navbar-brand col" href="#">
            <img src="../assets/eldenring-rune-icon.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
            H8OMORING
          </a>
        </div>
        <div class="col-md-auto">
          <router-link to="/" class="btn-nav">Home</router-link>
        </div>
        <div class="col-md-auto">
          <router-link v-if="!isLogin" to="/login" class="btn-nav">Login</router-link>
        </div>
        <div class="col-md-auto">
          <router-link v-if="!isLogin" to="/register" class="btn-nav">Register</router-link>
        </div>
      </div>
    </nav>
  </section>
</template>

<style>
nav.navbar {
  background-color: #06172cef;
}
</style>
  