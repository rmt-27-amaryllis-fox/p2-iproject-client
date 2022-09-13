<script>
import NavBar from '../components/NavBar.vue';
import PlanCard from '../components/PlanCard.vue';
import PrimaryButton from '../components/PrimaryButton.vue';


export default {
  components:{
    NavBar,
    PlanCard,
    PrimaryButton,
}
}
</script>

<template>
  <NavBar/>
  <main >
    <div class="d-flex justify-content-center mt-3  container">
      <img id="hero-image" class="opacity-75" style="width: 600px;" src="https://images.unsplash.com/photo-1592178036775-70c41f818c13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">
      <div class="centered">
        <h1 class="box">Plan Plenty Plant</h1>
        <PrimaryButton msg='Plan Now'/>
      </div>
    </div>
    <PlanCard/>
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
</style>
