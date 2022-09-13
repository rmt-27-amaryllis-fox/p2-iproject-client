<template>
  <div class="container">
    <div
      class="container shadow-sm p-3 mb-5 rounded width-5 mt-5 mb-1"
      style="background: transparent"
    >
      <h1 class="text-center text-dark display-1 font-weight-bold">
        ANIMEDORO
      </h1>
    </div>
    <h5 class="text-center text-light"></h5>
    <div class="row ml-5 mt-5">
      <div
        v-for="(e, i) in dataAnime"
        :key="i"
        class="card text-white bg-dark mt-5 mx-auto"
        style="width: 18rem"
      >
        <img
          class="card-img-top mt-4 shadow p-3 mb-3 bg-body rounded"
          :src="e.images.jpg.large_image_url"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title text-center">{{ e.title }}</h5>
          <p class="card-text text-center">{{ e.title_japanese }}</p>
          <p class="card-text text-center">Released Year: {{ e.year }}</p>
          <a
            :href="e.trailer.url"
            target="”_blank”"
            class="btn btn-primary mt-auto text-center"
            >Watch Trailer</a
          >
        </div>
      </div>
    </div>

    <nav
      aria-label="Page navigation example"
      class="d-flex justify-content-center mt-3"
    >
      <ul class="pagination">
        <li class="page-item">
          <a
            class="page-link"
            href="#"
            @click.prevent="changePage(-1)"
            :hidden="page <= 1 ? true : false"
            >Previous</a
          >
        </li>
        <li class="page-item">
          <a class="page-link" href="#">{{ page }}</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" @click.prevent="changePage(1)">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      page: 1,
      isPremium: false,
    };
  },
  computed: {
    ...mapState(useCounterStore, ["dataAnime"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["getAnime"]),
    async changePage(page) {
      this.page = this.page + page;
      console.log(this.page, "asdfkj");
      await this.getAnime(this.page);
    },
    checkPremium() {
      //   if (!this.isPremium) {
      //     setTimeout(() => {
      //       Swal.fire({
      //         html: `<img src="https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/09/11/163415533.jpg" alt="">`,
      //       });
      //       this.checkPremium();
      //     }, 3000);
      //   }
    },
  },
  created() {
    this.getAnime(this.page);
    this.checkPremium();
  },
};
</script>

<style scoped>
.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
.card-body {
  display: flex;
  flex-direction: column;
}
</style>
