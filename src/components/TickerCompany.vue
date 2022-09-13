<script>
export default {
  name: "TickerCompany",
  props: ['data'],
}
</script>

<template>
  <div class="card">
    <div class="card-header bg-primary text-light">
      <p class="card-text">Company Information</p>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-6">
          <p>Ticker</p>
        </div>
        <div class="col-md-6">
          <p>{{ data.ticker }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p>Company Name</p>
        </div>
        <div class="col-md-6">
          <p>{{ data.name }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p>CIK</p>
        </div>
        <div class="col-md-6">
          <p>{{ data.cik }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p>City</p>
        </div>
        <div class="col-md-6">
          <p>{{ data.address ? data.address.city : '' }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p>Postal Code</p>
        </div>
        <div class="col-md-6">
          <p>{{ data.address ? data.address.postal_code : '' }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p>State</p>
        </div>
        <div class="col-md-6">
          <p>{{ data.address ? data.address.state : '' }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p>Locale</p>
        </div>
        <div class="col-md-6">
          <p>{{ data.locale }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p>SIC Code</p>
        </div>
        <div class="col-md-6">
          <p>{{ data.sic_code }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p>SIC Description</p>
        </div>
        <div class="col-md-6">
          <p>{{ data.sic_description }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p>List Date</p>
        </div>
        <div class="col-md-6">
          <p>{{ data.list_date }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p>Primary Exchange</p>
        </div>
        <div class="col-md-6">
          <p>{{ data.primary_exchange }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p>Total Employees</p>
        </div>
        <div class="col-md-6">
          <p>{{ data.total_employees }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>