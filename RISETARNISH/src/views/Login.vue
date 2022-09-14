<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useUserStore } from '../stores/user'
import Navbar from '../components/Navbar.vue'

export default {
  name: '',
  components: { Navbar },
  data() { 
    return {
      input: {
        email: '',
        password: ''
      }
    }
  },
  computed: { },
  methods: {
    ...mapActions(useUserStore, {
      login: 'login'
    }),

    async eventLogin() {
      this.login(this.input)
      this.input.email = ''
      this.input.password = ''
    }
  },
  created() { },
}
</script>

<template>
  <Navbar />
  <!-- Landing Section -->
  <div class="login-register">
    <section class="container login-register-section">
      <div class="row">
        <!-- login -->
        <div class="" id="login">
          <h3>Login</h3>

          <form @submit.prevent="eventLogin">
            <div class="form-group mb-4">
              <div class="d-flex justify-content-between">
                <label class="text-black" for="login-email">Email:</label>
                <label class="text-danger text-end fw-bold">*</label>
              </div>
              <input v-model="input.email" name="email" id="login-email" class="form-control" placeholder="Input your email here..." autocomplete="off">
            </div>

            <div class="form-group mb-4">
              <div class="d-flex justify-content-between">
                <label class="text-black" for="login-password">Password:</label>
                <label class="text-danger text-end fw-bold">*</label>
              </div>
              <input v-model="input.password" type="password" name="password" id="login-password" class="form-control" placeholder="Input your password here..." autocomplete="off">
            </div>

            <button class="btn-login btn-login-stripe w-100 mt-3" id="login-button" type="submit">LOGIN</button>

          </form>
        </div>
      </div>
    </section>
  </div>
  
</template>

<style scoped>
div.row {
  display: flex;
  justify-content:center;
  align-items:center;
  margin-left: 5em;
  margin-right: 5em;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
  