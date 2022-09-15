<script>
export default {
  name: "WatchlistItem",
  props: ['ticker', 'company', 'targetPrice', 'date']
}
</script>

<template>
  <div class="col-md-4 mb-4">
    <div class="card rounded-0">
      <div class="card-header bg-transparent d-flex justify-content-center">
        <span style="">Created : {{ new Date(date).toDateString() }}</span>
      </div>
      <div class="card-body rounded-0" style="height: 120px">
        <div class="row">
          <div class="col-md-8">
            <h5 class="card-title">{{ ticker }}</h5>
            <p class="card-text">{{company}}</p>
          </div>
          <div class="col-md-4">
            <h5 class="card-title">{{targetPrice}}</h5>
            <p class="card-text">Target Price</p>
          </div>
        </div>
      </div>
      <div class="card-footer bg-transparent d-flex justify-content-center">
                    <span class="text-danger">Disclaimer ON<i
                        class="bi bi-lightbulb ms-2"></i></span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>