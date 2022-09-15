<script>
import { mapState, mapActions } from "pinia";
import { useBaseStore } from "../stores/base";
export default {
  computed: {
    ...mapState(useBaseStore, ["name", "isLogin"]),
  },
  methods: {
    ...mapActions(useBaseStore, ["logOut"]),
  },
};
</script>

<template>
  <nav class="navbar bg-light fixed-top">
    <div class="container-fluid text-center">
      <div class="col d-flex flex-row">
        <RouterLink class="navbar-brand justify-content-flex-start" to="/">
          <img
            src="../assets/MyOutdoorGearlogo.jpg"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          Saikel in Space
        </RouterLink>
      </div>
      <!-- <div class="col-5">
        <a href="">Home</a>
      </div> -->
      <div class="col d-flex flex-row-reverse align-items-center">
        <!-- <a></a> -->
        <div>
          <a href="" v-if="isLogin">
            <img
              src="../assets/icons8-user-96.png"
              alt="Logo"
              width="30"
              height="30"
              class="d-inline-block align-text-top"
            />{{ name }}
          </a>
        </div>
        <button
          v-if="isLogin"
          @click.prevent="logOut"
          type="button"
          class="btn btn-outline-secondary"
        >
          LogOut
        </button>
      </div>
    </div>
  </nav>
</template>
