<script>
import NavBar from '../components/NavBar.vue';
import FormAuth from '../components/FormAuth.vue';
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useCustomerStore } from '../stores/customer.js';

export default{
    name: 'RegisterPage',
    components:{
        NavBar,
        FormAuth
    },
    computed:{
    ...mapWritableState(useCustomerStore, ['currentPage'])
    },
    created(){
        this.currentPage = 'register'
    }
    
}
</script>


<template>
    <NavBar/>
    <FormAuth action="Register"/>
</template>