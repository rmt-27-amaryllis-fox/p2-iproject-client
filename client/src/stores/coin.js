import { defineStore } from "pinia";
import axios from "axios";

export const useCoinStore = defineStore('coin', {
    state : () => ({
        coins : [],
        baseUrl : 'http://localhost:3000',
        myWallet : []
    }),

    getters : {

    },

    actions : {
        async fetchCoin(){
            try {
                let {data} = await axios({
                    method : 'GET',
                    url : this.baseUrl + '/coin/coins',
                    params : {
                        page : 1
                    },
                    headers : {
                        access_token : localStorage.access_token
                    }
                })

                this.coins = data
            } catch (error) {
                console.log(error)
            }
            
        }
    }
})