<script>
import { mapActions, mapWritableState } from "pinia";
import { appleStore } from "../stores/counter";
export default {
  computed: {
    ...mapWritableState(appleStore, ["email", "password"]),
  },
  methods: {
    ...mapActions(appleStore, ["register", "changePage"]),
  },
};
</script>
<template>
  <!-- REGISTER -->
  <div id="register">
    <h1>Create Your Applu ID</h1>
    <span>One Apple ID is all you need to access all Apple services.</span>
    <span>Already have an Apple ID? <a href="" @click.prevent="changePage('login')">Login now</a> </span>
    <form action="" @submit.prevent="register()">
      <input type="text" placeholder="name@example.com" v-model='email'/>
      <input type="password" placeholder="Password" v-model="password"/>
      <div class="button-submit-register">
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>
