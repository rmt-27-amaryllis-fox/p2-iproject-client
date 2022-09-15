<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/user";
export default {
  data() {
    return {
      value: {
        inputEmail: "",
        inputPassword: "",
      },
      baseUrl: "http://localhost:3000",
    };
  },
  methods: {
    ...mapActions(useUserStore, ["login", "register", "changePage"]),
    submitHandler() {
      this.login(this.value);
    },
    change(value) {
      this.changePage(value);
    },
  },
};
</script>

<template>
  <section id="loginPage" class="container" style="height: 100%">
    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
      <div class="card border-0 shadow rounded-3 my-5">
        <div class="card-body p-4 p-sm-5">
          <h1 class="card-title text-center mb-5 fw-light fs-12">Log In</h1>
          <form @submit.prevent="submitHandler">
            <div class="form-floating mb-3">
              <input
                v-model="value.inputEmail"
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="Email"
              />
              <label for="floatingInput">Email addres</label>
            </div>
            <div class="form-floating mb-3">
              <input
                v-model="value.inputPassword"
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="rememberPasswordCheck"
              />
              <label class="form-check-label" for="rememberPasswordCheck">
                Remember passwordd
              </label>
            </div>
            <div class="d-grid">
              <button
                class="btn btn-primary btn-login text-uppercase fw-bold"
                type="submit"
              >
                Sign in
              </button>
              <hr class="my-4" />
            </div>
            <hr class="my-4" />
            <div class="mb-3 mt-2 signup">
              Don't have an account?
              <a @click.prevent="change('register')" href="#">Create One</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
