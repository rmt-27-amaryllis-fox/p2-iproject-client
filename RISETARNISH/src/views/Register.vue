<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useErapiStore } from '../stores/erapi'
import Navbar from '../components/Navbar.vue'
import { useUserStore } from '../stores/user'

export default {
  name: '',
  components: { Navbar },
  data() { 
    return {
      input: {
        email: '',
        password: '',
        username: ''
      }
    }
  },
  computed: { },
  methods: {
    ...mapActions(useUserStore, {
      register: 'register'
    }),
    async eventRegister() {
      this.register(this.input)
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
        <!-- Register -->
        <div class="" id="register">
          <h3>Register Account</h3>

          <form @submit.prevent="eventRegister">
            <div class="form-group mb-3 mb-3">
              <div class="d-flex justify-content-between">
                <label class="text-white" for="register-username">Username:</label>
                <label class="text-white text-end fw-bold">*</label>
              </div>
              <input v-model="input.username" type="text" name="username" id="register-username" class="form-control" placeholder="Input your username here..." autocomplete="off">
            </div>
              
            <div class="form-group mb-3">
              <div class="d-flex justify-content-between">
                <label class="text-white" for="register-email">Email:</label>
                <label class="text-white text-end fw-bold">*</label>
              </div>
              <input v-model="input.email" type="email" name="email" id="register-email" class="form-control" placeholder="Input your email here..." autocomplete="off">
            </div>

            <div class="form-group mb-3">
              <div class="d-flex justify-content-between">
                <label class="text-white" for="register-password">Password:</label>
                <label class="text-white text-end fw-bold">*</label>
              </div>
              <input v-model="input.password" type="password" name="password" id="register-password" class="form-control" placeholder="Input your password here..." autocomplete="off">
            </div>
            
            <button class="btn-register btn-register-stripe w-100" id="register-button" type="submit">REGISTER</button>

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
  