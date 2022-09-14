import { defineStore } from "pinia";
import axios from "axios";

export const usePostStore = defineStore("post", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    posts: [],
    weatherData: [],
  }),
  getters: {},
  actions: {
    async fetchAllPost() {
      try {
        const result = await axios({
          method: "GET",
          url: `${this.baseUrl}/posts`,
          headers: {
            access_token: localStorage.access_token,
          },
        });

        this.posts = result.data;
      } catch (err) {
        console.log(err);
      }
    },
    async addPostByCity(payload) {
      try {
        const weather = await axios({
          method: "GET",
          url: `https://api.openweathermap.org/data/2.5/weather`,
          params: {
            q: payload.location,
            appid: `69969cbfe1345c918afc08dc68f4f327`,
          },
        });

        await axios({
          method: "POST",
          url: `${this.baseUrl}/posts`,
          headers: {
            access_token: localStorage.access_token,
          },
          data: {
            imageUrl: payload.imageUrl,
            caption: payload.caption,
            location: payload.location,
            weatherMain: weather.data.weather[0].main,
            weatherDescription: weather.data.weather[0].description,
            weatherIcon: weather.data.weather[0].icon,
            country: weather.data.sys.country,
          },
        });

        this.router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
    async addPostByCoordinate(payload) {
      try {
        const weather = await axios({
          method: "GET",
          url: `https://api.openweathermap.org/data/2.5/weather`,
          params: {
            lat: payload.lat,
            lon: payload.lon,
            appid: `69969cbfe1345c918afc08dc68f4f327`,
          },
        });

        console.log(weather, "INI HASIL HIT");

        await axios({
          method: "POST",
          url: `${this.baseUrl}/posts`,
          headers: {
            access_token: localStorage.access_token,
          },
          data: {
            imageUrl: payload.imageUrl,
            caption: payload.caption,
            location: weather.data.name,
            weatherMain: weather.data.weather[0].main,
            weatherDescription: weather.data.weather[0].description,
            weatherIcon: weather.data.weather[0].icon,
            country: weather.data.sys.country,
          },
        });

        this.router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
});
