<script>
import PrimaryButton from './PrimaryButton.vue'

export default{
    name: 'PlanCard',
    components:{
    productlist: [],
    price: 0,
    PrimaryButton
},
    props: ["el", "msg"],
    created() {
        this.price = this.el.price.toLocaleString('id-ID')
        this.productlist = (this.el.Products).map((e)=>{
            let product = {
                name: e.name,
                image_url: e.image_url
            }
            return product
        })
        // this.linkDetail = '/detailTransport/'+ this.el.id
    },
    methods:{
        buttonClick(targetedId){

        },
        toDetailPage(targetedId){

        },

    },
    computed: {

    }
}
</script>


<template>
    <div class="col-3 mt-3 ">

    <div class="card my-card ">
        <div class="container-fliud">
            <div class="wrapper row">
                <div class="preview col-md-6">
                    <div class="preview-pic tab-content">
                        <div class="tab-pane active">
                            <img :src=productlist[0].image_url style="width: 150px; min-height: 230px;" >
                        </div>
                    </div>
                </div>
                <div class="details col-md-6">
                    <h6 class="product-title">{{el.name}}</h6>
                    <li class="product-list" v-for="(el, i) in productlist" :key="i">{{el.name}}</li>

                    <PrimaryButton :msg="msg"/>
                </div>
            </div>
        </div>
        
        
    </div>
    </div>
</template>

<style>
    .my-card{
        background-color: #27440585;
        color: #274405;
    }
</style>