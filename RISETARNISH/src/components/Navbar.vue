<script>
import { mapState, mapActions, mapWritableState } from 'pinia'

export default {
  name: '',
  components: { },
  data() { },
  computed: { },
  methods: { },
  created() { },
}
</script>

<template>
  <!-- Navbar -->
  <section class="container-fluid" id="nav">
    <nav class="navbar bg-dark sticky-top flex-md-nowrap p-0 shadow">
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
          <router-link to="/login" class="btn-nav">Login</router-link>
        </div>
        <div class="col-md-auto">
          <router-link to="/register" class="btn-nav">Register</router-link>
        </div>
      </div>
    </nav>
  </section>
</template>

<style>
</style>
  