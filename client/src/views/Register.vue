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
  <section>
    <div id="intro" class="bg-image shadow-2-strong vh-100">
      <div
        class="mask d-flex align-items-center h-100"
        style="background-color: #0f3d3e"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-md-8">
              <!-- Register Form -->
              <form
                class="bg-dark rounded-5 shadow-5-strong p-5"
                @submit.prevent="registerHandlerComponent"
                novalidate
              >
                <h2 style="color: white; text-align: center">Register</h2>
                <div class="form-floating mb-3 mt-5">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingUsername"
                    placeholder="Username"
                    v-model="registerData.username"
                  />
                  <label for="floatingPassword">Username</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    v-model="registerData.email"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    v-model="registerData.password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating mb-4">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingLocation"
                    placeholder="Location"
                    v-model="registerData.location"
                  />
                  <label for="floatingPassword">Location</label>
                </div>

                <div class="d-grid">
                  <button
                    class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
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
  </section>
  <!-- End of register section -->
</template>
