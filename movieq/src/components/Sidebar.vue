<template>
  <nav class="navbar navbar-expand-lg">
    <router-link to="/" class="navbar-brand p-2">Home</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <span @click="logoutHandler" class="nav-item nav-link active"  style="cursor: pointer; color: #ffff">Log Out</span>
        <router-link to="/login" class="nav-item nav-link active" style="color:#ffff" >Log In</router-link>
      </div>
    </div>
  </nav>
</template>


<script>
import { mapActions } from 'pinia';
import {useProjectStore} from '../stores/store'

export default {
  data: () => ({

  }),
  methods: {
    ...mapActions(useProjectStore, ['logout']),
    logoutHandler(){
      this.logout()
    }
  }
}
</script>

<style>
.navbar{
  background-color: #111827
}

.navbar .navbar-brand {
  color: #fff
}
</style>