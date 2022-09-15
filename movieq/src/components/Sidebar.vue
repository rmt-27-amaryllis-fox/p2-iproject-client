<template>
  <section class="sidebar">
    <div class="header">
      <div class="list-item">
        <p class="greeting">Hello There!</p>
      </div>
    </div>
    <div class="main">
      <div class="list-item">
        <router-link to="/" class="description">Movies</router-link>
      </div>
      <div class="list-item" v-if="!isPaid && isLogin">
        <router-link to="/subscription" class="description">Subscription</router-link>
      </div>
      <div class="list-item" v-if="!isLogin">
        <router-link to="/login" class="description">Login</router-link>
      </div>
      <div @click="logoutHandler" class="list-item" v-else>
        <span class="description">Log Out</span>
      </div>
    </div>
  </section>
  <!-- <nav class="navbar navbar-expand-lg">
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
  </nav> -->
</template>


<script>
import { mapActions, mapWritableState } from 'pinia';
import { useProjectStore } from '../stores/store'

export default {
  methods: {
    ...mapActions(useProjectStore, ['logout']),
    logoutHandler() {
      this.logout()
    }
  },
  computed: {
    ...mapWritableState(useProjectStore, ['isLogin', 'isPaid'])
  },
  created() {
    const paid = localStorage.paid
    if (localStorage.access_token) {
      this.isLogin = true
    }

    if (paid) {
      console.log("masuk bang")
      this.isPaid = true
    } else {
      console.log("masuk else")
    }
  }
}
</script>

<style>
/* SIDEBAR SECTION*/
.sidebar {
  background-color: #111827;
  width: 260px;
  padding: 24px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

.main-content {
  background-color: #eeee;
  flex-grow: 1;
}

.sidebar .header {
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  text-align: center;
  color: #ffff;
}

.sidebar .header .list-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 10px;
  border-radius: 8px;
  height: 40px;
  box-sizing: border-box;
  font-size: 20px;
}

.sidebar .main .list-item .description {
  font-style: normal;
  font-weight: 400;
  justify-content: center;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #ffff;
  text-decoration: none;
}

.sidebar .main .list-item {
  flex-direction: row;
  align-items: center;
  padding: 12px 10px;
  border-radius: 8px;
  width: 212px;
  box-sizing: border-box;
}

.sidebar .main .list-item:hover {
  cursor: pointer;
  background: #ff9900;
  transition: all ease-in 0.2s;
}
</style>