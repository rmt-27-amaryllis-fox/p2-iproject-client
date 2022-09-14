import { defineStore } from "pinia";
import axios from "axios";

export const usePostStore = defineStore("post", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    posts: [],
    weatherData: [],
    post: {},
    aboutThisCity: {},
    cityParagraph: {},
    cityThumbnail: "",
  }),
  getters: {},
  actions: {
    async fetchAllPost(filter) {
      try {
        const result = await axios({
          method: "GET",
          url: `${this.baseUrl}/posts`,
          headers: {
            access_token: localStorage.access_token,
          },
          params: {
            filter,
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

    async fetchPost(id) {
      try {
        const result = await axios({
          method: "GET",
          url: `${this.baseUrl}/posts/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });

        this.post = result.data;
      } catch (err) {
        console.log(err);
      }
    },

    async about(id) {
      const city = this.post.location;

      const result = await axios({
        method: "GET",
        url: `https://en.wikipedia.org/w/api.php?action=query&titles=${city}&prop=extracts%7Cpageimages%7Cinfo&pithumbsize=400&inprop=url&redirects=&format=json&origin=*&exintro=1`,
      });

      const key = Object.keys(result.data.query.pages)[0];
      const paragraph = result.data.query.pages[key].extract;
      const clearParagraph = paragraph.replace(/(<([^>]+)>)/gi, "");
      this.cityParagraph = clearParagraph;
      this.cityThumbnail = result.data.query.pages[key].thumbnail.source;
    },
  },
});
