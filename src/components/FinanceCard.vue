<script>
export default {
  name: "FinanceCard",
  props: ['title', 'value', 'unit', 'order'],
  computed: {
    formatValue() {
      return this.value.toLocaleString('id-ID');
    },
    formatOrder() {
      return this.order.toLocaleString('id-ID');
    },
  }
}
</script>

<template>
  <div class="col-md-3">
    <div class="card border-primary mb-3 rounded-0" style="max-width: 18rem;">
      <div class="card-header text-light border-primary bg-primary rounded-0">{{title}}</div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-4">
            <p class="card-text fw-bold">Value</p>
          </div>
          <div class="col-md-8">
            <p class="card-text">{{ formatValue }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <p class="card-text fw-bold">Unit</p>
          </div>
          <div class="col-md-8">
            <p class="card-text">{{unit}}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <p class="card-text fw-bold">Order</p>
          </div>
          <div class="col-md-8">
            <p class="card-text">{{ formatOrder}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>