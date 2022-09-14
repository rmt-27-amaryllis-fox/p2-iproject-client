import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
    state: () => ({
        baseUrl: "http://localhost:3000",
        isLogin: true,
        movies: [],
        page: "1",
        detail: {}
    }),
    getters: {},
    actions: {
        async fetchMovies() {
            try {
                const { data } = await axios({
                    method: "GET",
                    url: this.baseUrl + "/movies/",
                    params: { page: this.page },
                });
                this.movies = data.movies;
            } catch (err) {
                console.log(err.response.data);
            }
        },
        async detailMovie(id) {
            try {
                const { data } = await axios({
                    method: "GET",
                    url: this.baseUrl + "/movies/" + id
                })
                this.detail = data
            } catch (err) {
                console.log(err.response.data);
            }
        },
    },
});
