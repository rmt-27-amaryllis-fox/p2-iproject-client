<script>
import { mapWritableState, mapActions } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  computed: {
    ...mapWritableState(useUserStore, [
      "isLogin",
      "loggedInUsername",
      "navbarProfilePicture",
    ]),
  },
  methods: {
    ...mapActions(useUserStore, ["logoutHandler"]),
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.isLogin = true;
      this.loggedInUsername = localStorage.getItem("loggedInUsername");
      this.navbarProfilePicture = localStorage.getItem("navbarProfilePicture");
    }
  },
};
</script>

<template>
  <!-- Navbar section -->
  <section>
    <header class="py-3 border-bottom fixed-top navbar-top" v-show="isLogin">
      <div
        class="container-fluid d-grid gap-3 align-items-center"
        style="grid-template-columns: 1fr 2fr"
      >
        <router-link to="/" class="">
          <a class="navbar-brand" href="#"
            ><img
              src="../assets/weathernow-logo.png"
              alt="logo"
              class="d-inline-block me-2 navbar-logo"
          /></a>
        </router-link>

        <div class="d-flex align-items-center flex-row-reverse">
          <!-- Profile icon -->
          <div class="d-flex flex-row-reverse flex-shrink-0 dropdown">
            <a
              href="#"
              class="d-block link-dark text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                :src="navbarProfilePicture"
                alt="mdo"
                width="32"
                height="32"
                class="rounded-circle"
              />
            </a>
            <ul class="dropdown-menu text-small shadow">
              <li>
                <router-link to="/new-post" class="dropdown-item" href="#"
                  >New Post</router-link
                >
              </li>
              <li>
                <router-link to="/profile" class="dropdown-item" href="#"
                  >Profile</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" href="#" @click="logoutHandler"
                  >Sign out
                </a>
              </li>
            </ul>
          </div>

          <!-- Search form -->
          <form class="w-40 me-3" role="search">
            <input
              type="search"
              class="form-control"
              placeholder="Search by city..."
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </header>

    <header class="py-3 border-bottom fixed-top navbar-top" v-show="!isLogin">
      <div
        class="container-fluid d-grid gap-3 align-items-center"
        style="grid-template-columns: 1fr 2fr"
      >
        <router-link to="/" class="">
          <a class="navbar-brand" href="#"
            ><img
              src="../assets/weathernow-logo.png"
              alt="logo"
              class="d-inline-block me-2 navbar-logo"
          /></a>
        </router-link>
      </div>
    </header>
  </section>
  <!-- End of navbar section -->
</template>

<style scoped>
.navbar-top {
  background-color: white;
}
.navbar-logo {
  width: 230px;
}
</style>
