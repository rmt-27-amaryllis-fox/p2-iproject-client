<script>
import { mapWritableState, mapActions } from 'pinia';
import { useCounterStore } from "../stores/counter"

    export default {
        data(){
            return {
                register_username: "",
                register_email: "",
                register_password: "",

            }
        },
        // components: {
        //     LoginForm
        // },
        methods: {
            ...mapActions(useCounterStore, ["registerHandler"]),
            registerHandlerComponent(){
                this.registerHandler({
                    username: this.register_username,
                    email: this.register_email,
                    password: this.register_password,
                });
            }
        }
    }
</script>

<template>
<div class="flex-row d-flex align-items-center justify-content-around" style="width:100%">


    <div class="flex-col" style="width: 400px">
        <h1 class="p-2 bg-secondary text-white text-center" style="border-radius:10px">Register Form</h1>
        <form id="login-form" @submit.prevent="registerHandlerComponent" >
            <div class="mb-3">
            <label for="exampleUsername" class="form-label">Username</label>
            <input type="text" class="form-control" id="exampleUsername" aria-describedby="emailHelp" placeholder="ex: johndoe" v-model="register_username">
            </div>
            <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="someone@mail.com" v-model="register_email">
            </div>
            <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="*****" v-model="register_password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>        
    </div> 
    
    <div class="flex-col align-self-center">
        <img src="https://images.metmuseum.org/CRDImages/ad/web-large/DT4656.jpg">
    </div>
</div>
</template>