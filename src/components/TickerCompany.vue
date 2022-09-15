<script>
export default {
  name: "TickerCompany",
  props: ['data'],
}
</script>

<template>
 <div class="div m-3">
   <div class="row">
     <div class="col-md-6">
       <p class="fw-bold">Ticker</p>
     </div>
     <div class="col-md-6">
       <p>{{ data.ticker }}</p>
     </div>
   </div>
   <div class="row">
     <div class="col-md-6">
       <p class="fw-bold">Company Name</p>
     </div>
     <div class="col-md-6">
       <p>{{ data.name }}</p>
     </div>
   </div>
   <div class="row">
     <div class="col-md-6">
       <p class="fw-bold">CIK</p>
     </div>
     <div class="col-md-6">
       <p>{{ data.cik }}</p>
     </div>
   </div>
   <div class="row">
     <div class="col-md-6">
       <p class="fw-bold">City</p>
     </div>
     <div class="col-md-6">
       <p>{{ data.address ? data.address.city : '' }}</p>
     </div>
   </div>
   <div class="row">
     <div class="col-md-6">
       <p class="fw-bold">Postal Code</p>
     </div>
     <div class="col-md-6">
       <p>{{ data.address ? data.address.postal_code : '' }}</p>
     </div>
   </div>
   <div class="row">
     <div class="col-md-6">
       <p class="fw-bold">State</p>
     </div>
     <div class="col-md-6">
       <p>{{ data.address ? data.address.state : '' }}</p>
     </div>
   </div>
   <div class="row">
     <div class="col-md-6">
       <p class="fw-bold">Locale</p>
     </div>
     <div class="col-md-6">
       <p>{{ data.locale }}</p>
     </div>
   </div>
   <div class="row">
     <div class="col-md-6">
       <p class="fw-bold">SIC Code</p>
     </div>
     <div class="col-md-6">
       <p>{{ data.sic_code }}</p>
     </div>
   </div>
   <div class="row">
     <div class="col-md-6">
       <p class="fw-bold">SIC Description</p>
     </div>
     <div class="col-md-6">
       <p>{{ data.sic_description }}</p>
     </div>
   </div>
   <div class="row">
     <div class="col-md-6">
       <p class="fw-bold">List Date</p>
     </div>
     <div class="col-md-6">
       <p>{{ data.list_date }}</p>
     </div>
   </div>
   <div class="row">
     <div class="col-md-6">
       <p class="fw-bold">Primary Exchange</p>
     </div>
     <div class="col-md-6">
       <p>{{ data.primary_exchange }}</p>
     </div>
   </div>
   <div class="row">
     <div class="col-md-6">
       <p class="fw-bold">Total Employees</p>
     </div>
     <div class="col-md-6">
       <p>{{ data.total_employees }}</p>
     </div>
   </div>
   <div class="row">
     <div class="col-md-6">
       <p class="fw-bold">Market Cap</p>
     </div>
     <div class="col-md-6">
       <p>{{ data.market_cap }}</p>
     </div>
   </div>
   <div class="row">
     <div class="col-md-6">
       <p class="fw-bold">Overview</p>
     </div>
     <div class="col-md-6">
       <p>{{ data.description }}</p>
     </div>
   </div>
 </div>
</template>

<style scoped>

</style>