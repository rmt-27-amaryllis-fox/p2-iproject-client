<script>
import {mapActions} from "pinia";
import {useUserStore} from "../stores/user";
import LoadingBar from "../components/LoadingBar.vue";

export default {
  name: "RegisterView",
  components: {LoadingBar},
  data() {
    return {
      name: '',
      email: '',
      password: '',
      invisible: true
    }
  },
  methods: {
    ...mapActions(useUserStore, ['registerHandler']),
    async onRegisterHandler() {
      try {
        this.invisible = false;
        await this.registerHandler({
          name: this.name,
          email: this.email,
          password: this.password
        });
        this.invisible = true;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Register success',
          showConfirmButton: false,
          timer: 1500
        })
        this.$router.push({name: 'login'});
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
    <div class="card m-auto" style="width: 50%">
      <img
          src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="card-img-top" alt="..." style="height: 240px">
      <div class="card-body">
        <form action="" @submit.prevent="onRegisterHandler">
          <div class="mb-3">
            <label for="name" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="name"
                   placeholder="Seorina" v-model="name">
          </div>
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
            <button class="btn btn-outline-primary">Register</button>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>