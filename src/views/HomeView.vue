<script>
import {mapActions, mapState} from "pinia";
import {useTickerStore} from "../stores/ticker";
import SearchBar from "../components/SearchBar.vue";
import SearchFilter from "../components/SearchFilter.vue";
import StocksTable from "../components/StocksTable.vue";
import TickerCompany from "../components/TickerCompany.vue";
import TickerFinance from "../components/TickerFinance.vue";
import LoadingBar from "../components/LoadingBar.vue";

export default {
  components: {LoadingBar, TickerFinance, TickerCompany, StocksTable, SearchFilter, SearchBar},
  data() {
    return {
      invisible: true
    }
  },
  computed: {
    ...mapState(useTickerStore, ['data'])
  },
  methods: {
    ...mapActions(useTickerStore, ['fetchTickerHandler']),
    onSearchHandler(ticker) {
      this.$router.push({name: 'home', query: {ticker}})
    },

  },
  created() {
    this.$router.replace({'query': null});

    this.$watch(
        () => this.$route.query,
        async () => {
          if (this.$route.query.ticker) {
            this.invisible = false;
            await this.fetchTickerHandler(this.$route.query.ticker)
            this.invisible = true;
          }
        }
    )
  }
}
</script>
t
<template>
  <LoadingBar v-if="!invisible"/>
  <div class="container-fluid my-4">
    <SearchBar @onSearch="onSearchHandler"/>
    <div class="text-center" v-if="!data.news.length">
      <h2 class="m-0">Try to search using stock picker</h2>
      <img src="../assets/search.png" class="card-img-top p-0 rounded-0" alt="..." style="width: 40%">
    </div>
    <div class="card rounded-0" v-else>
      <div class="card-body rounded-0">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active rounded-0" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab" aria-controls="home-tab-pane" aria-selected="true">Company
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link rounded-0" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab" aria-controls="profile-tab-pane" aria-selected="false">Finance
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link rounded-0" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane"
                    type="button"
                    role="tab" aria-controls="contact-tab-pane" aria-selected="false">News
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"
               tabindex="0">
            <TickerCompany :data="data.detail"/>
          </div>
          <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
            <TickerFinance :data="data.financial"/>
          </div>
          <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
            <div class="m-3">
              <div class="card mb-3 rounded-0" v-for="news in data.news" :key="news.id">
                <img :src="news.image_url" class="card-img-top rounded-0" alt="..."
                     style="height: 280px;object-fit: cover">
                <div class="card-body rounded-0">
                  <span class="badge text-bg-primary mb-4 me-1" v-for="(ticker, i) in news.tickers" :key="i" >{{ ticker }}</span>
                  <h5 class="card-title">{{ news.title }}</h5>
                  <p class="card-text">{{ news.description }}</p>
                  <p class="card-text"><small class="text-muted">Published at {{ news.published_utc }}</small></p>
                  <div class="d-flex justify-content-end">
                    <a :href="news.article_url" class="btn btn-outline-primary rounded-0" target="_blank">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  margin-bottom: 0;
}
</style>
