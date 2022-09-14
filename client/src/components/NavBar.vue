<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  methods: {
    ...mapActions(useUserStore, ["logout"]),
  },
  computed: {
    ...mapState(useUserStore, ["isLog"]),
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light d-flex">
    <div class="container-fluid d-flex">
      <a class="navbar-brand d-flex" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <router-link v-if="!isLog" to="/login" class="nav-link"
            >Sign In</router-link
          >
          <div class="vr"></div>
          <router-link v-if="!isLog" to="/register" class="nav-link"
            >Register</router-link
          >
          <a v-if="isLog" @click.prevent="logout" class="nav-link" href="#"
            >Sign out</a
          >
          <div class="vr"></div>
          <router-link v-if="isLog" to="/mycart" class="nav-link"
            ><i class="bi bi-cart4"></i
          ></router-link>
          <div class="vr"></div>

          <!-- <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<style></style>
