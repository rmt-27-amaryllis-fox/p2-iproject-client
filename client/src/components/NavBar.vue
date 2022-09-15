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
  <!-- <nav class="navbar navbar-expand-lg bg-light d-flex">
    <div class="container-fluid d-flex">
      <a class="navbar-brand d-flex" href="#">Apotek Cemara</a>
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
          <div class="vr"></div>
          <router-link v-if="isLog" to="/mycart" class="nav-link"
            ><i class="bi bi-cart4"></i
          ></router-link>
          <div class="vr"></div>
          <router-link v-if="isLog" to="/address" class="nav-link"
            >Add Address</router-link
          >
          <div class="vr"></div>
          <a v-if="isLog" @click.prevent="logout" class="nav-link" href="#"
            >Sign out</a
          >
        </ul>
      </div>
    </div>
  </nav> -->
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Apotek Cemara</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" class="nav-link active" aria-current="page"
            >Home</router-link
          >
          <div class="vr"></div>
          <router-link v-if="isLog" to="/address" class="nav-link"
            >Add Address</router-link
          >
          <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
          <div class="vr"></div>
          <router-link v-if="isLog" to="/mycart" class="nav-link"
            ><i class="bi bi-cart4"></i
          ></router-link>
          <!-- <a class="nav-link" href="#">My Wish List</a> -->
        </div>
      </div>
      <div class="navbar-nav">
        <router-link v-if="!isLog" to="/login" class="nav-link"
          >Sign In</router-link
        >
        <div class="vr"></div>
        <router-link v-if="!isLog" to="/register" class="nav-link"
          >Register</router-link
        >
        <div class="vr"></div>
        <a v-if="isLog" @click.prevent="logout" class="nav-link" href="#"
          >Sign out</a
        >
      </div>
    </div>
  </nav>
</template>

<style></style>
