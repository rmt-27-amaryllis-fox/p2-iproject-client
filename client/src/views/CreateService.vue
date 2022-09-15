<script>
import { mapActions, mapState } from "pinia";
import { useBaseStore } from "../stores/base";

export default {
  data() {
    return {
      selected: "",
      ServiceDate: "",
    };
  },
  computed: {
    ...mapState(useBaseStore, ["Category"]),
  },
  methods: {
    ...mapActions(useBaseStore, ["fetchCategories", "createService"]),
    add_service() {
      const value = {
        selected: this.selected,
        ServiceDate: this.ServiceDate,
      };
      // console.log(value, "nih");
      this.createService(value);
    },
  },
  created() {
    this.fetchCategories();
  },
};
</script>

<template>
  <br />
  <section id="login-page" class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-md-8 col-lg-7 col-xl-6">
          <img
            src="../assets/Man thinking-amico.png"
            class="img-fluid"
            alt="Phone image"
          />
        </div>
        <div class="col-md-7 col-lg-5 col-xl-5">
          <form @submit.prevent="add_service">
            <!-- Email input -->
            <div class="form-outline mb-4">
              <label class="form-label" for="form1Example13"
                >Select Type Of Your Bike</label
              >
              <select class="form-select" id="course" v-model="selected">
                <option disabled>---Choose Type---</option>
                <option
                  v-for="categories in Category"
                  :key="categories.id"
                  :value="categories.id"
                >
                  {{ categories.name }} -- {{ categories.price }}
                </option>
              </select>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-4">
              <label class="form-label" for="form1Example23"
                >Service Date</label
              >
              <input
                v-model="ServiceDate"
                name="date"
                type="date"
                id="form1Example23"
                class="form-control form-control-lg"
              />
            </div>
            <div class="d-flex justify-content-center">
              <button class="mt-2 btn btn-primary">Hit me !</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
body {
  width: 100vw;
  height: 100vh;
}
</style>
