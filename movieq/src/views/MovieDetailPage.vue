<template>
  <!-- DETAIL PAGE -->
  <div class="container mt-3">
    <!-- <h1 class="text-center">DETAIL PAGE OF {{ product.name }}</h1> -->
    <div class="row mt-3">
      <div class="d-flex justify-content-center">
        <div class="card">
          <img :src="imageUrl + movie.backdrop_path" class="card-img-top" style="width: 800px" />
          <div class="card-body">
            <h4 class="card-title">{{movie.title}}</h4>
            <h5>Release date: {{movie.release_date}}
            </h5>
            <br />
            <span>Overview {{movie.overview}}</span><br />
            <span></span><br />
            <span></span><br />
            <p></p> <br />
        
            <br />
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useProjectStore } from '../stores/store';

  export default {
    methods: {
      ...mapActions(useProjectStore, ['movieById'])
    },
    computed: {
      ...mapState(useProjectStore, ['imageUrl','movie'])
    },
    created(){
      this.movieById(this.$route.params.id)
    }
  }
</script>