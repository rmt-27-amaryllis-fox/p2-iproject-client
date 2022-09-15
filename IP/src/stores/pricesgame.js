import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import swal from "sweetalert";

const BASE_URL = "http://localhost:3000";

export const usePricesGamesStore = defineStore("pricesGames", {
  id: "pricesGames",
  state: () => ({
    games: [],
    totalPage: 1,
    page: 1,
  }),
  actions: {
    async search(search) {
      try {
        const { data } = await axios({
          method: "get",
          url: BASE_URL + "/prices",
          params: {
            name: search,
            page: this.page,
          },
        });

        this.totalPage = Math.ceil(data.totalAmountFound / data.amount);
        this.games = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
