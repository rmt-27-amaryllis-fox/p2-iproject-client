<script>
import SearchBar from "../components/SearchBar.vue";
import SearchFilter from "../components/SearchFilter.vue";
import StocksTable from "../components/StocksTable.vue";

export default {
  components: {StocksTable, SearchFilter, SearchBar}
}
</script>

<template>
  <div class="container-fluid my-4">
    <SearchBar/>
    <div class="row">
      <div class="col-md-3">
        <SearchFilter/>
      </div>
      <div class="col-md-9">
        <StocksTable/>
      </div>
    </div>

  </div>
</template>
