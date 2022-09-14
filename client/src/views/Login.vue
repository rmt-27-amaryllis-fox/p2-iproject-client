<script>
import { mapWritableState, mapActions } from "pinia";
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
  <section>
    <div id="intro" class="bg-image shadow-2-strong vh-100">
      <div
        class="mask d-flex align-items-center h-100"
        style="background-color: rgba(0, 0, 0, 0.8)"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-md-8">
              <!-- Sign In Form -->
              <form
                class="bg-dark rounded-5 shadow-5-strong p-5"
                @submit.prevent="loginHandlerComponent"
              >
                <h2 style="color: white; text-align: center">Login</h2>
                <div class="form-floating mb-3 mt-5">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="username"
                    v-model="loginData.username"
                  />
                  <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    v-model="loginData.password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                <div class="d-grid">
                  <button
                    class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                    type="submit"
                  >
                    Sign in
                  </button>
                  <!-- <div class="text-center">
                    <router-link to="/register" class="small" href="#"
                      >Create your account here</router-link
                    >
                  </div> -->
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End of login section -->
</template>
