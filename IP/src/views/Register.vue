<script>
import { mapActions } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  data() {
    return {
      data: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useUserStore, ["register"]),
    onRegister() {
      this.register(this.data);
    },
  },
};
</script>

<template>
  <div
    class="container-fluid d-flex justify-content-center align-items-center"
    style="height: 100vh"
  >
    <div
      class="border w-75 p-5 my-5 bg-secondary text-black bold rounded-3 shadow"
      style="background-color: black"
    >
      <div class="row">
        <div class="col-6 align-self-center">
          <img
            src="https://thepadelmagazine.com/wp-content/uploads/2022/01/giphy-2022-01-19T143006.771.gif"
            alt="No Image"
            width="500"
            height="300"
          />
        </div>
        <div class="col-6 align-self-center">
          <form @submit.prevent="onRegister">
            <div class="mb-3">
              <h5 class="mb-4">Register</h5>
              <div class="mb-3">
                <label for="email" class="form-label">Username</label>
                <input
                  v-model="data.username"
                  type="text"
                  class="form-control"
                  id="email"
                  autocomplete="off"
                />
              </div>
              <label for="email" class="form-label">Email address</label>
              <input
                v-model="data.email"
                type="email"
                class="form-control"
                id="email"
                autocomplete="off"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                v-model="data.password"
                type="password"
                class="form-control"
                id="password"
              />
            </div>
            <button type="submit" class="btn btn-primary w-100">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
