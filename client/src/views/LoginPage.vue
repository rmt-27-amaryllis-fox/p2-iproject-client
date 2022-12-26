<script>
import NavBar from '../components/NavBar.vue';
import FormAuth from '../components/FormAuth.vue';
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useCustomerStore } from '../stores/customer';

export default{
    name: 'LoginPage',
    components:{
        NavBar,
        FormAuth
    },
    computed:{
        ...mapWritableState(useCustomerStore, ['currentPage'])
    },
    created(){
        this.currentPage = 'login'
    }
}
</script>


<template>
    <NavBar/>
    <FormAuth action="Login"/>
</template>