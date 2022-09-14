import { defineStore } from 'pinia'
import axios from 'axios';

export const useNewsStore = defineStore('news', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    news: []
  }),
  actions: {
    async fetchNewsHandler() {
      try{
        const {data} = await axios.get(`${this.baseUrl}/news`);
        this.news = data
        console.log(data)
      }catch (e) {
        console.log(e);
      }
    },
  },
})