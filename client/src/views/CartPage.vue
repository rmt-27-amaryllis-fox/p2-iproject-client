<script>
    import NavBar from '../components/NavBar.vue';
    import { mapActions, mapState, mapWritableState } from 'pinia'
    import { useProductStore } from '../stores/product';
    import { useCustomerStore } from '../stores/customer';
    import OrderItems from '../components/OrderItems.vue';
    import PrimaryButton from '../components/PrimaryButton.vue';
    
    export default{
        name: 'CartPage',
        components:{
            NavBar,
            OrderItems,
            PrimaryButton
        },
        computed:{
            ...mapState(useProductStore, ['PlanList', 'MyPlanList', 'CheckOutList']),
            ...mapWritableState(useProductStore, ['pageNumber']),
            ...mapWritableState(useCustomerStore, ['currentPage'])
        },
        async created(){
            this.totalPrice = 0
            this.currentPage = 'CartPage'
            await this.getMyPlan()
            this.priceList = this.MyPlanList.map((el)=>{
                this.totalPrice +=el.priceSum
                return el.priceSum
            })
            console.log(this.MyPlanList);
            console.log(this.totalPrice);
        },
        methods:{
            ...mapActions(useProductStore, ['getMyPlan', 'createOrder', 'inputOrderId']),
            async checkOut(){
                await this.createOrder(this.totalPrice)
                
                this.totalPrice = 0
                let idOrder = this.CheckOutList.id
                console.log(idOrder,'idorder');
                this.$router.push(`/invoice/${idOrder}`)
            },
            async planNow(){
                this.$router.push('/detail-plan/1')
            }
        },
        data(){
            return{
                totalPrice:0,
                priceList:[]
            }
        }
    }
    </script>
    
    
    <template>
    <NavBar/>
    
    <!-- <section class="mt-5"> -->
        <!-- <div >
            <table id="order-items" class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">PlanId</th>
                        <th scope="col">Plan Name</th>
                        <th scope="col">QTY</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <OrderItems v-for="el in MyPlanList" :key="el.id" :el="el"/>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><span class="total-max">{{totalPrice}}</span></td>
                    </tr>
                </tbody>
            </table>
        </div> -->
        <div v-if="MyPlanList.length ==0">
            <header id="cart-header">My Plan: It's empty. Select your Plan now</header>
            <div class="pn-button">
            <PrimaryButton msg='PLAN NOW' @click="planNow"/>
        </div>
        </div>
        <div v-show="MyPlanList.length !=0">
        <header id="cart-header">My Plan: CheckOut to see the recommendation</header>
        <section style="margin-left: 300px;" class="col-lg-7 mt-5">
            <div class="card">
			<div class="container-fliud">
				<div class="row mt-1 mb-3" v-for="el in MyPlanList" :key="el.id" >
					<div style="margin-left: 50px;" class="details col-md-6">
                        <hr>
						<h4 v-if="el" class="product-title">{{el.Plan.name}}</h4>
						
						<h6 class="price">Price: <span v-if="el">Rp. {{el.priceSum}}</span></h6>
						
                        <h6 class="quantity">Quantity: <span v-if="el">{{el.quantity}}</span></h6>

                        <hr>                  
					</div>
				</div>
			</div>
		</div>
        </section>
        <div id="total-purchase">
            Total: Rp {{totalPrice}}
        </div>
        <div class="co-button">
            <PrimaryButton msg='Check Out' @click="checkOut"/>
        </div>
        </div>
    <!-- </section> -->
    </template>

    <style>
        /* #order-table{
            color: #274405;
        }
        .table>tbody>tr:nth-child(odd)>td, 
        .table>tbody>tr:nth-child(odd)>th {
            background-color: #27440585;
        }
        .total-max{
            font-size: large;
            font-style: italic;

        } */
        .co-button{
            margin-left: 300px;
        }
        .pn-button{
            margin-left: 400px;
        }
        #cart-header{
            margin: 30px 400px;
            font-size: 2rem;
        }

        #total-purchase{
            margin: 10px 300px;
            font-size: 1.5rem;
        }
    </style>