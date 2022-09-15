<script></script>
<template>
  <nav class="navbar navbar-dark bg-info">
    <div class="container-fluid">
      <router-link to="/">
        <a class="d-flex navbar-brand" href="">
          <img
            src="../assets//logo.png"
            alt="Logo"
            height="50"
            class="d-inline-block align-text-top"
          />
          CHECK ME!
        </a></router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/">
              <a class="nav-link active" aria-current="page" href=""
                >Home</a
              ></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/symptomscheck">
              <a class="nav-link active" aria-current="page" href=""
                >Check Symptoms</a
              ></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/icd10">
              <a class="nav-link active" aria-current="page"
                >Search Diseases</a
              ></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped></style>
