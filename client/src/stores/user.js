import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
    state : () => ({
        email : '',
        password : '',
        baseUrl : 'http://localhost:3000',
        isLoggedIn : false
    }),

    actions : {
        async login(){
            try {
                let {data} = await axios({
                    method : "POST",
                    url : this.baseUrl + '/user/login',
                    data : {
                        email : this.email,
                        password : this.password
                    }
                })

                this.isLoggedIn = true
                this.router.push('/')
                console.log(data)
                localStorage.access_token = data.access_token
            } catch (error) {
                console.log(error)
            }
        },

        logout(){
            localStorage.clear()
            this.isLoggedIn = false
            this.router.push('/login')
        }
    }
})
