import { defineStore } from "pinia";
import axios from "axios";
import swal from "sweetalert2";
export const useCoinStore = defineStore('coin', {
    state : () => ({
        coins : [],
        // baseUrl : 'http://localhost:3000',
        baseUrl : 'https://cryptoverse-server.herokuapp.com',
        myWallet : [],
        sumPrice : 0,
        coinToBuy : '',
        quantity : '',
        rupiahValue : 0,
        page : 1
    }),

    getters : {
        convertToIdr(){
            return this.sumPrice.toLocaleString('id', 'ID', {type : 'currency', currency : 'IDR'})
        }
    },

    actions : {
        async fetchCoin(){
            try {
                let {data} = await axios({
                    method : 'GET',
                    url : this.baseUrl + '/coin/coins',
                    params : {
                        page : this.page
                    },
                    headers : {
                        access_token : localStorage.access_token
                    }
                })
                console.log(data)
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
        },

        async getOneCoin(uuid){
            try {
                let {data} = await axios({
                    method : 'GET',
                    url : this.baseUrl + `/coin/coin/${uuid}`,
                    headers : {
                        access_token : localStorage.access_token
                    }
                })

                this.coinToBuy = data
                // this.router.push(`/buy/${uuid}`)
            } catch (error) {
                console.log(error)
            }
        },

        async buyCoin(uuid){
            try {
                let {data} = await axios({
                    method : 'POST',
                    url : this.baseUrl + `/wallet/${uuid}`,
                    params : {
                        quantity : this.quantity
                    },
                    headers : {
                        access_token : localStorage.access_token
                    }
                })

                console.log(data)
                this.quantity = ''
                swal.fire({
                    icon : 'success',
                    title : 'Success Buy !'
                })
                this.router.push('/wallet')
            } catch (error) {
                console.log(error)
            }
        },

        toBuyPage(uuid){
            this.router.push(`/buy/${uuid}`)
        },

        async getCurrentIDRPrice(){
            try {
                let conversion = await axios({
                    method : 'GET',
                    url : this.baseUrl + '/coin/rupiah'
                })
                this.rupiahValue = conversion.data.curs
            } catch (error) {
                console.log(error)
            }
        },
        
        getPage(page){
            this.page = page
            this.fetchCoin()
        },

        previousPage(){
            this.page = this.page - 1
            this.fetchCoin()
        },

        nextPage(){
            this.page = this.page + 1
            this.fetchCoin()
        }
    }
})