<template>
  <section class="register-section">
    <div class="contentbx">
      <div class="formbx">
        <h2>Register</h2>
        <form @submit.prevent="handleRegis">
          <div class="inputbx">
            <span>E-mail</span>
            <input v-model="email" required type="email" placeholder="enter your e-mail here..." />
          </div>
          <div class="inputbx">
            <span>Password</span>
            <input v-model="password" required type="text" placeholder="enter your password here..." />
          </div>
          <div class="inputbx">
            <span>Phone Number</span>
            <input v-model="phoneNumber" type="text" placeholder="enter your phone number here..." />
          </div>
          <div class="inputbx">
            <span>Address</span>
            <input v-model="address" type="text" placeholder="enter your address here..." />
          </div>
          <div class="inputbx">
            <input type="submit" value="Sign Up" name="" />
          </div>
          <div class="inputbx">
            <p>Already have an account? <router-link to="/login">Login Here</router-link> </p>
          </div>
        </form>
      </div>
    </div>
    <div class="imgbox">
      <img
        src="https://images.unsplash.com/photo-1608737739007-f0019bc67f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=976&q=80"
        alt="" />
    </div>
  </section>
</template>

<script>
import { mapActions } from 'pinia';
import { useProjectStore} from '../stores/store'
export default {
  data: ()  => ({
    email: '',
    password: '',
    phoneNumber: '',
    address: ''
  }),
  methods: {
    ...mapActions(useProjectStore, ['register']),
    handleRegis(){
      const regis = {
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
        address: this.address
      }
      this.register(regis)
    }
  }
}
</script>

<style>
  /* REGISTER SECTION */
.register-section {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
}

.register-section .imgbox {
  position: relative;
  width: 50%;
  height: 100%;
}

.register-section .imgbox::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.register-section .imgbox img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.register-section .contentbx {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
}

.register-section .contentbx .formbx {
  width: 50%;
}

.register-section .contentbx .formbx h2 {
  font-weight: 600;
  font-size: 1.5em;
  text-transform: uppercase;
  margin-bottom: 20px;
  border-bottom: 4px solid #ff9900;
  display: inline-block;
  letter-spacing: 1px;
}

.register-section .contentbx .formbx .inputbx {
  margin-bottom: 20px;
}

.register-section .contentbx .formbx .inputbx span {
  font-size: 16px;
  margin-bottom: 5px;
  display: inline-block;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 1px;
}

.register-section .contentbx .formbx .inputbx input {
  width: 100%;
  padding: 10px 20px;
  outline: none;
  font-weight: 400;
  border: 1px solid #607d8b;
  font-size: 16px;
  letter-spacing: 1px;
  color: #607d8b;
  background: transparent;
  border-radius: 30px;
}

.register-section .contentbx .formbx .inputbx input[type="submit"] {
  background: #fff;
  color: #ff9900;
  outline: none;
  border: 1px solid;
  font-weight: 500;
  cursor: pointer;
}

.register-section .contentbx .formbx .inputbx input[type="submit"]:hover {
  background: #ff9900;
  color: #fff;
  transition: all ease-in 0.2s;
}

.register-section .contentbx .formbx .inputbx p {
  color: #607d8b;
}

.register-section .contentbx .formbx .inputbx p a {
  color: #ff9900;
}
</style>