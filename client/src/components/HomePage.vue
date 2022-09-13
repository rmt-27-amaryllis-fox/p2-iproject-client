<script>
import CardHome from "./CardHome.vue";
import { mapActions, mapState } from "pinia";
import { useInventoriesStore } from "../stores/inventories";
export default {
  components: {
    CardHome,
  },
  methods: {},
  computed: {
    ...mapState(useInventoriesStore, ["inventories"]),
  },
};
</script>
<template>
  <div class="container shadow mt-3">
    <div class="row mt-3">
      <div
        id="carouselExampleDark"
        class="carousel carousel-primary slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img
              src="https://radarbanyumas.disway.id/upload/2019/09/Karyawan-LB-Swalayan-Berkostum-Wayang.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>LAKSANA BARU SWALAYAN</h5>
              <p>Senyum salam sapa santun</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://pbs.twimg.com/media/DtEsUmoVAAAscVA?format=jpg&name=4096x4096"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="d-flex justify-content-center">
        <h4>Home Page</h4>
      </div>
      <!-- CardHome -->
      <CardHome v-for="el in inventories" :key="el.id" :data="el" />
      <div class="container d-flex text-align-center justify-content-center">
        <nav aria-label="Page navigation example" class="mt-5">
          <ul class="pagination">
            <li @click="previousPage" class="page-item">
              <a class="page-link" href="#">Previous</a>
            </li>

            <li class="page-item">
              <a class="page-link">{{ currentPage }}</a>
            </li>

            <li @click="nextPage" class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
            <li class="page-item">
              <a class="page-link">{{ totalPages }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
