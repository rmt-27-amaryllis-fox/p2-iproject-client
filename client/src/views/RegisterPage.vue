<script>
import { mapActions } from "pinia";
import { useRegisterMethodStore } from "../stores/registerMethod";
export default {
  data() {
    return {
      registerField: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useRegisterMethodStore, ["register"]),

    async registerMethod() {
      let username = this.registerField.username;
      let email = this.registerField.email;
      let password = this.registerField.password;
      await this.register(username, email, password);
    },
  },
};
</script>

<template>
  <!-- Register Section -->
  <section id="register-section" class="gradient-custom">
    <div class="container py-5">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <form id="form-register" @submit.prevent="registerMethod">
                <div class="mb-md-5 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2">Register</h2>
                  <p class="text-white-50 mb-5">Please fill the field below!</p>
                  <div class="form-outline form-white mb-4">
                    <label class="form-label" for="input-register-username"
                      >Username :</label
                    >
                    <input
                      v-model="registerField.username"
                      type="text"
                      id="input-register-username"
                      class="form-control form-control-lg"
                      placeholder="enter your username..."
                    />
                  </div>
                  <div class="form-outline form-white mb-4">
                    <label class="form-label" for="input-register-email"
                      >Email :</label
                    >
                    <input
                      v-model="registerField.email"
                      type="email"
                      id="input-register-email"
                      class="form-control form-control-lg"
                      placeholder="enter your email..."
                    />
                  </div>
                  <div class="form-outline form-white mb-4">
                    <label class="form-label" for="input-register-password"
                      >Password :</label
                    >
                    <input
                      v-model="registerField.password"
                      type="password"
                      id="input-register-password"
                      class="form-control form-control-lg"
                      placeholder="enter your password..."
                    />
                  </div>
                  <button
                    class="btn btn-outline-light btn-lg px-5"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </form>
              <div>
                <p class="mb-0">
                  Already have account?
                  <a href="#!" class="text-white-50 fw-bold">Login</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#register-section {
  background: linear-gradient(to left, rgb(17, 203, 144), rgb(37, 252, 187));
}
</style>
