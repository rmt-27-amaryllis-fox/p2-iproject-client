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
                this.selectedPlan = specified.data
            } catch (error) {
                if (error.name == 'AxiosError'){
                    this.router.push({name: 'not found'})
                }
                console.log(error);
            }
        },
        
        
    },
})

export default {useProductStore}