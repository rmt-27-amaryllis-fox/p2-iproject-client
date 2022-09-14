import {defineStore} from 'pinia'
import axios from 'axios';

export const useTickerStore = defineStore('ticker', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    data: {
      financial: {},
      detail: {},
      news: []
    }
  }),
  actions: {
    async fetchTickerHandler(ticker) {
      try{
        const {data: {tickerFinancialInfo, tickerDetailInfo, tickerNews}} = await axios.get(`${this.baseUrl}/tickers`, {
          params: {ticker}
        });
        this.data.financial = tickerFinancialInfo;
        this.data.detail = tickerDetailInfo;
        this.data.news = tickerNews;
      }catch (e) {
        const message = 'Ticker not found';
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message,
        })
      }
    },
  },
})