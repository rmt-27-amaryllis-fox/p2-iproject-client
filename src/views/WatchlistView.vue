<script>
import WatchlistCard from "../components/WatchlistCard.vue";
import WatchlistInfo from "../components/WatchlistInfo.vue";
import WatchlistLock from "../components/WatchlistLock.vue";
import {mapActions, mapState} from "pinia";
import {useWatchlistStore} from "../stores/watchlist";
import LoadingBar from "../components/LoadingBar.vue";

export default {
  name: "WatchlistView",
  components: {LoadingBar, WatchlistLock, WatchlistInfo, WatchlistCard},
  data() {
    return {
      premium: '',
      invisible: true
    }
  },
  computed: {
    ...mapState(useWatchlistStore, ['watchlists'])
  },
  methods: {
    ...mapActions(useWatchlistStore, ['fetchWatchlists'])
  },
  async created() {
    this.invisible = false;
    const premium = localStorage.getItem('premium')
    if (+premium === 1) {
      await this.fetchWatchlists();
    }
    this.premium = premium;
    this.invisible = true;
  }
}
</script>

<template>
  <LoadingBar v-if="!invisible"/>

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