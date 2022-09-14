import { defineStore } from "pinia";
import axios from "axios";

export const useCoinStore = defineStore('coin', {
    state : () => ({
        coins : [],
        baseUrl : 'http://localhost:3000',
        myWallet : [],
        sumPrice : 0
    }),

    getters : {
        convertToIdr(){
            return (this.sumPrice * 14500).toLocaleString('id', 'ID', {type : 'currency', currency : 'IDR'})
        }
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
        },

        async fetchMyWallet(){
            try {
                let {data} = await axios({
                    method : 'GET',
                    url : this.baseUrl + '/wallet',
                    headers : {
                        access_token : localStorage.access_token
                    }
                })

                this.myWallet = data
                this.sumOfAsset(data)
            } catch (error) {
                console.log(error)
            }
        },

        sumOfAsset(data){
            let allAssets = 0
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                allAssets += data[i].price * data[i].quantity
            }
            console.log(allAssets)
            this.sumPrice = allAssets
        }
    }
})