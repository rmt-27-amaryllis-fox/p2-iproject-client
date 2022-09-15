<script>
import NavBar from '../components/NavBar.vue';
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useProductStore } from '../stores/product';
import { useCustomerStore } from '../stores/customer';
import PrimaryButton from '../components/PrimaryButton.vue';

export default{
    name: 'Invoice',
    components:{
    NavBar,
    PrimaryButton
},
    computed:{
        ...mapState(useProductStore, ['CheckOutItem', 'CheckOutList','tokenPayment', 'recommendationList']),
        ...mapWritableState(useCustomerStore, ['currentPage'])
    },
    methods:{
        ...mapActions(useProductStore,['payment','showInvoice','recommendation']),
        pay(){
            console.log(this.OrderId,);
            this.payment(this.OrderId).then(()=>{
                console.log(this.tokenPayment);
                window.snap.pay(this.tokenPayment, {
                    onSuccess: function(result){
                        this.$router.push('/'); 
                    }
                })
            })
        },
        getRecommendation(){
            let plantName = this.inputPlant
            this.recommendation(plantName)
        }
    },
    async created(){
        this.OrderId = this.$route.params.id
        await this.showInvoice(this.OrderId)
        this.totalPurchase = 0
        let pricelist = this.CheckOutItem.map(e=>e.priceSum)

        for (let i = 0; i < pricelist.length; i++) {
            this.totalPurchase += pricelist[i]
        }
        this.totalPurchase = this.totalPurchase.toLocaleString('id-ID')
        // console.log(this.totalPurchase);
        // console.log(this.CheckOutItem);
        // console.log(this.CheckOutList);
        // let plantList = this.CheckOutItem.map((e)=>{

        // })

    },
    data(){
        return{
            OrderId:0,
            recommendation:[],
            totalPurchase:0,
            inputPlant:''
        }
    }
}
</script>


<template>
    <NavBar/>
    <!-- <div v-if="CheckOutItem[0]" >{{CheckOutItem[0].name}}</div> -->
    <header id="invoice-header">THANK YOU FOR YOUR PURCHASE</header>
    <section style="margin-left: 300px;" class="col-lg-7 mt-5">
            <div class="card">
			<div class="container-fliud">
				<div class="row mt-1 mb-3" v-for="(el,i) in CheckOutItem" :key="i">
					<div style="margin-left: 50px;" class="details col-md-6">
                        <hr>
						<h4 v-if="el" class="product-title">{{el.name}}</h4>
						
						<h6 class="price">Price: <span v-if="CheckOutItem[0]">Rp. {{el.priceSum}}</span></h6>
						
                        <h6 class="quantity">Quantity: <span v-if="el">{{el.quantity}}</span></h6>

                        <hr>                  
					</div>
				</div>
			</div>
		</div>
        </section>
        <div id="total-purchase">
            Total: Rp {{totalPurchase}}
        </div>
    <button @click="pay" id="pay-button">Pay Now</button>
    <div style="margin-left: 300px; margin-top: 30px;">
        <h4>Get Recommendation:</h4>
        <form @submit.prevent="getRecommendation">
            <input id="input-rec" type="text" v-model="inputPlant" placeholder="common name, without space. ex:'englishivy' ">
            <PrimaryButton msg="Submit" style="margin-left:20px"/>
        </form>
        <div v-if="recommendationList.length != 0">
            <h4>Recommendation</h4>
            <p>Latin Name: {{recommendationList[0].latin}}</p>
            <p>Category: {{recommendationList[0].category}}</p>
            <p>Origin: {{recommendationList[0].origin}}</p>
            <p>Temperature Max (in celc): {{recommendationList[0].tempmax.celsius}}</p>
            <p>Temperature Min (in celc): {{recommendationList[0].tempmin.celsius}}</p>
            <p>Light: {{recommendationList[0].ideallight}}</p>
            <p>Watering: (in celc): {{recommendationList[0].watering}}</p>
        </div>
    </div>
</template>

<style>
    #pay-button{
        margin-left: 300px;
        margin-top: 10px;
        border: 0;
        padding: 5px 10px;
        border-radius: 5px;
        background-color: #7FB77E;
    }

    #invoice-header{
        margin: 30px 400px;
        font-size: 2rem;
    }

    #total-purchase{
        margin: 10px 300px;
        font-size: 1.5rem;
    }

    #input-rec{
        width: 500px;
    }
</style>