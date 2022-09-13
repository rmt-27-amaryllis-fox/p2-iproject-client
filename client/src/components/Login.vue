<script>
import { useLoginStore } from "../stores/login";
import { mapActions } from "pinia";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useLoginStore, ["loginAja"]),
    async login() {
      let email = this.email;
      let password = this.password;
      await this.loginAja(email, password);
    },
  },
};
</script>
<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-8 col-md-6 offset-md-3">
        <form @submit.prevent="login" class="shadow">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title mb-3 text-center">Sign In</h3>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input v-model="email" type="email" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                />
              </div>
              <div class="mb-3">
                <button type="submit" class="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
