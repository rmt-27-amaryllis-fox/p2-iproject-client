<script>
import FreeGameCard from "../components/FreeGameCard.vue";
import { mapActions, mapWritableState } from "pinia";
import { useFreeToGamesStore } from "../stores/freegame";

export default {
  components: {
    FreeGameCard,
  },
  data() {
    return {
      searchKey: "",
      freeGames: [],
      filteredGames : [],
    };
  },
  computed: {
    // ...mapState(useFreeToGamesStore, ["games"]),
  },
  methods: {
    ...mapActions(useFreeToGamesStore, ["fetchAll"]),
    onSearch() {
      const data= this.freeGames
      const newData = data.filter((e) => {
        return e.title.toLowerCase().includes(this.searchKey.toLowerCase())
      });
      console.log(newData)
      this.searchKey = "";
      this.filteredGames = newData
    },
  },
  async created() {
    const { data } = await this.fetchAll();
    this.freeGames = data;
    this.filteredGames = data
  },
};
</script>

<template>
  <div class="container my-5">
    <div class="row">
      <form @submit.prevent="onSearch" class="form-inline">
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
      <FreeGameCard v-for="game in filteredGames" :game="game" />
    </div>
  </div>
</template>
