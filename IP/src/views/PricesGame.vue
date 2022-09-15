<script>
import PricesGameCard from "../components/PricesGameCard.vue";
import { mapActions, mapState, mapWritableState} from "pinia";
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
    ...mapState(usePricesGamesStore, ["games", "totalPage"]),
    ...mapWritableState(usePricesGamesStore, ["page"]),
  },
  methods: {
    ...mapActions(usePricesGamesStore, ["search"]),
    onChangePage(page) {
      this.page = page;
      this.search(this.searchKey)
    },
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
    <ul class="pagination">
      <li class="page-item">
        <a
          @click="onChangePage(page - 1)"
          class="page-link"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in totalPage">
        <a @click="onChangePage(page)" class="page-link">{{ page }}</a>
      </li>
      <li class="page-item">
        <a @click="onChangePage(page + 1)" class="page-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </div>

  
  <div class="container my-5">
    <div class="row">
      <PricesGameCard v-for="game in games.games" :game="game" />
      <!-- <FreeGameCard v-for="game in freeGames" :game="game"/> -->
    </div>
  </div>
</template>
