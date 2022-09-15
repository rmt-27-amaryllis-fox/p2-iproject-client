<script>
import { mapActions, mapWritableState } from "pinia";
import { appleStore } from "../stores/counter";

export default {
  computed: {
    ...mapWritableState(appleStore, ['email', 'password'])
  },
  methods: {
    ...mapActions(appleStore, ['login', 'changePage'])
  },
};
</script>
<template>
  <!-- LOGIN -->
  <div id="login">
    <h1>Login for more feature!</h1>
    <form action="" @submit.prevent="login">
      <h2>Your Email</h2>
      <input type="text" v-model='email'/>
      <h2>Your Password</h2>
      <input type="password" v-model='password'/>
      <div class="button-submit">
        <button type="submit">
          Login <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </form>
    <div class="link-create">
      <div id="buttonDiv"></div> 
      Don't have an Applu ID?
      <a href="" @click.prevent="changePage('register')">Create yours now <i class="fa-solid fa-circle-right"></i></a>
    </div>
  </div>
</template>
