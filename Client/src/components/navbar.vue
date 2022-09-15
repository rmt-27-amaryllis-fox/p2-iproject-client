<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-flex">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <router-link to="/" class="nav-item nav-link text-decoration-none"
          ><li class="">Home</li></router-link
        >
        <router-link
          to="/register"
          v-if="!isLogin"
          class="nav-item nav-link text-decoration-none"
        >
          <li>Register</li>
        </router-link>

        <router-link
          to="/login"
          v-if="!isLogin"
          class="nav-item nav-link text-decoration-none"
        >
          <li>Login</li>
        </router-link>
      </ul>
    </div>
    <button
      @click.prevent="logoutAction"
      style="background: transparent"
      class="float-end text-white"
      v-if="isLogin"
    >
      Log Out
    </button>
  </nav>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  computed: {
    ...mapState(useCounterStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["logoutAction"]),
  },
};
</script>

<style></style>
