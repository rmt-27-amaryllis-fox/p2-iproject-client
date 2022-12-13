<script>
import { mapWritableState } from "pinia";
import { useLoginStore } from "../stores/login";
export default {
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>
<template>
  <nav class="navbar sticky-top navbar-expand-lg bg-primary shadow">
    <div class="container-fluid">
      <router-link
        style="color: white"
        to="/"
        class="navbar-brand laksana"
        href="#"
      >
        Laksana Baru</router-link
      >
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
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <!-- <li class="nav-item">
                <router-link
                  to="/employees"
                  class="navbar-brand"
                  aria-current="page"
                  href="#"
                  >Employee</router-link
                >
              </li> -->
          <li class="nav-item dropdown bold">
            <router-link
              to="/employees"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Menu
            </router-link>

            <ul class="dropdown-menu">
              <li>
                <router-link to="/addproduct" class="dropdown-item" href="#"
                  >Add Product</router-link
                >
              </li>
              <li>
                <router-link to="/addemployee" class="dropdown-item" href="#"
                  >Add Employee</router-link
                >
              </li>
              <li>
                <router-link to="/employees" class="dropdown-item" href="#"
                  >List Employees</router-link
                >
              </li>
            </ul>
          </li>
          <!-- <li class="nav-item">
            <router-link to="/categories" class="nav-link" href="#"
              >Categories</router-link
            >
          </li> -->
          <li v-if="isLogin == true" class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li v-if="!isLogin" class="nav-item">
            <a @click.prevent="logout" class="nav-link">Logout</a>
          </li>
          <li class="nav-item">
            <router-link to="register" class="nav-link">Register</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.navbar {
  font-weight: bold;
  color: aliceblue;
}
a.nav-link {
  color: white;
}
li a:hover {
  color: black;
}
</style>
