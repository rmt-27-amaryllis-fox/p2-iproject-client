<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useProductStore } from '../stores/product';
import { useCustomerStore } from '../stores/customer'
    
export default{
    name: 'DetailPage',
    components:{

    },
    data(){
        return{
            targetedId:0,
            idSelected:'',
            listId:{},
        }
    },
    async created(){
        this.targetedId = this.$route.params.planId
        await this.fetchAllPlan()
        let list = this.AllPlan.map((el)=>{
            return el.id
        })
        for (let i = 0; i < list.length; i++) {
            let key = list[i]
            if(i+1 == this.targetedId){
                this.listId[key] = 'selected'
            } else{
                this.listId[key] = ''
            }
            
        }
        // console.log(this.listId);
        this.currentPage = 'detail-plan'
    },
    methods: {
        ...mapActions(useProductStore, ['fetchAllPlan', 'fetchSpecifiedPlan']),
        async changeDetail(num){
            this.$router.push(`/detail-plan/${num}`)
            this.targetedId = num
            let list = this.AllPlan.map((el)=>{
                return el.id
            })
            for (let i = 0; i < list.length; i++) {
                let key = list[i]
                if(i+1 == this.targetedId){
                    this.listId[key] = 'selected'
                } else{
                    this.listId[key] = ''
                } 
            }
            
        }

    },
    computed:{
        ...mapState(useProductStore, ['AllPlan']),
        ...mapWritableState(useCustomerStore, ['currentPage'])
    },
}
</script>


<template>
<div class="col-md-3 col-lg-3 d-md-block sidebar collapse mt-5" id="sidebar-menu">
        <div class="position-sticky pt-3">
            <div>
            <h5 class="icon material-symbols-outlined me-2">Choose Your Plan:</h5>
            <br>
            <ul class="nav flex-column mb-2">
                <div @click="changeDetail(el.id)" v-for="el in AllPlan" :key="el.id"><li class="nav-item" :id="listId[el.id]">{{el.name}}</li></div>
            </ul>
        </div>
        </div>
    </div>

</template>

<style>
    #sidebar-menu{
        background-color: #27440585;
        color: #274405;
        border-radius: 0 5px 5px 0 ;
    }
    #selected{
        background-color: #dafcb480;
        padding: 5px 0 5px 15px;
        border-radius: 5px;
    }
    .nav-item{
        cursor: pointer;
    }
</style>