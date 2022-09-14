<script>
import { mapActions, mapWritableState } from "pinia";
import { useLoginMethodStore } from "../stores/loginMethod";

export default {
  computed: {
    ...mapWritableState(useLoginMethodStore, ["isLogin", "username_logged"]),
    ...mapActions(useLoginMethodStore, ["logOut"]),
  },
  methods: {
    async logoutMethod() {
      await this.logOut;
    },
  },

  // biar ttp login meski di refresh pasksa
  created() {
    if (localStorage.getItem("access_token")) {
      this.isLogin = true;
    }
  },
};
</script>

<template>
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand">
        <img
          src="../assets/logo-kartu.jpg"
          class="me-2"
          height="20"
          alt="yunikuro Logo"
          loading="lazy"
        />
        <small>simpletcg</small>
      </a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!-- Link -->
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/myprofile" class="nav-link">myprofile</router-link>
        </li>
        <li v-if="isLogin === true" class="nav-item">
          <router-link to="/wishlists" class="nav-link"
            >My Wishlists</router-link
          >
        </li>
        <li v-if="isLogin === false" class="nav-item">
          <router-link to="/register" class="nav-link">Register</router-link>
        </li>
        <li v-if="isLogin === false" class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
      </ul>
      <div v-if="isLogin === true" class="navbar-brand">
        hola, {{ username_logged }}
      </div>

      <div v-if="isLogin === true" class="navbar-brand">
        <a
          @click.prevent="logoutMethod"
          class="navbar-brand btn btn-danger"
          href=""
          ><i class="bi bi-power"></i> Log Off</a
        >
      </div>
    </div>
  </nav>
</template>

<style></style>
