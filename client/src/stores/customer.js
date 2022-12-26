import { defineStore } from 'pinia'
import axios from "axios"

export const useCustomerStore = defineStore({
    id:'customer',
    state: () => ({ 
        // baseUrl:'http://localhost:3000',
        baseUrl:'https://planplentyplant.herokuapp.com',
        isLogin: false,
        formRegistration: {},
        formLogin: {},
        regisStat: false,
        currentPage: 'home'
    }),
    getters: {

    },
    actions: {
        async loggingIn(){
            try {
                let visitor = await axios ({
                    method: 'POST',
                    url: this.baseUrl + '/login',
                    data: this.formLogin
                })
                localStorage.setItem('access_token', visitor.data.access_token)
                this.isLogin = true
                this.currentPage= 'home'
            } catch (error) {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: `ERROR`,
                    text: error.response.data.message
                })
                this.isLogin = false
                this.currentPage = 'login'
            }
        },
        async signingUp(){
            try {
                let newUser = await axios ({
                    method: 'POST',
                    url: this.baseUrl + '/register',
                    data: this.formRegistration
                })
                this.regisStat= true
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