<script>
import { mapActions } from "pinia";
import { useBaseStore } from "../stores/base";

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
        email: "",
        BirthOfDate: "",
        address: "",
        phoneNumber: "",
      },
    };
  },
  methods: {
    ...mapActions(useBaseStore, ["register"]),
    userRegister() {
      const value = {
        username: this.user.username,
        password: this.user.password,
        email: this.user.email,
        BirthOfDate: this.user.BirthOfDate,
        address: this.user.address,
        phoneNumber: this.user.phoneNumber,
      };
      this.register(value);
    },
  },
};
</script>

<template>
  <section id="register-page" class="h-100">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card card-registration my-4">
            <div class="row g-0">
              <div class="col-xl-6 d-none d-xl-block">
                <img
                  src="../assets/Wavy_Tech-14_Single-11.jpg"
                  alt="Sample photo"
                  class="img-fluid"
                  style="
                    border-top-left-radius: 0.25rem;
                    border-bottom-left-radius: 0.25rem;
                  "
                />
              </div>
              <div class="col-xl-6">
                <div class="card-body p-md-5 text-black">
                  <h3 class="mb-5 text-uppercase">
                    Fill this form to catch our products !
                  </h3>
                  <form @submit.prevent="userRegister">
                    <!-- <div class="row"> -->
                    <div class="form-outline mb-4">
                      <div class="form-outline">
                        <label class="form-label" for="form3Example1m"
                          >Username</label
                        >
                        <input
                          v-model="user.username"
                          type="text"
                          id="form3Example1m"
                          class="form-control form-control-lg"
                        />
                      </div>
                    </div>
                    <!-- </div> -->

                    <!-- <div class="row"> -->
                    <div class="col mb-4">
                      <div class="form-outline">
                        <label class="form-label" for="form3Example1m1"
                          >Email</label
                        >
                        <input
                          v-model="user.email"
                          type="text"
                          id="form3Example1m1"
                          class="form-control form-control-lg"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <label class="form-label" for="form3Example1n1"
                          >Password</label
                        >
                        <input
                          v-model="user.password"
                          type="password"
                          id="form3Example1n1"
                          class="form-control form-control-lg"
                        />
                      </div>
                    </div>
                    <!-- </div> -->
                    <!-- <div class="row"> -->
                    <div class="col mb-4">
                      <div class="form-outline">
                        <label class="form-label" for="form3Example1m23"
                          >Phone Number</label
                        >
                        <input
                          v-model="user.phoneNumber"
                          type="number"
                          id="form3Example1m23"
                          class="form-control form-control-lg"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <label class="form-label" for="form3Example1n43"
                          >Birth Of Date</label
                        >
                        <input
                          v-model="user.BirthOfDate"
                          type="date"
                          id="form3Example1n43"
                          class="form-control form-control-lg"
                        />
                      </div>
                    </div>
                    <!-- </div> -->

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example8"
                        >Address</label
                      >
                      <input
                        v-model="user.address"
                        type="text"
                        id="form3Example8"
                        class="form-control form-control-lg"
                      />
                    </div>
                    <p>
                      Have an account ? click
                      <RouterLink to="/login">here</RouterLink>
                    </p>

                    <div class="d-flex justify-content-center pt-3">
                      <button class="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
