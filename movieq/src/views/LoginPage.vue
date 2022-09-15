<template>
  <section class="login">
    <div class="imgbox">
      <img
        src="https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="">
    </div>
    <div class="contentbx">
      <div class="formbx">
        <h2>Login</h2>
        <form @submit.prevent="loginHandler">
          <div class="inputbx">
            <span>Email</span>
            <input v-model="email" required type="email" name="" class="" placeholder="Insert e-mail">
          </div>
          <div class="inputbx">
            <span>Password</span>
            <input v-model="password" required type="password" name="" class="" placeholder="Insert password">
          </div>
          <div class="inputbx">
            <input type="submit" value="Sign In">
          </div>
          <div class="inputbx">
            <p>Don't have an account? <router-link to="/register">Sign Up</router-link>
            </p>
            <p>Don't feel like it?  <router-link to="/">Back to home</router-link> </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'pinia';
import { useProjectStore } from '../stores/store';
import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    ...mapActions(useProjectStore, ['login']),
    loginHandler(){
      const input = {
        email: this.email,
        password: this.password
      }
      this.login(input)
      this.username = '',
      this.password= ''
    }
  }
}
</script>

<style>
  /* LOGIN SECTION */
.login {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
}

.login .imgbox {
  position: relative;
  width: 50%;
  height: 100%;
}

.login .imgbox::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.login .imgbox img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.login .contentbx {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
}

.login .contentbx .formbx {
  width: 50%;
}

.login .contentbx .formbx h2 {
  font-weight: 600;
  font-size: 1.5em;
  text-transform: uppercase;
  margin-bottom: 20px;
  border-bottom: 4px solid #ff9900 ;
  display: inline-block;
  letter-spacing: 1px;
}

.login .contentbx .formbx .inputbx {
  margin-bottom: 20px;
}

.login .contentbx .formbx .inputbx span {
  font-size: 16px;
  margin-bottom: 5px;
  display: inline-block;

  font-weight: 300;
  font-size: 16px;
  letter-spacing: 1px;
}

.login .contentbx .formbx .inputbx input {
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

.login .contentbx .formbx .inputbx input[type="submit"] {
  background: #fff;
  color: #ff9900 ;
  outline: none;
  border: 1px solid;
  font-weight: 500;
  cursor: pointer;
  padding: 10px 20px;
}

.login .contentbx .formbx .inputbx input[type="submit"]:hover {
  background: #ff9900;
  color: #fff;
  transition: all ease-in 0.2s;
}

.login .contentbx .formbx .inputbx p {
  color: #607d8b;
}

.login .contentbx .formbx .inputbx p a {
  color: #ff9900;
}
</style>