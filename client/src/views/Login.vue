<script>
import { mapActions, mapState } from "pinia";
import { useBaseStore } from "../stores/base";
export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState(useBaseStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useBaseStore, ["login"]),
    loginSubmit() {
      console.log("masuk");
      const value = {
        email: this.loginForm.email,
        password: this.loginForm.password,
      };
      this.login(value);
    },
  },
  created() {
    this.isLogin;
  },
};
</script>

<template>
  <section id="login-page" class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-md-8 col-lg-7 col-xl-6">
          <img src="../assets/4570.jpg" class="img-fluid" alt="Phone image" />
        </div>
        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <form @submit.prevent="loginSubmit">
            <!-- Email input -->
            <div class="form-outline mb-4">
              <label class="form-label" for="form1Example13"
                >Email address</label
              >
              <input
                v-model="loginForm.email"
                name="email"
                type="email"
                id="form1Example13"
                class="form-control form-control-lg"
              />
            </div>

            <!-- Password input -->
            <div class="form-outline mb-4">
              <label class="form-label" for="form1Example23">Password</label>
              <input
                v-model="loginForm.password"
                name="password"
                type="password"
                id="form1Example23"
                class="form-control form-control-lg"
              />
            </div>
            <button class="mt-2 btn btn-primary">Sign in</button>
            <br /><br />
            <p>
              Don't have account ? Don't be worry register
              <RouterLink to="/register">here</RouterLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
