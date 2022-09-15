<script>
import { mapActions } from "pinia";
import InMemoriam from "../components/InMemoriam.vue";
import ParagraphOpening from "../components/ParagraphOpening.vue";
import { useRedeemMethodStore } from "../stores/redeemMethod";
export default {
  components: { InMemoriam, ParagraphOpening },
  methods: {
    ...mapActions(useRedeemMethodStore, ["redeemCards"]),
  },
};
</script>

<template>
  <div class="bg-dark text-secondary px-4 py-5 text-center">
    <div class="py-5">
      <h1 class="display-5 fw-bold text-white">Welcome !</h1>
      <div class="col-lg-6 mx-auto">
        <p class="fs-5 mb-4">
          You are logged in. This is your home page. You can try these two
          feature :
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <router-link to="/game" class="nav-link">
            <button
              type="button"
              class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
            >
              Game Generator
            </button></router-link
          >
          <button
            @click.prevent="redeemCards"
            type="button"
            class="btn btn-outline-light btn-lg px-4"
          >
            Redeem Card
          </button>
        </div>
        <div class="col-lg-6 py-4 mx-auto">
          <p class="fs-5 mb-4"></p>
          <ParagraphOpening />
        </div>
      </div>
    </div>
  </div>
  <in-memoriam />
</template>

<style></style>
