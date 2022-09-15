<script>
import CardHome from "./CardHome.vue";
import { mapActions, mapState, mapWritableState } from "pinia";
import { useInventoriesStore } from "../stores/inventories";
import Swal from "sweetalert2";
export default {
  components: {
    CardHome,
  },
  methods: {
    ...mapActions(useInventoriesStore, ["getInventories"]),
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
        this.getInventories();
      }
    },
    previousPage() {
      if (this.currentPage > 0) {
        this.currentPage -= 1;
        this.getInventories();
      }
    },
  },
  computed: {
    ...mapState(useInventoriesStore, ["inventories", "filterCategories"]),
    ...mapWritableState(useInventoriesStore, [
      "filter1",
      "currentPage",
      "totalItems",
      "totalPages",
      "loading",
    ]),
  },

  data() {
    return {
      filter: "",
    };
  },
  created() {
    this.getInventories();
  },
};
</script>
<template>
  <div
    style="margin-bottom: 5vh"
    class="container-fluid home shadow rounded mb-2 mt-5"
  >
    <div class="mt-5 mb-2 mt-2 filter">
      <select
        v-model="filter1"
        class="form-select"
        mb-3
        aria-label="Default select example"
      >
        <option value="" selected disabled>Filter By Categories</option>
        <option value="">All</option>
        <option value="1">Pakaian</option>
        <option value="2">Warehouse</option>
      </select>
    </div>
    <div style="margin-bottom: 5vh" class="row mt-3">
      <div
        id="carouselExampleDark"
        class="carousel rounded carousel-dark slide"
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
            <div class="title carousel-caption d-none d-md-block">
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
            <div class="carousel-caption title d-none d-md-block">
              <h5>LAKSANA BARU SWALAYAN</h5>
              <p>Senyum salam sapa santun</p>
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

      <!-- CardHome -->
      <div v-if="!loading" class="row mt-3">
        <CardHome v-for="el in filterCategories" :key="el.id" :data="el" />
      </div>

      <div
        v-else-if="loading"
        class="d-flex align-items-center justify-content-center"
      >
        <img
          style="width: 500px; height: 500px"
          src="https://c.tenor.com/6gHLhmwO87sAAAAi/gg.gif"
          alt=""
        />
      </div>

      <div class="container d-flex text-align-center justify-content-center">
        <nav aria-label="Page navigation example" class="mt-5">
          <ul class="pagination">
            <li class="page-item">
              <a @click="previousPage" class="page-link" href="#">Previous</a>
            </li>

            <li class="page-item">
              <a class="page-link">{{ currentPage }}</a>
            </li>

            <li class="page-item">
              <a @click="nextPage" class="page-link" href="#">Next</a>
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
<style>
.home {
  margin-top: 200px;
}
.title {
  font-family: "Roboto";
}
.title h5 {
  color: white;
  font-size: 3em;
  -webkit-text-stroke: 1px black;
}
.title p {
  color: white;
  font-size: 2em;
  -webkit-text-stroke: 1px black;
}
</style>
