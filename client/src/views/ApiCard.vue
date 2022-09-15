<script>
import { mapActions, mapState } from "pinia";
import { useBaseStore } from "../stores/base";
export default {
  data() {
    return {
      selected: "",
    };
  },
  computed: {
    ...mapState(useBaseStore, ["page", "min_popularity", "disabled", "API"]),
  },
  methods: {
    ...mapActions(useBaseStore, ["popularity", "changePage", "fetchAPI"]),
    searchPopularity() {
      const value = {
        popularity: this.selected,
      };
      //   console.log(value);
      this.popularity(value);
    },
  },
  created() {
    console.log(this.fetchAPI());
  },
};
</script>

<template>
  <div>
    <form @click.prevent="searchPopularity">
      <p for="course" class="form-label">Looking By :</p>
      <select
        class="form-select"
        id="course"
        v-model="selected"
        style="width: 150px"
      >
        <option value="0" disabled>Select Popularity</option>
        <option value="Rare">Rare</option>
        <option value="Standard">Standard</option>
        <option value="Common">Common</option>
        <option value="Uncommon">Uncommon</option>
      </select>
      <button class="btn btn-primary" type="submit">Search</button>
    </form>
  </div>
  <div class="row">
    <div class="col-12 col-md-3 mt-3" v-for="el in API" :key="el.id">
      <div class="card">
        <img
          src="../assets/1905.i003.002.realistic bicycle parts.jpg"
          class="card-img-top"
        />
        <div class="card-body">
          <h5 class="card-title">ISO_BSD : {{ el.iso_bsd }}</h5>
          <p class="card-text">name: {{ el.name }}</p>
          <p class="card-text">desc: {{ el.description }}</p>
          <p class="card-text">popularity: {{ el.popularity }}</p>
          <div class="d-flex align-items-center justify-content-center"></div>
          <br />
          <div class="d-flex align-items-center justify-content-center"></div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <div class="d-flex justify-content-center">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <button
            class="page-link"
            href="#"
            @click.prevent="changePage(-1)"
            :disabled="page <= 1 ? true : false"
          >
            Previous
          </button>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">{{ page }}</a>
        </li>
        <li class="page-item">
          <button class="page-link" href="#" @click.prevent="changePage(+1)">
            Next
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>
