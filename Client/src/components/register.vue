<template>
  <div class="login-box">
    <h2>Register</h2>
    <form @submit.prevent="register_Action">
      <div class="user-box">
        <input type="email" name="" required="" v-model="email" />
        <label>Email</label>
      </div>
      <div class="user-box">
        <input type="password" name="" required="" v-model="password" />
        <label>Password</label>
      </div>
      <div class="user-box">
        <input type="number" name="" required="" v-model="phoneNumber" />
        <label>Phone Number</label>
      </div>

      <div class="container">
        <h2>Payment Method</h2>
        <input
          type="radio"
          id="html"
          name="fav_language"
          value="bri"
          v-model="bank"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/2560px-BANK_BRI_logo.svg.png"
          width="100"
          alt=""
        /><br /><br />
        <input
          type="radio"
          id="css"
          name="fav_language"
          value="bni"
          v-model="bank"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1200px-BNI_logo.svg.png"
          width="100"
          alt=""
        /><br /><br />
        <input
          type="radio"
          id="javascript"
          name="fav_language"
          value="bca"
          v-model="bank"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png"
          width="100"
        />
      </div>

      <button href="#" class="d-flex justify-content-center">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  data() {
    return {
      email: "",
      password: "",
      phoneNumber: "",
      bank: "",
    };
  },
  //   computed: {
  //     ...mapState(useCounterStore, ["showAdds"]),
  //   },
  methods: {
    ...mapActions(useCounterStore, ["registerAction", "showAddsFalse"]),
    async register_Action() {
      let email = this.email;
      let password = this.password;
      let phoneNumber = this.phoneNumber;
      let bank = this.bank;
      await this.registerAction(email, password, phoneNumber, bank);
    },
  },
  created() {
    // this.showAdds = false;
    // this.showAddsFalse();
  },
};
</script>

<style></style>
