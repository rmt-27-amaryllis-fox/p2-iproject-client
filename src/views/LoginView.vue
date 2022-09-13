<script>
import {mapActions, mapWritableState} from "pinia";
import {useUserStore} from "../stores/user";

export default {
  name: "LoginView",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapWritableState(useUserStore, ['identity'])
  },
  methods: {
    ...mapActions(useUserStore, ['loginHandler']),
    async onLoginHandler() {
      try {
        const {data: {name, access_token}} = await this.loginHandler({
          email: this.email,
          password: this.password
        })
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('identity', name);
        this.identity = name;
        this.$router.push({name: 'home'});
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Welcome ${name}`,
          showConfirmButton: false,
          timer: 1500
        })
      } catch (e) {
        const message = e.response.data.message;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message,
        })
      }
    },
  }
}
</script>

<template>
  <div class="container mt-4">
    <div class="card m-auto" style="width: 50%">
      <img
          src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="card-img-top" alt="..." style="height: 240px">
      <div class="card-body">
        <form action="" @submit.prevent="onLoginHandler">
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email"
                   placeholder="name@example.com" v-model="email">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="text" class="form-control" id="password"
                   placeholder="password" v-model="password">
          </div>
          <div class="d-flex justify-content-end">
            <button class="btn btn-outline-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>