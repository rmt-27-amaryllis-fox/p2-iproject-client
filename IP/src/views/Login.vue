<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapState(useUserStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useUserStore, ["login"]),
  },
};
</script>

<template>
  <div
    class="container-fluid d-flex justify-content-center align-items-center"
    style="height: 100vh"
  >
    <div class="border w-75 p-5 my-5 bg-secondary text-black bold rounded-3 shadow" style="background-color:black;" >
      <div class="row">
        <div class="col-6 align-self-center">
          <form @submit.prevent="login(email, password)">
            <div class="mb-3">
              <h5 class="mb-4">Sign in to your account</h5>
              <label for="email" class="form-label">Email address</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="email"
                autocomplete="off"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="password"
              />
            </div>
            <button type="submit" class="btn btn-primary w-100">Login</button>
            <p class="text-center mt-2">OR <h4><RouterLink to="/register"><strong class="text-danger text-align-center"><u>Sing Up</u></strong></RouterLink></h4></p>
          </form>
        </div>
        <div class="col-6 align-self-center" >
          <img src="https://media3.giphy.com/media/Y1AJVCCTQysZr3FVXx/200.gif" alt="No Image" width="500" height="300">
        </div>
      </div>
    </div>
  </div>
</template>
