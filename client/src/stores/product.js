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
        MyPlanList: [],
        CheckOutItem:{},
        CheckOutList:[],
        tokenPayment:'',
        invoiceNo:0
    }),
    getters: {

    },
    actions: {
        async fetchPlan(){
            try {
                // console.log(this.pageNumber);
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
                // console.log('sampe ke store');
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
        async delMyPlan(targetedId){
            try {
                let delWish = await axios({
                    method: 'DELETE',
                    url: this.baseUrl + '/orderItem/' + targetedId,
                    headers: {
                        access_token : localStorage.getItem('access_token')
                    }
                })
                await this.getMyPlan()
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: `ERROR`,
                    text: error.response.data.message
                })
            }
        },

        async upQty(targetedId, num){
            try {
                let updatedOrder = await axios({
                    method: 'PUT',
                    url: this.baseUrl+ '/orderItem/' + targetedId,
                    headers: {
                        access_token : localStorage.getItem('access_token')
                    },
                    params: {
                        quantity: num
                    }
                })
                await this.getMyPlan()
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: `ERROR`,
                    text: error.response.data.message
                }) 
            }
        },

        async createOrder(num){
            try {
                console.log('sampe store');
                console.log(num);
                let invoice = await axios({
                    method: 'POST',
                    url: this.baseUrl+ '/order',
                    params:{
                        totalPrice: num
                    },
                    headers: {
                        access_token : localStorage.getItem('access_token')
                    }
                })
                this.invoiceNo = invoice.id
                
            } catch (error) {
                console.log(error);
            }
        },

        async inputOrderId(){
            try {
                let result = await axios({
                    method: 'PATCH',
                    url: this.baseUrl+ '/orderItem',
                    headers: {
                        access_token : localStorage.getItem('access_token')
                    },
                    params: {
                        order: this.invoiceNo
                    }
                })
            } catch (error) {
                console.log(error);
            }
        },

        // async showInvoice(targetedId){
        //     try {
        //         let invoice = await axios({
        //             method: 'GET',
        //             url: this.baseUrl+ '/order/'+targetedId,
        //             headers: {
        //                 access_token : localStorage.getItem('access_token')
        //             }
        //         })
        //         this.CheckOutItem = invoice.Plans.map(list=>{
        //             let item = {
        //                 name:list.name,
        //                 price:list.price,
        //                 quantity:list.OrderItem.quantity,
        //                 priceSum:list.OrderItem.priceSum
        //             }
        //             return item
        //         })
        //     } catch (error) {
        //         console.log(error);
        //     }
        // },

        async payment(targetedId){
            try {
                let result = await axios({
                    method: "GET",
                    url: this.baseUrl + '/payment/'+ targetedId,
                    headers: {
                        access_token : localStorage.getItem('access_token')
                    }
                })
                this.tokenPayment = result.data.token_payment
            } catch (error) {
                console.log(error);
            }
        }
    

    },
})

export default {useProductStore}