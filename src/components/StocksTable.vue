<script>
import StocksTableHead from "./StocksTableHead.vue";
import StocksTableBody from "./StocksTableBody.vue";

export default {
  name: "StocksTable",
  components: {StocksTableBody, StocksTableHead}
}
</script>

<template>
  <table class="table table-bordered table-sm">
    <StocksTableHead/>
    <StocksTableBody/>
  </table>
  <nav>
    <ul class="pagination justify-content-end">
      <li class="page-item active" aria-current="page">
        <span class="page-link">1</span>
      </li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
    </ul>
  </nav>
</template>

<style scoped>

</style>