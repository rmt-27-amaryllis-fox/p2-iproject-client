<script>
import {mapActions, mapState} from "pinia";
import {useTickerStore} from "../stores/ticker";
import SearchBar from "../components/SearchBar.vue";
import SearchFilter from "../components/SearchFilter.vue";
import StocksTable from "../components/StocksTable.vue";
import TickerCompany from "../components/TickerCompany.vue";
import TickerFinance from "../components/TickerFinance.vue";

export default {
  components: {TickerFinance, TickerCompany, StocksTable, SearchFilter, SearchBar},
  computed: {
    ...mapState(useTickerStore, ['data'])
  },
  methods: {
    ...mapActions(useTickerStore, ['fetchTickerHandler']),
    onSearchHandler(ticker) {
      this.$router.push({name: 'home' ,query: {ticker}})
      // this.fetchTickerHandler(ticker);
    },
  },
  created() {
    this.$watch(
        () => this.$route.query,
        () => {
          this.fetchTickerHandler(this.$route.query.ticker)
        }
    )
  }
}
</script>

<template>
  <div class="container-fluid my-4">
    <SearchBar @onSearch="onSearchHandler"/>
    <div class="row">
      <div class="col-md-4">
        <TickerCompany :data="data.detail"/>
      </div>
      <div class="col-md-8">
        <TickerFinance :data="data.financial"/>
      </div>
    </div>

  </div>
</template>

<style scoped>
p {
  margin-bottom: 0;
}
</style>
