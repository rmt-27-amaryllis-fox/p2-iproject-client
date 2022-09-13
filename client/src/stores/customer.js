import { defineStore } from 'pinia'
import axios from "axios"

export const useCustomerStore = defineStore({
    id:'customer',
    state: () => ({ 
        baseUrl:'https://localhost:3000',
        isLogin: false,
        formRegistration: {},
        formLogin: {},
        regisStat: false,
    }),
    getters: {

    },
    actions: {
        async loggingIn(){
            try {
                let visitor = await axios ({
                    method: 'POST',
                    url: this.baseUrl + '/pub/login',
                    data: this.formLogin
                })
                localStorage.setItem('access_token', visitor.data.access_token)
                this.isLogin = true
                this.getDataCustomer()
                // console.log('sukses login');
            } catch (error) {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: `ERROR`,
                    text: error.response.data.message
                })
                this.isLogin = false
            }
        },
        async signingUp(){
            try {
                let newUser = await axios ({
                    method: 'POST',
                    url: this.baseUrl + '/pub/register',
                    data: this.formRegistration
                })
                this.regisStat= true
                // console.log(newUser);
            } catch (error) {
                console.log(error);
                this.regisStat= false
                Swal.fire({
                    icon: "error",
                    title: `ERROR`,
                    text: error.response.data.message
                })
            }
        },
    },
})

export default {useCustomerStore}