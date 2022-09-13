<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
        <router-link to="/"
          ><li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li></router-link
        >
        <router-link to="/register">
          <li class="nav-item">
            <a class="nav-link" href="#">Register</a>
          </li>
        </router-link>

        <router-link to="/login">
          <li class="nav-item">
            <a class="nav-link" href="#">Login</a>
          </li>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
