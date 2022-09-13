<script>
import PrimaryButton from './PrimaryButton.vue';
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useCustomerStore } from '../stores/customer';
export default{
    name: 'FormAuth',
    components:{
        PrimaryButton
    },
    props:['action'],
    data(){
        return {
            formInput:{
                username:'',
                email:'',
                password:'',
                address:'',
            }
        }
    },
    methods: {
        ...mapActions(useCustomerStore, ['getDataCustomer', 'loggingIn', 'signingUp']),
        async submittingForm(){
            try {
                console.log('dari lokal');
                console.log(this.formInput);
                if(this.action =='Register'){
                    this.formRegistration = this.formInput
                    console.log(this.formRegistration);
                    await this.signingUp()
                    if(this.regisStat){
                        this.$router.push('/login')
                    }else {
                        this.$router.push('/register')
                    }
                }else {
                    console.log(this.formLogin );
                    this.formLogin = this.formInput
                    await this.loggingIn()
                    if(this.isLogin){
                        this.$router.push('/')
                    }else {
                        this.$router.push('/login')
                    }
                }
            } catch (error) {
                console.log(error);
            }
            
        }
    },
    computed:{
        ...mapWritableState(useCustomerStore, ['formRegistration', 'formLogin', 'regisStat', 'isLogin'] )
    }
}
</script>


<template>
<section class="container" style="margin-top: 30px; padding-top: 30px; ">

<div class="row" >
    <div  class="col-12 text-center" v-show="action=='Register'">
        <h1 class="h3 mb-3 ">Register Now!</h1>
        <p>It's free</p>
    </div>
    <div class="col-12 text-center" v-show="action=='Login'">
        <h1 class="h3 mb-3 ">Login Now!</h1>
        <p>Welcome!</p>     
    </div>
    
    <div style="display:flex;margin-top: 30px; padding-top: 30px; border-radius: 30px;" class="row " id="box-form">
        <div style="display:flex; justify-content: center; align-items: center;">
            <form @submit.prevent="submittingForm">
                <div class="mb-3" v-show="action=='Register'">
                    <div >
                        <label for="register-username">Username</label>
                        <label class="text-danger text-end fw-bold">*</label> 
                    </div>
                    <input class="form-control" v-model="formInput.username" type="text" placeholder="Enter username" id="register-username" >
                </div>

                <div class="mb-3">
                    <div >
                        <label for="register-email">Email</label>
                        <label class="text-danger text-end fw-bold">*</label> 
                    </div>
                    <input  class="form-control" v-model="formInput.email" type="email" placeholder="Enter email" id="register-email">
                </div>

                <div class="mb-3">
                    <div>
                        <label for="register-password">Password</label>
                        <label class="text-danger text-end fw-bold">*</label> 
                    </div>
                    <input class="form-control" v-model="formInput.password" type="password" placeholder="Enter password" id="register-password">
                </div>

                <div class="mb-3" v-show="action=='Register'">
                    <div>
                        <label for="register-address">Address</label>  
                    </div>
                    <textarea  class="form-control" v-model="formInput.address" type="text" placeholder="Enter your address" id="register-address" name="register-address"></textarea>
                </div>
                <br>
                <div>
                    <PrimaryButton :msg=action />
                </div>
                
            </form>
        </div>
        
        <div style="display:flex; flex-direction: column; margin-top: 30px;" v-show="action=='Login'">
            <div style="display:flex; flex-direction: column;justify-content: center; align-items: center; ">
                <br>
                <p style="display:flex; ;justify-content: center; align-items: center; margin-right: 50px;">You still can access our Transportation without Logging in  <router-link style="text-decoration: none; color: black; " to="/">  &nbsp See Here</router-link></p>

                <p style="display:flex; ;justify-content: center; align-items: center; margin-right: 50px;">New here?
                    <router-link style="text-decoration: none; color: black; " to="/register"> &nbsp Register</router-link>
                </p>
            </div>
        </div>
        
        <div style="display:flex; flex-direction: column; margin-top: 30px;" v-show="action=='Register'" id="register-footer">
            <p style="display:flex; ;justify-content: center; align-items: center; margin-right: 50px;">You still can access our Transportation without Logging in  <router-link style="text-decoration: none; color: black; " to="/"> &nbsp See Here</router-link></p>

            <p style="display:flex; ;justify-content: center; align-items: center; margin-right: 50px;">Already have an account? 
                <router-link style="text-decoration: none; color: black; " to="/login"> &nbsp Log in</router-link>
            </p>
        </div>

    </div>

</div>
</section>
</template>

<style>
    #box-form{
        background-color: #27440585;
        color: #274405;
        border-radius: 5px;
    }
</style>