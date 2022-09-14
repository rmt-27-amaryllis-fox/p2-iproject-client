<script>
import {mapActions, mapWritableState} from "pinia";
import {useUserStore} from "../stores/user";
import LoadingBar from "../components/LoadingBar.vue";

export default {
  name: "LoginView",
  components: {LoadingBar},
  data() {
    return {
      email: '',
      password: '',
      invisible: true
    }
  },
  computed: {
    ...mapWritableState(useUserStore, ['identity'])
  },
  methods: {
    ...mapActions(useUserStore, ['loginHandler']),
    async onLoginHandler() {
      try {
        this.invisible = false;
        const {data: {name, access_token, premium}} = await this.loginHandler({
          email: this.email,
          password: this.password
        })
        this.invisible = true;
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('identity', name);
        localStorage.setItem('premium', premium);
        this.identity = name;
        this.$router.push({name: 'home'});
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Welcome ${name}`,
          showConfirmButton: false,
          timer: 1500
        })
      } catch (e) {
        this.invisible = true;
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
  <LoadingBar v-if="!invisible"/>

  <div class="container mt-4">
    <div class="card m-auto rounded-0" style="width: 50%">
      <img
          src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="card-img-top rounded-0" alt="..." style="height: 240px">
      <div class="card-body rounded-0">
        <form action="" @submit.prevent="onLoginHandler">
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control rounded-0" id="email"
                   placeholder="name@example.com" v-model="email">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control rounded-0" id="password"
                   placeholder="password" v-model="password">
          </div>
          <div class="d-flex justify-content-end">
            <button class="btn btn-outline-primary rounded-0">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>