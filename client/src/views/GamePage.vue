<script>
import { mapActions, mapWritableState } from "pinia";
import CardTCG from "../components/CardTCG.vue";
import { useGameMethodStore } from "../stores/gameMethod";
export default {
  components: { CardTCG },
  methods: {
    ...mapActions(useGameMethodStore, ["gameSixCardData", "saveDataGame"]),

    async savingData() {
      await this.saveDataGame();
    },
  },
  computed: {
    ...mapWritableState(useGameMethodStore, [
      "cardList",
      "cardListAI",
      "cardListYou",
      "totalAtkYou",
      "totalAtkAI",
      "resultGame",
      "pointAI",
      "pointYou",
    ]),
  },
  created() {
    this.gameSixCardData();
  },

  unmounted() {
    this.totalAtkAI = 0;
    this.totalAtkYou = 0;
    this.pointAI = 0;
    this.pointYou = 0;
  },
};
</script>

<template>
  <!-- Product Detail -->
  <section class="py-5">
    <div
      class="container px-4 px-lg-5 h-100 my-1 bg-light border border-5 border-dark rounded rounded-4 p-2 mt-5 mb-5"
    >
      <h3 class="text">Game Page</h3>

      <h3 class="text-center">You {{ resultGame }}</h3>

      <div class="container row justify-content-center mb-3" id="card-ai">
        <div class="justify-content-center mb-3 d-flex mt-2">
          <button class="btn btn-info btn-lg">
            Total Attack (AI) : {{ totalAtkAI }}
          </button>
        </div>

        <CardTCG v-for="card in cardListAI" :key="card.id" :card="card" />
      </div>

      <div class="container row justify-content-center mt-5" id="card-player">
        <CardTCG v-for="card in cardListYou" :key="card.id" :card="card" />
        <div class="justify-content-center mb-3 d-flex mt-2">
          <button class="btn btn-dark btn-lg">
            Total Attack (You) : {{ totalAtkYou }}
          </button>
        </div>
        <div class="justify-content-center mb-3 d-flex mt-2">
          <button @click.prevent="savingData" class="btn btn-success btn-lg">
            Save my Card + Stats
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
