import {defineStore} from 'pinia'
import axios from 'axios';

export const usePaymentStore = defineStore('payment', {
  state: () => ({
    baseUrl: 'http://localhost:3000'
  }),
  actions: {
    paymentHandler(packageId) {
      const access_token = localStorage.getItem('access_token');
      return axios.post(`${this.baseUrl}/payment/${packageId}`, null, {
        headers: {access_token}
      });
    },
  },
})