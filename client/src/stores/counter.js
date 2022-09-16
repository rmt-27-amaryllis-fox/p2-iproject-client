import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    songs: [],
    songsSearch: [],
    artistsSearch: [],
    playlists: [],
    user: '',
    // userId: '',
    alreadyLogin: false
  }),
  actions: {
    async loginAction() {
      try {
        console.log('in login action')
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + '/login'
        });
        window.location.href = `https://accounts.spotify.com/authorize?${data}`;
      } catch (error) {
        console.log(error);
      }
    },
    getParams() {
        const params = new Proxy(new URLSearchParams(window.location.search), {
          get: (searchParams, prop) => searchParams.get(prop),
        });
        localStorage.setItem("access_token", params.access_token);
        this.alreadyLogin = true;
    },
    async fetchNewReleases() {
      try {
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + '/songs/newrelease',
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.songs = data;
      } catch (error) {
        console.log(error);
      }
    },
    async search(value) {
      try {
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + '/songs/search',
          headers: {
            access_token: localStorage.access_token
          },
          params: value
        });
        this.songsSearch = data;
      } catch (error) {
        console.log(error);
        swal({
          title: "Error!",
          text: error.response.data.message,
          icon: "error"
        });
      }
    },
    async fetchUser() {
      try {
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + '/users',
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.user = data;
        localStorage.userId = data.id;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchPlaylist() {
      try {
        console.log('playlist')
        console.log(localStorage.access_token, ' <<< ACCESS_TOKEN')
        console.log(localStorage.userId, ' <<< USERID');
        let userId = localStorage.userId
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + `/playlists/${userId}`,
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.playlists = data;
        // console.log(data)
      } catch (error) {
        console.log(error);
      }
    },
    async createPlaylist(value) {
      try {
        console.log('create playlist')
        console.log(localStorage.access_token, ' <<< ACCESS_TOKEN')
        console.log(localStorage.userId, ' <<< USERID');
        let userId = localStorage.userId
        const { data } = await axios({
          method: 'post',
          url: this.baseUrl + `/playlists/${userId}`,
          headers: {
            access_token: localStorage.access_token
          },
          data: value
        });
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    },
    async searchSimilar(value) {
      try {
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + '/artists/search',
          headers: {
            access_token: localStorage.access_token
          },
          params: value
        });
        this.artistsSearch = data;
      } catch (error) {
        console.log(error);
        swal({
          title: "Error!",
          text: error.response.data.message,
          icon: "error"
        });
      }
    }
  }
});
