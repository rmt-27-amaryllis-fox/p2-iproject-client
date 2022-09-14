import { defineStore } from 'pinia'
import axios from 'axios';

export const usePremiumPackageStore = defineStore('premiumPackage', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    packages: []
  }),
  actions: {
    async fetchPackages() {
      try{
        const {data} = await axios.get(`${this.baseUrl}/packages`);
        this.packages = data;
      }catch (e) {
        throw e;
      }
    },
  },
})