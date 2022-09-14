import {defineStore} from 'pinia'
import axios from 'axios';

export const useCalculatorStore = defineStore('calculator', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    targetReturn : 0
  }),
  actions: {
    async lumpSumHandler({investmentFund, period, annualReturn}) {
      try {
        const {data: {returnTotal}} = await axios.post(`${this.baseUrl}/calculators/lumpsum`, {
          investmentFund,
          period,
          annualReturn
        });
        this.targetReturn = returnTotal;
      } catch (e) {
        console.log(e);
      }
    },
  },
})