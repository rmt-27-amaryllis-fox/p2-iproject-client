<script>
import { mapActions } from "pinia";
import { useLoginStore } from "../stores/login";
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useLoginStore, ["register"]),
    async registerForm() {
      let username = this.username;
      let email = this.email;
      let password = this.password;
      await this.register(username, email, password);
    },
  },
};
</script>
<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-12 col-md-6 offset-md-3">
        <form @submit.prevent="registerForm" class="shadow">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title mb-3 text-center">Register</h3>
              <div class="mb-3">
                <label for="text" class="form-label">Name</label>
                <input v-model="username" type="text" class="form-control" />
              </div>
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
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
