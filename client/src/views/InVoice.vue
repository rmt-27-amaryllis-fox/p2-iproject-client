<script>
import NavBar from '../components/NavBar.vue';
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useProductStore } from '../stores/product';
import { useCustomerStore } from '../stores/customer';
export default{
    name: 'Invoice',
    components:{
        NavBar
    },
    computed:{
        ...mapState(useProductStore, ['CheckOutItem', 'CheckOutList','tokenPayment']),
        ...mapWritableState(useCustomerStore, ['currentPage'])
    },
    methods:{
        ...mapActions(useProductStore,['payment']),
        pay(){
            console.log(this.OrderId);
            console.log(this.tokenPayment);
            this.payment(this.OrderId).then(()=>{
                window.snap.pay(this.tokenPayment, {
                    onSuccess: function(result){
                        this.$router.push('/'); 
                    }
                })
            })
        }
    },
    created(){
        this.OrderId = this.$route.params.id
        // this.showInvoice()
    },
    data(){
        return{
            OrderId:0
        }
    }
}
</script>


<template>
    <NavBar/>
    <button @click="pay" id="pay-button">Pay!</button>
</template>