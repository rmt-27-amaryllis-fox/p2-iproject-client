<script>
import {mapActions, mapWritableState} from "pinia";
import {useCalculatorStore} from "../stores/calculator";

export default {
  name: "CalculatorView",
  data() {
    return {
      investmentFund: '',
      period: '',
      profileRisk: 0,
      estimatedReturn: 0
    }
  },
  watch: {
    profileRisk(newValue, oldValue) {
      this.estimatedReturn = this.profileRisk;
    },
  },
  computed: {
    ...mapWritableState(useCalculatorStore, ['targetReturn']),
    formatInvestmentFund() {
      return this.investmentFund.toLocaleString('id-ID');
    },
    formatTargetReturn() {
      return this.targetReturn.toLocaleString('id-ID');
    },
  },
  methods: {
    ...mapActions(useCalculatorStore, ['lumpSumHandler']),
    onClearHandler() {
      this.investmentFund = '';
      this.period = '';
      this.profileRisk = 6;
      this.targetReturn = 0;
    },
    onCalculateLumpSumHandler() {
      this.lumpSumHandler({
        investmentFund: this.investmentFund,
        period: this.period,
        annualReturn: this.estimatedReturn
      });
    },
  },
  created() {
    this.targetReturn = 0;
    this.profileRisk = 6;
  }
}
</script>

<template>
  <div class="container mt-4 d-flex flex-column align-items-center">
    <div class="card mb-2" style="width: 50%">
      <div class="card-body">
        <form action="" @submit.prevent="onCalculateLumpSumHandler">
          <div class="mb-3">
            <label for="investment-fund" class="form-label">Investment Fund (Rp)</label>
            <input type="number" class="form-control" id="investment-fund" placeholder="1.000.000"
                   v-model="investmentFund">
          </div>
          <div class="mb-3">
            <label for="period" class="form-label">Period (Month)</label>
            <input type="number" class="form-control" id="period" placeholder="24" v-model="period">
          </div>
          <div class="mb-3">
            <label for="profile-risk" class="form-label">Profile Risk</label>
            <select class="form-select" v-model="profileRisk">
              <option value="6" selected>Very Conservative</option>
              <option value="8.5">Conservative</option>
              <option value="10">Moderate</option>
              <option value="15">Aggresive</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="estimated-return" class="form-label">Estimated Annual Return (%)</label>
            <input type="number" class="form-control" id="estimated-return" :value="estimatedReturn" disabled>
          </div>
          <div class="mb-3 d-flex justify-content-end">
            <button class="btn btn-outline-danger me-2" @click.prevent="onClearHandler">Clear</button>
            <button class="btn btn-outline-primary">Calculate</button>
          </div>
        </form>
      </div>
    </div>
    <div v-if="targetReturn" class="card mb-2" style="width: 50%">
      <div class="card-body">
        <p class="mb-4 fw-bold text-center">Calculation Result</p>
        <div class="row">
          <div class="col-md-8 fw-bold">
            Investment Fund (Rp)
          </div>
          <div class="col-md-4">
            {{ formatInvestmentFund }}
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 fw-bold">
            Period (Month)
          </div>
          <div class="col-md-4">
            {{ period }}
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 fw-bold">
            Estimated Annual Return (%)
          </div>
          <div class="col-md-4">
            {{ estimatedReturn }}
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 fw-bold">
            Target Return (Rp)
          </div>
          <div class="col-md-4">
            {{ formatTargetReturn }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>