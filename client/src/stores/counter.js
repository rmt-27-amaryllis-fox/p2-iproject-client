import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
    state: () => ({
        isLogin: false
    }),
    getters: {},
    actions: {
    },
});
