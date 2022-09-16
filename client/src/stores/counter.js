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
    genre: '',
    lyrics: '',
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
          url: this.baseUrl + '/albums/search',
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
        console.log(data)
        localStorage.userId = data.id;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchPlaylist() {
      try {
        let userId = localStorage.userId
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + `/playlists/${userId}`,
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.playlists = data;
      } catch (error) {
        console.log(error);
      }
    },
    async createPlaylist(value) {
      try {
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
        console.log(value)
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + '/artists/search',
          headers: {
            access_token: localStorage.access_token
          },
          params: value
        });
        this.artistsSearch = data.Results;
        console.log(data.Results)
      } catch (error) {
        console.log(error);
        // swal({
        //   title: "Error!",
        //   text: error.response.data.message,
        //   icon: "error"
        // });
      }
    },
    async searchLyrics(value) {
      try {
        console.log(value)
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + '/lyrics/search',
          headers: {
            access_token: localStorage.access_token
          },
          params: value
        });
        this.lyrics = data;
        console.log(this.lyrics)
      } catch (error) {
        console.log(error);
      }
    },
    async genrenator() {
      try {
        console.log('genrenator')
        const { data } = await axios({
          method: 'get',
          url:`https://binaryjazz.us/wp-json/genrenator/v1/genre/`
        });
        console.log(data)
        this.genre = data;
      } catch (error) {
        console.log(error);
      }
    },
  }
});
