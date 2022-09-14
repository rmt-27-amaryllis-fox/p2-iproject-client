import {defineStore} from 'pinia'
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    baseUrl: 'https://kantongsaham-api.herokuapp.com',
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
    fetchProfile() {
      const access_token = localStorage.getItem('access_token');
      return axios.get(`${this.baseUrl}/users`, {
        headers: {access_token}
      });
    },
  },
})