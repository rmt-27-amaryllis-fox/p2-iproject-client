<script>
import WatchlistCard from "../components/WatchlistCard.vue";
import WatchlistInfo from "../components/WatchlistInfo.vue";
import WatchlistLock from "../components/WatchlistLock.vue";
import {mapActions, mapState} from "pinia";
import {useWatchlistStore} from "../stores/watchlist";

export default {
  name: "WatchlistView",
  components: {WatchlistLock, WatchlistInfo, WatchlistCard},
  data() {
    return {
      premium: ''
    }
  },
  computed: {
    ...mapState(useWatchlistStore, ['watchlists'])
  },
  methods: {
    ...mapActions(useWatchlistStore, ['fetchWatchlists'])
  },
  created() {
    const premium = localStorage.getItem('premium')
    if (+premium === 1) {
      this.fetchWatchlists();
    }
    this.premium = premium;
  }
}
</script>

<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <WatchlistCard v-if="+premium === 1" :data="watchlists"/>
      <WatchlistLock v-else/>
      <WatchlistInfo/>
    </div>
  </div>
</template>

<style scoped>

</style>