<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  computed: {
    ...mapState(useUserStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useUserStore, ["logout"]),
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <RouterLink to="/">
        <a class="navbar-brand">
          <img
            src="https://cdn.dribbble.com/users/1014040/screenshots/5343178/gamepad-za-dribbble.png?compress=1&resize=400x300"
            width="40"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          Game
        </a>
      </RouterLink>
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
        <div class="navbar-nav">
          <li class="nav-item active">
            <RouterLink to="/">
              <a class="nav-link">Free Game <span class="sr-only"></span></a>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/pricy-games"
              ><a class="nav-link">Prices Game</a></RouterLink
            >
          </li>
        </div>
      </div>
      <ul class="navbar-nav mx-2 mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink to="/mycart"
            ><a class="nav-link">My Cart</a></RouterLink
          >
        </li>
        <li v-if="isLogin" class="nav-item" @click.prevent="logout">
          <RouterLink to="login">
            <a class="nav-link text-white" aria-current="page">Logout</a>
          </RouterLink>
        </li>
        <li v-else class="nav-item">
          <RouterLink to="/login">
            <a class="nav-link text-white" aria-current="page">Login</a>
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

