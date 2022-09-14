<script>
import { mapActions } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  data() {
    return {
      loginData: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useUserStore, ["loginHandler"]),
    async loginHandlerComponent() {
      await this.loginHandler(this.loginData);
    },
  },
};
</script>

<template>
  <!-- Login section -->
  <section
    class="vh-100 page"
    style="background-color: #0f3d3e"
    id="login-section"
  >
    <div class="container py-4 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 1rem">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="../assets/edit-profile.jpg"
                  alt="login form"
                  class="img-fluid"
                  style="border-radius: 1rem 0 0 1rem"
                />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <div class="d-flex align-items-center mb-2 pb-1">
                    <img
                      src="../assets/weathernow-logo.png"
                      alt="ITEA-logo"
                      class="d-inline-block me-2 rounded logo mb-2"
                    />
                  </div>

                  <h5
                    class="fw-bold mb-3 pb-3 card-title"
                    style="letter-spacing: 1px"
                  >
                    Sign into your account
                  </h5>

                  <form
                    id="login-form"
                    @submit.prevent="loginHandlerComponent"
                    novalidate
                  >
                    <div class="form-outline mb-4">
                      <label class="form-label">Username</label>
                      <input
                        type="text"
                        class="form-control form-control-md"
                        placeholder="Enter your username"
                        v-model="loginData.username"
                      />
                    </div>
                    <div class="form-outline mb-4">
                      <label class="form-label" for="login-password"
                        >Password</label
                      >
                      <input
                        type="password"
                        id="login-password"
                        class="form-control form-control-md"
                        placeholder="Enter your password"
                        v-model="loginData.password"
                      />
                    </div>

                    <div class="pt-1 mb-4">
                      <router-link
                        to="/"
                        class="btn btn-dark btn-md btn-block button"
                        >Cancel</router-link
                      >
                      <button
                        class="btn btn-dark btn-md btn-block mx-2 button"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                  </form>

                  <p class="mb-2 pb-lg-2 content" style="color: #000000">
                    Don't have an account?
                    <router-link to="/register" style="color: #393f81"
                      >Register here</router-link
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End of login section -->
</template>

<style scoped>
.logo {
  width: 230px;
}
</style>
