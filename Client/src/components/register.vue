<template>
  <div>
    <div v-if="loadingState" class="d-flex flex-column justify-content-center">
      <img
        class="d-flex justify-content-center"
        width="800"
        src="https://raw.githubusercontent.com/gist/s-shivangi/7b54ec766cf446cafeb83882b590174d/raw/8957088c2e31dba6d72ce86c615cb3c7bb7f0b0c/nyan-cat.gif"
      />
      <h1
        class="d-flex justify-content-center text-white font-weight-bold"
        style="background: rgba(0, 0, 0, 0.5)"
      >
        ENJOY THE CAT WHILE LOADING
      </h1>
    </div>
    <div v-if="!loadingState" class="login-box">
      <h2>Register</h2>
      <div>
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
    </div>
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
      loadingState: false,
    };
  },
  computed: {
    ...mapState(useCounterStore, ["isLoading"]),
  },
  methods: {
    ...mapActions(useCounterStore, [
      "registerAction",
      "showAddsFalse",
      "isLoadingFalse",
      "isLoadingTrue",
    ]),
    async register_Action() {
      this.loadingState = true;
      let email = this.email;
      let password = this.password;
      let phoneNumber = this.phoneNumber;
      let bank = this.bank;
      await this.registerAction(email, password, phoneNumber, bank);
    },
  },
  created() {
    this.isLoadingFalse();
  },
};
</script>

<style></style>
