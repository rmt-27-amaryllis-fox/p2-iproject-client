<script>
import { mapState } from "pinia";
import { useBaseStore } from "../stores/base";
export default {
  computed: {
    ...mapState(useBaseStore, ["isLogin"]),
  },
};
</script>

<template>
  <br /><br /><br />
  <div class="row">
    <div class="container">
      <div class="row">
        <div class="col-sm-2 bg-dark rounded">
          <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
            <a
              href="/"
              class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <svg class="bi me-2" width="40" height="32">
                <use xlink:href="#bootstrap"></use>
              </svg>
              <span class="fs-4">Sidebar</span>
            </a>
            <hr />
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item">
                <router-link
                  to="/"
                  class="nav-link text-white d-flex justify-content-start"
                >
                  Home
                </router-link>
              </li>
              <li>
                <router-link to="/history" class="nav-link text-white">
                  History
                </router-link>
              </li>
              <li>
                <router-link to="/wheel-references" class="nav-link text-white">
                  wheel-references
                </router-link>
              </li>
            </ul>
            <hr />
          </div>
        </div>
        <div class="col-sm-10">
          <router-view></router-view>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<style>
div.row {
  margin: 0;
  padding: 5px;
}
div.container {
  padding: 5px;
  min-width: 100vw;
  min-height: 100vh;
}
div.row {
  min-height: 100vh;
}
</style>
