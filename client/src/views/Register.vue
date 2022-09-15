<script>
import { mapActions } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  data() {
    return {
      registerData: {
        username: "",
        email: "",
        password: "",
        location: "",
      },
    };
  },
  methods: {
    ...mapActions(useUserStore, ["registerHandler"]),
    async registerHandlerComponent() {
      await this.registerHandler(this.registerData);
    },
  },
};
</script>

<template>
  <!-- Register section -->
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
                  <div class="d-flex align-items-center mb-0 pb-1">
                    <img
                      src="../assets/weathernow-logo.png"
                      alt="logo"
                      class="d-inline-block me-2 rounded logo mb-0"
                    />
                  </div>

                  <h5
                    class="fw-bold mb-3 card-title title"
                    style="letter-spacing: 1px"
                  >
                    Sign up an account
                  </h5>

                  <form
                    id="register-form"
                    @submit.prevent="registerHandlerComponent"
                    novalidate
                  >
                    <div class="form-outline mb-2">
                      <label class="form-label">Username</label>
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        placeholder="Enter your username"
                        v-model="registerData.username"
                      />
                    </div>
                    <div class="form-outline mb-2">
                      <label class="form-label" for="register-email"
                        >Email</label
                      >
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        placeholder="Enter your email"
                        v-model="registerData.email"
                      />
                    </div>
                    <div class="form-outline mb-2">
                      <label class="form-label" for="register-password"
                        >Password</label
                      >
                      <input
                        type="password"
                        class="form-control form-control-sm"
                        placeholder="Enter your password"
                        v-model="registerData.password"
                      />
                    </div>
                    <div class="form-outline mb-2">
                      <label class="form-label" for="register-location"
                        >Location</label
                      >
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        placeholder="Enter your location"
                        v-model="registerData.location"
                      />
                    </div>

                    <div class="pt-1">
                      <router-link
                        to="/"
                        class="btn btn-dark btn-md btn-block button"
                        >Cancel</router-link
                      >
                      <button
                        class="btn btn-dark btn-md btn-block mx-2 button"
                        type="submit"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End of register section -->
</template>

<style scoped>
.logo {
  width: 230px;
}
</style>
