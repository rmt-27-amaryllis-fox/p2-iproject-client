import { defineStore } from 'pinia'
import axios from 'axios'
import swal from 'sweetalert2'

export const useUserStore = defineStore('user', {
    state : () => ({
        email : '',
        password : '',
        // baseUrl : 'http://localhost:3000',
        baseUrl : 'https://cryptoverse-server.herokuapp.com',
        isLoggedIn : false,
        inLoginPage : false,
        newUser : {
            username : '',
            email : '',
            password : ''
        }
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
                localStorage.access_token = data.access_token

                swal.fire({
                    icon : 'success',
                    title : 'Success Login !'
                })
            } catch (error) {
                console.log(error)
                swal.fire({
                    icon : 'error',
                    title : 'Oops..',
                    text : error.response.data.message
                })
            }
        },

        logout(){
            localStorage.clear()
            this.isLoggedIn = false
            this.router.push('/login')
            swal.fire({
                icon : 'success',
                title : 'Success Logout !'
            })
        },

        moveToLogin(){
            this.router.push('/login')
            this.inLoginPage = true
        },

        moveToRegister(){
            this.router.push('/register')
            this.inLoginPage = true
        },

        moveToHome(){
            this.router.push('/')
            this.inLoginPage = false
        },

        async register(){
            try {
                await axios({
                    method : 'POST',
                    url : this.baseUrl + '/user/register',
                    data : {
                        username : this.newUser.username,
                        email : this.newUser.email,
                        password : this.newUser.password
                    }
                })

                swal.fire({
                    icon : 'success',
                    title : 'Success register !'
                })
                this.router.push('/login')
            } catch (error) {
                console.log(error)
                swal.fire({
                    icon : 'error',
                    title : 'Oops..',
                    text : error.response.data.message
                })
            }
        }
    }
})
