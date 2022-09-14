<script>
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useProductStore } from '../stores/product';
import { useCustomerStore } from '../stores/customer'

export default{
    name: 'DetailPage',
    components:{
    NavBar,
    SideBar
},
    data(){
        return{
            targetedId:0,
            pricing:0,
            productlist: [],
        }
    },
    async created(){
        this.targetedId = this.$route.params.planId
        await this.fetchSpecifiedPlan(this.targetedId)
        this.pricing = this.selectedPlan.price.toLocaleString('id-ID')
        this.productlist = (this.selectedPlan.Products).map((e)=>{
            let product = {
                name: e.name,
                image_url: e.image_url
            }
            return product
        })
    },
    methods:{
        ...mapActions(useProductStore, ['fetchSpecifiedPlan']),
        toDetail(){

        }
    },
    computed:{
        ...mapState(useProductStore, ['selectedPlan']),
        ...mapWritableState(useCustomerStore, ['currentPage'])
    }
}
</script>


<template>
<NavBar/>
<main class="container-fluid" id="detail-section">
      <div class="row">
        <SideBar/>
        <!-- <section style="margin-left: 200px;" class="col-lg-4 mt-5
         detail">
            <div class="row">
                <div class="card">
                    <img style="max-height: 500px;" :src="selectedPlan.Products[0].image_url" >
                    <div class="card-body">
                        <h5 class="card-title">{{selectedPlan.name}}</h5>
                        <p class="card-text">{{selectedPlan.description}}</p>
                        <p class="card-text">Rp. {{pricing}}</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="col-lg-4 mt-5
         detail">
            <div>
                hftjjy
            </div>
        </section> -->
        <section style="margin-left: 50px;" class="col-lg-8 mt-5">
            <div class="card">
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img :src=selectedPlan.Products[0].image_url style="width:400px" /></div>
						</div>
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">{{selectedPlan.name}}</h3>
						<p class="product-description">{{selectedPlan.description}}</p>
						<h6 class="price">Current Price: <span>Rp. {{pricing}}</span><button class="butonDetail">add to MyPlan</button></h6>
						<h6 class="price">Package: </h6>

						<h6 class="listpro" v-for="(e, i) in productlist" :key="i">
                            <li >
                                {{e.name}}
                                 
                            </li>
                            <img :src=e.image_url style="width:60px; ">
                            <button @click="toDetail" class="butonDetail">buy ala carte</button>
                            <br>
                            <br>
                        </h6>
                        
					</div>
				</div>
			</div>
		</div>
        </section>
        
    </div>
</main>
</template>

<style>
    .butonDetail{
        margin-left: 50px;
        border: 0;
        padding: 5px;
        border-radius: 5px;
        background-color: #7FB77E;
    }
</style>