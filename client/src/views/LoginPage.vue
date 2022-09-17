<script>
import { mapActions, mapState } from "pinia";
import { useAllStateStore } from "../stores/allState";
export default {
  name: "LoginPage",
  data() {
    return {
      objUser: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState(useAllStateStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useAllStateStore, ["loginHandler"]),
    localLoginHandler() {
      this.loginHandler(this.objUser);
    },
  },
};
</script>

<template>
  <!-- Login -->
  <div class="container h-screen mx-auto">
    <div class="grid grid-cols-10 h-screen place-items-center">
      <div
        class="col-start-2 col-span-8 sm:col-start-2 sm:col-span-8 place-items-center"
      >
        <h2
          class="text-4xl tracking-widest text-white text-opacity-70 text-center uppercase mb-14"
        >
          <p>
            Welcome to <br /><span class="text-white text-opacity-100 text-6xl"
              >Shiranui Recruitment</span
            >
          </p>
        </h2>
        <div class="grid grid-cols-10">
          <div class="col-start-2 col-span-8 sm:col-start-2 sm:col-span-8">
            <h2
              class="text-white text-opacity-80 text-2xl uppercase text-center mb-7"
            >
              Login Form
            </h2>
            <div class="card px-10 py-5 sm:px-20 sm:py-10">
              <form @submit.prevent="localLoginHandler" class="mt-8 space-y-6">
                <div class="mb-5">
                  <label for="email-address" class="sr-only"
                    >Email address</label
                  >
                  <input
                    v-model="objUser.email"
                    id="email-address"
                    name="email"
                    type="email"
                    autocomplete="off"
                    required
                    class="block w-full px-3 py-2 border rounded-sm text-gray-900 focus:outline-none focus:ring focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-lg tracking-wider"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label for="password" class="sr-only">Password</label>
                  <input
                    v-model="objUser.password"
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="off"
                    required
                    class="block w-full px-3 py-2 border rounded-sm text-gray-900 focus:outline-none focus:ring focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-lg tracking-wider"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <button
                    @click.prevent="localLoginHandler"
                    type="submit"
                    class="w-full flex justify-center py-2 px-4 border border-transparent text-sm rounded-sm text-white bg-black bg-opacity-80 hover:bg-black hover:bg-opacity-70 focus:outline-none focus:ring focus:border-gray-500 focus:ring-gray-500 text-lg tracking-wider"
                  >
                    Login
                  </button>
                </div>
              </form>
              <p class="mb-0">
                Don't Have Account?
                <RouterLink
                  to="/register"
                  role="button"
                  class="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2"
                  >Register Here</RouterLink
                >
              </p>
              <div id="buttonDiv"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
