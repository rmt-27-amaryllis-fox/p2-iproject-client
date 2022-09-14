<template>
  <div class="container">
    <div
      class="container shadow-sm p-3 mb-5 rounded width-5 mt-5 mb-1 opacity-25"
      style="background: rgba(0, 0, 0, 0.5)"
    >
      <h1 class="text-center text-white display-1 font-weight-bold">
        ANIMEDORO
      </h1>
    </div>
    <!-- SEARCH BAR -->
    <section>
      <div class="container w-25">
        <div class="input-group">
          <form @submit.prevent="anime">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              v-model="search"
            />
            <button type="submit" class="btn btn-outline-primary">
              search
            </button>
          </form>
        </div>
      </div>
    </section>
    <!-- END OF SEARCH BAR -->
    <!-- carousell -->
    <div>
      <Carousel>
        <Slide v-for="slide in slides" :key="slide">
          <div class="carousel__item">{{ slide }}</div>
        </Slide>

        <template #addons="{ slidesCount }">
          <Navigation v-if="slidesCount > 1" />
        </template>
      </Carousel>
    </div>
    <!-- end of carousell -->
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
        <div class="card-body opacity-25">
          <h5 class="card-title text-center">{{ e.title }}</h5>
          <p class="card-text text-center">{{ e.title_japanese }}</p>
          <p class="card-text text-center">Released Year: {{ e.year }}</p>
          <button
            @click="openTrailer(e.title, e.trailer.url)"
            class="btn btn-primary mt-auto text-center"
          >
            Watch Movie
          </button>
        </div>
        <!-- start sharing social media -->

        <!-- end sharing social media -->
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
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
export default {
  name: "App",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      page: 1,
      isPremium: false,
      showAdds: true,
      gambarJudi: [
        "https://media.suara.com/pictures/653x366/2022/05/15/59873-ilustrasi-judi-online.jpg",
        "https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/07/10/2372856385.jpg",
        "https://cmupress.cmu.ac.th/slot-deposit-pulsa/situs-slot-gacor.png",
        "https://bukutekno.com/wp-content/uploads/2019/11/1.Tunaiku-630x380.png",
        "https://i02.appmifile.com/82_bbs_en/05/09/2022/760bfe5c46.jpg",
      ],
      search: "",
    };
  },
  computed: {
    ...mapState(useCounterStore, ["dataAnime"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["getAnime", "checkLogin", "showAddsTrue"]),
    async changePage(page) {
      this.page = this.page + page;
      console.log(this.page, "asdfkj");
      await this.getAnime(this.page, this.search);
    },
    anime() {
      // console.log("hi");
      this.getAnime(this.page, this.search);
    },
    checkPremium() {
      if (
        (localStorage.getItem("paid") === "false" &&
          this.showAdds &&
          this.$route.fullPath === "/") ||
        (!localStorage.getItem("paid") &&
          this.showAdds &&
          this.$route.fullPath === "/")
      ) {
        let image = this.getRandomItem();
        console.log(image, "image");
        setTimeout(() => {
          Swal.fire({
            html: `<img src="${image}" width="600" height='500'>`,
            width: 600,
            background: "#2A363B",
            footer: `<a class="btn btn-primary" href="https://mesin-mpo.com/register/76B1F7A9">Mulai Menghasilkan Uang Secara Instant!</a>`,
          });
          this.checkPremium();
        }, 10000);
      }
    },
    openTrailer(anime, videoUrl) {
      videoUrl = `https://www.youtube.com/embed/${videoUrl.split("=")[1]}`;
      console.log(videoUrl, "<<");
      Swal.fire({
        title: `<strong>${anime} Trailer</strong>`,
        html: `<iframe width="1500" height="500" src="${videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        footer: `<a class="btn btn-primary" href="https://mesin-mpo.com/register/76B1F7A9">Judi Mulai Rp 100K jadi Rp 1Jt</a>`,
        width: 1500,
      });
    },
    getRandomItem() {
      // get random index value
      const randomIndex = Math.floor(Math.random() * this.gambarJudi.length);

      // get random item
      const item = this.gambarJudi[randomIndex];
      console.log(item, "item");
      return item;
    },
  },
  created() {
    this.getAnime(this.page);
    // this.showAdds = true;
    // this.showAddsTrue();
    this.checkPremium();
    this.getRandomItem();
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
