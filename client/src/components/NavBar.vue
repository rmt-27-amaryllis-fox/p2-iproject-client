<script>
import { mapActions, mapState } from "pinia";
import { useAllStateStore } from "../stores/allState";

export default {
  name: "NavBar",
  computed: {
    ...mapState(useAllStateStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useAllStateStore, ["logoutHandler"]),
  },
};
</script>

<template>
  <!-- Navbar -->
  <nav class="py-3 bg-gray-900 navbar-color">
    <div class="flex-1 flex items-center justify-center">
      <div class="flex-shrink-0 flex items-center">
        <span class="text-white opacity-80 text-2xl uppercase"
          >Shiranui Recruitment</span
        >
      </div>
      <div class="hidden sm:block sm:ml-6">
        <div class="flex space-x-4 align-middle">
          <RouterLink
            to="/"
            role="button"
            class="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2"
            >Home</RouterLink
          >
          <RouterLink
            to="/myjobs"
            role="button"
            class="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2"
            >My Jobs</RouterLink
          >
          <a
            role="button"
            @click.prevent="logoutHandler"
            class="text-white opacity-80 text-md uppercase hover:opacity-100 px-3 py-2"
            >Logout</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>
