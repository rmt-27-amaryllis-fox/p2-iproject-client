<script>
import NavBar from '../components/NavBar.vue';
import FormAuth from '../components/FormAuth.vue';

export default{
    name: 'LoginPage',
    components:{
        NavBar,
        FormAuth
    }
}
</script>


<template>
    <NavBar/>
    <FormAuth/>
</template>