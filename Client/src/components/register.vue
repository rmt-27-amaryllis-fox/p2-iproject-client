<template>
  <section class="vh-100" style="background-color: #eee">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p>

                  <form class="mx-1 mx-md-4" @submit.prevent="register_Action">
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="email"
                          id="form3Example1c"
                          class="form-control"
                          v-model="email"
                        />
                        <label class="form-label" for="form3Example1c"
                          >Email</label
                        >
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          id="form3Example3c"
                          class="form-control"
                          v-model="password"
                        />
                        <label class="form-label" for="form3Example3c"
                          >Password</label
                        >
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input
                          type="number"
                          id="form3Example4c"
                          class="form-control"
                          v-model="phoneNumber"
                        />
                        <label class="form-label" for="form3Example4c"
                          >Phone Number</label
                        >
                      </div>
                    </div>
                    <h3>Pyament Method</h3>
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

                    <div
                      class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                    >
                      <button type="submit" class="btn btn-primary btn-lg">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                >
                  <img
                    src="https://static.zerochan.net/Monkey.D..Luffy.full.801683.jpg"
                    class="img-fluid"
                    alt="Sample image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "pinia";
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
  methods: {
    ...mapActions(useCounterStore, ["registerAction"]),
    async register_Action() {
      let email = this.email;
      let password = this.password;
      let phoneNumber = this.phoneNumber;
      let bank = this.bank;
      await this.registerAction(email, password, phoneNumber, bank);
    },
  },
};
</script>

<style></style>
