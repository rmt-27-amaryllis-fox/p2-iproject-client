<template>
  <div class="container mt-3">
    <div class="row mt-3">
      <card v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
    <div class="container d-flex text-align-center justify-content-center">
      <nav aria-label="Page navigation example" class="mt-5">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" style="color: #ff9900" href="#">Previous</a>
          </li>

          <li class="page-item">
            <a class="page-link" style="color: #ff9900">1</a>
          </li>

          <li class="page-item" >
            <a class="page-link" style="color: #ff9900" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import card from "../components/movieCard.vue"
import { mapActions, mapWritableState } from 'pinia';
import { useProjectStore } from '../stores/store';

export default {
  components: {
    card
  },
  methods: {
    ...mapActions(useProjectStore, ['fetchMovies'])
  },
  computed: {
    ...mapWritableState(useProjectStore, ['movies','page'])
  },
  created() {
    this.fetchMovies()
  }
}
</script>