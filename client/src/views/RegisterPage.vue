<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  data() {
    return {
      email: "",
      password: "",
      name: "",
    };
  },
  methods: {
    ...mapActions(useUserStore, ["register"]),
    submitHandler() {
      const value = {
        email: this.email,
        password: this.password,
        name: this.name,
      };
      this.register(value);
    },
    change(value) {
      this.changePage(value);
    },
  },
  computed: {
    ...mapState(useUserStore, ["baseUrl"]),
  },
};
</script>

<template>
  <section id="registerPage" class="container">
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card border-0 shadow rounded-3 my-5">
            <div class="card-body p-4 p-sm-5">
              <h5 class="card-title text-center mb-5 fw-light fs-5">Sign Up</h5>
              <form @submit.prevent="submitHandler">
                <div class="form-floating mb-3">
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    id="signup-email"
                    placeholder="Email"
                  />
                  <label for="email">Email</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    v-model="name"
                    type="text"
                    class="form-control"
                    placeholder="Name"
                  />
                  <label for="email">Name</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    id="signup-password"
                    placeholder="Password"
                  />
                  <label for="password">Password</label>
                </div>
                <div class="d-grid">
                  <button
                    class="btn btn-primary btn-login text-uppercase fw-bold"
                    type="submit"
                  >
                    Sign up
                  </button>
                </div>
                <hr class="my-4" />
                <div class="mb-3 mt-2 signup">
                  Already have an account?
                  <a @click="change('login')" href="#">Login</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
