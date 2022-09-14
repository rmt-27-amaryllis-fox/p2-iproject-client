import { defineStore } from 'pinia'
import axios from 'axios';

export const useNewsStore = defineStore('news', {
  state: () => ({
    baseUrl: 'https://kantongsaham-api.herokuapp.com',
    news: []
  }),
  actions: {
    async fetchNewsHandler() {
      try{
        const {data} = await axios.get(`${this.baseUrl}/news`);
        this.news = data;
      }catch (e) {
        throw e;
      }
    },
  },
})