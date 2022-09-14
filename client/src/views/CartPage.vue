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
            ...mapState(useProductStore, ['PlanList', 'MyPlanList', 'CheckOutItem']),
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
        },
        methods:{
            ...mapActions(useProductStore, ['getMyPlan', 'createOrder', 'inputOrderId']),
            async checkOut(){
                await this.createOrder(this.totalPrice)
                this.inputOrderId()
                
                this.totalPrice = 0
                let idOrder = this.CheckOutItem.id
                console.log(idOrder,'idorder');
                this.$router.push(`/invoice/${idOrder}`)
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
    
    <section class="mt-5">
        <div >
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
        </div>

        <div class=" ">
            <PrimaryButton msg='Check Out' @click="checkOut"/>
        </div>
    </section>
    </template>

    <style>
        #order-table{
            color: #274405;
        }
        .table>tbody>tr:nth-child(odd)>td, 
        .table>tbody>tr:nth-child(odd)>th {
            background-color: #27440585;
        }
        .total-max{
            font-size: large;
            font-style: italic;

        }
    </style>