<template>
  <section class="movie-detail">
    <div class="title">
      <h1>Details</h1>
    </div>
    <div class="detail-card">
      <div class="detail-card-img">
        <img :src="imageUrl + movie.poster_path" alt="">
      </div>
      <div class="detail-card-body">
        <h2>{{movie.title}}</h2>
        <p class="detail-genre">Release Date: {{movie.release_date}}</p>
        <!-- <p class="detail-author">Author: {{movie.User.username}}</p> -->
        <p class="detail-rating">Rating: {{movie.rating}}</p>
        <p class="detail-synopsis"><span>Overvies : <br></span>{{movie.overview}}</p>
        <iframe :src="movie.trailerUrl" frameborder="0"></iframe>
      </div>
    </div>
  </section>
  <!-- <div class="container mt-3">
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
  </div> -->
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