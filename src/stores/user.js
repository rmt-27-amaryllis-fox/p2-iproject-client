import {defineStore} from 'pinia'
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    identity: ''
  }),
  actions: {
    registerHandler({name, email, password}) {
      return axios.post(`${this.baseUrl}/register`, {
        name,
        email,
        password
      });
    },
    loginHandler({email, password}) {
      return axios.post(`${this.baseUrl}/login`, {
        email,
        password
      });
    },
  },
})