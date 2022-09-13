<template>
  <div class="login-box">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="user-box">
        <input type="text" name="" required="" v-model="email" />
        <label>Username</label>
      </div>
      <div class="user-box">
        <input type="password" name="" required="" v-model="password" />
        <label>Password</label>
      </div>

      <button href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["loginAction", "logoutAction"]),
    async login() {
      console.log("masuk");
      let email = this.email;
      let password = this.password;
      this.loginAction(email, password);
    },
  },
};
</script>

<style></style>
