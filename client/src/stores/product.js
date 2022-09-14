import { defineStore } from 'pinia'
import axios from "axios"

export const useProductStore = defineStore({
    id:'Product',
    state: () => ({ 
        baseUrl:'http://localhost:3000',
        PlanList :[],
        AllPlan: [],
        pageNumber:0,
        selectedPlan: {},
        productlist: [],
        MyPlanList: []
    }),
    getters: {

    },
    actions: {
        async fetchPlan(){
            try {
                console.log(this.pageNumber);
                let result = await axios({
                    method: 'GET',
                    url: this.baseUrl+ '/plan',
                    params: {
                        page: this.pageNumber
                    }
                })
                this.PlanList = result.data
            } catch (error) {
                console.log(error);
            }
            
        },

        async fetchAllPlan(){
            try {
                let result = await axios({
                    method: 'GET',
                    url: this.baseUrl+ '/plan',
                })
                this.AllPlan = result.data
            } catch (error) {
                console.log(error);
            }
            
        },
        async fetchSpecifiedPlan(targetedId){
            try {
                let specified = await axios({
                    method:'GET',
                    url: this.baseUrl+ '/plan/' + targetedId
                })
                console.log('oooo');
                this.selectedPlan = specified.data
                this.productlist = (this.selectedPlan.Products).map((e)=>{
                    let product = {
                        id: e.id,
                        name: e.name,
                        image_url: e.image_url
                    }
                    return product
                })
            } catch (error) {
                if (error.name == 'AxiosError'){
                    this.router.push({name: 'not found'})
                }
                console.log(error);
            }
        },
        async changingSpecifiedPlan(targetedPlan){
            console.log('kena store');
            console.log(targetedPlan);
            this.router.push(`/detail-plan/${targetedPlan}`)
            // this.$router.push(`/detail-plan/${num}`)
            this.targetedId = targetedPlan
            console.log(this.targetedId);
            // let list = this.AllPlan.map((el)=>{
            //     return el.id
            // })
            // for (let i = 0; i < list.length; i++) {
            //     let key = list[i]
            //     if(i+1 == this.targetedId){
            //         this.listId[key] = 'selected'
            //     } else{
            //         this.listId[key] = ''
            //     } 
            // }
            await this.fetchSpecifiedPlan(this.targetedId)
        },
        async getMyPlan(){
            try {
                let result = await axios({
                    method: 'GET',
                    url: this.baseUrl+ '/orderItem',
                    headers: {
                        access_token : localStorage.getItem('access_token')
                    }
                })
                this.MyPlanList = result.data
            } catch (error) {
                console.log(error);
            }
        },
        async addMyPlan(targetedId){
            try {
                console.log('sampe ke store');
                let newAddedPlan = await axios({
                    method: 'POST',
                    url: this.baseUrl+ '/orderItem/' + targetedId,
                    headers: {
                        access_token : localStorage.getItem('access_token')
                    }
                })
                await this.getMyPlan()
            } catch (error) {
                console.log(error);
            }
        },
        async createOrder(){
            
        }
    

    },
})

export default {useProductStore}