<script>
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
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-primary shadow">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand" href="#">
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
            <li class="nav-item">
              <router-link to="/categories" class="navbar-brand" href="#"
                >Categories</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/login" class="navbar-brand">Login</router-link>
            </li>
            <li class="nav-item">
              <a @click.prevent="logout" class="navbar-brand">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
