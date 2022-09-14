<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useCustomerStore } from '../stores/customer';
export default{
    name: 'NavBar',
    components:{

    },
    computed:{
        ...mapWritableState(useCustomerStore, ['isLogin', 'currentPage']),
    },
    methods:{
        ...mapActions(useCustomerStore,['getDataCustomer']),
        loggingOut(){
            localStorage.clear()
            this.$router.push('login')
        }
    },
}
</script>


<template>
<nav class="navbar navbar-expand-lg" >
    <div class="container-fluid">
        <div >
            
            <router-link class="navbar-brand fs-2" to="/"> Plan T </router-link>
            
        </div>
        
        <div class="flex">
            <ul class="navbar-nav">
                <div v-if="currentPage == 'login'" >
                    <li class="nav-item"><router-link id="navigate" class="nav-link active" to="/register">Register</router-link></li>
                </div>
                <div  v-else-if="currentPage == 'register' || isLogin== false" >
                    <li class="nav-item"><router-link id="navigate" class=" nav-link active" to="/login">Log in</router-link></li>
                </div>
                <div style="display:flex" v-else >
                    <li class="nav-item" v-if="currentPage=='home'||currentPage=='detail-plan'"><router-link id="navigate" class="nav-link active"  to="/CartPage">MyPlan</router-link></li>

                    <li class="nav-item" v-else-if="currentPage=='CartPage'||currentPage=='detailTransport'"><router-link id="navigate" class="navigate nav-link active" to="/">Home</router-link></li>

                    <li class="nav-item" @click="loggingOut"><div style="cursor:pointer; margin-left: 30px;" id="navigate" class="nav-link active">Log out</div>
                        </li>
                </div>
            </ul>
        </div>
    </div>
</nav>
</template>

<style>
    nav{
        background-color: #274405;
    }
    .navbar-brand{
        color: #7FB77E;
        font-family: 'Lobster';
        text-shadow: 0.5px  0.5px 1px black;
    }
    #navigate{
        color: #7FB77E;
    }
</style>