import {defineStore} from 'pinia'
import axios from 'axios';

export const usePaymentStore = defineStore('payment', {
  state: () => ({
    baseUrl: 'https://kantongsaham-api.herokuapp.com'
  }),
  actions: {
    paymentHandler(packageId) {
      const access_token = localStorage.getItem('access_token');
      return axios.post(`${this.baseUrl}/payments/${packageId}`, null, {
        headers: {access_token}
      });
    },
  },
})