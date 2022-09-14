import {defineStore} from 'pinia'
import axios from 'axios';

export const useWatchlistStore = defineStore('watchlist', {
  state: () => ({
    baseUrl: 'https://kantongsaham-api.herokuapp.com',
    watchlists: []
  }),
  actions: {
    async fetchWatchlists() {
      try{
        const access_token = localStorage.getItem('access_token');
        const {data} = await axios.get(`${this.baseUrl}/watchlists`, {
          headers: {access_token}
        });
        this.watchlists = data;
      }catch (e) {
        console.log(e);
      }
    },
  },
})