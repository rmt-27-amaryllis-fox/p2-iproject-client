<script>
import NavBar from '../components/NavBar.vue';
import PlanCard from '../components/PlanCard.vue';
import PrimaryButton from '../components/PrimaryButton.vue';
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useProductStore } from '../stores/product';
import { useCustomerStore } from '../stores/customer';

export default {
  components:{
    NavBar,
    PlanCard,
    PrimaryButton,
  },
  computed:{
    ...mapState(useProductStore, ['PlanList']),
    ...mapWritableState(useProductStore, ['pageNumber']),
    ...mapWritableState(useCustomerStore, ['currentPage'])
  },
  methods: {
    ...mapActions(useProductStore, ['fetchPlan']),
    changePageNum(num){
      if(num == -1 && this.pageNumber == 0){
        this.pageNumber = 0
      } else {
        this.pageNumber += num
      }
      this.fetchPlan()
    },
    localfunc(){
      this.$router.push('/detail-plan/1')
    }
  },
  data(){
    return{
      // isActive: false,
      // pageOne:'',
      // pageTwo:'',
      // pageThree:'',
    }
  },
  created(){
    this.fetchPlan()
    this.currentPage = 'home'
  }
  
  
}
</script>

<template>
  <NavBar/>
  <main >
    <div class="d-flex justify-content-center mt-3  container">
      <img id="hero-image" class="opacity-75" style="width: 600px; height: 350px;" src="https://images.unsplash.com/photo-1592178036775-70c41f818c13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">
      <div class="centered">
        <h1 class="box">Plan Plenty Plant</h1>
        <PrimaryButton msg='Plan Now' @click="localfunc"/>
      </div>
    </div>
    <div class="row">
      <h1 class="swipe col-1 mt-5 ms-auto" @click="changePageNum(-1)">&laquo;</h1>
      <PlanCard msg="See Detail" v-for="el in PlanList" :key="el.id" :el="el" />
      <div style="display: flex; align-items:center; justify-content: center" class="col-9" v-show="PlanList.length==0">
          <img src="https://blog.myorbit.id/_default_upload_bucket/image-thumb__320__article/error%20404%20not%20found%20website_1.webp" style="width: 350px;" alt="">
        </div>
      <h1 class="swipe col-1 mt-5 ms-auto" @click="changePageNum(1)">&raquo;</h1>
    </div>
  </main>
</template>

<style>
  #hero-image{
    border: 2px #7FB77E;
    border-radius: 5px;
  }

  .container {
    position: relative;
    text-align: center;
  }

  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #27440585;
    padding: 10px;
    border-radius: 5px;
  }

  .box{
    color: #7FB77E;
    font-family: 'Lobster';
    border-radius: 5px;
    text-shadow: 1px  1px 2px black;
  }

  .swipe{
    font-size: 5rem;
    cursor: pointer;
  }
  
</style>
