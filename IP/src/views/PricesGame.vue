<script>
import PricesGameCard from "../components/PricesGameCard.vue";
import { mapActions, mapState } from "pinia";
import { usePricesGamesStore } from "../stores/pricesgame";
import { useUserStore } from "../stores/user";

export default {
  components: {
    PricesGameCard,
  },
  data() {
    return {
      searchKey: "",
    };
  },
  computed: {
    ...mapState(usePricesGamesStore, ["games"]),
  },
  methods: {
    ...mapActions(usePricesGamesStore, ["search"]),
  },
};
</script>

<template>
  <div class="container my-5">
    <div class="row">
      <form @submit.prevent="search(searchKey)" class="form-inline">
        <div class="form-group mx-sm-3 mb-2">
          <input
            v-model="searchKey"
            class="form-control"
            placeholder="Search"
          />
        </div>
        <button type="submit" class="btn btn-primary mb-2">Search</button>
      </form>
    </div>
  </div>

  <hr />

  <div class="container my-5">
    <div class="row">
      <PricesGameCard v-for="game in games.games" :game="game" />
      <!-- <FreeGameCard v-for="game in freeGames" :game="game"/> -->
    </div>
  </div>
</template>
