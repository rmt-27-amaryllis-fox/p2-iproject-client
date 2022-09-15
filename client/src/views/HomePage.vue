<script>
import {mapActions, mapWritableState} from 'pinia';
import {useCounterStore} from '../stores/counter';
import PopularCard from '../components/PopularCard.vue';

export default {
    data() {
        return {
            query: "",
            popularNavigation: "Movies"
        };
    },
    computed: {
        ...mapWritableState(useCounterStore, ['movies', 'series'])
    },
    methods: {
        ...mapActions(useCounterStore, ["search", 'fetchMovies', 'fetchSeries']),
        movieNavigation() {
            this.popularNavigation = "Movies"
            this.fetchMovies()
        },
        seriesNavigation() {
            this.popularNavigation = "Series"
            this.fetchSeries()
        },
    },
    components: { PopularCard },
    created() {
        this.fetchMovies()
        this.fetchSeries()
    }
};
</script>
<template>
    <main class="page-wrapper py-5 my-3">
        <!-- Page content-->
        <!-- Hero + Search form-->
        <section
            class="bg-position-center bg-repeat-0 py-5 mb-5"
            style="
                    background-image: url('img/hero-bg.png')
                    background-size: 1920px 630px;
                "
        >
            <div class="container pt-5">
                <div class="row pt-lg-4 pt-xl-5">
                    <div class="col-lg-4 col-md-5 pt-3 pt-md-4 pt-lg-5">
                        <h1 class="display-4 text-light pb-2 mb-4 me-md-n5">
                            Welcome to Vox8
                        </h1>
                        <p class="fs-lg text-light opacity-70">
                            Here you can find movies or TV Series and where to
                            watch it
                        </p>
                    </div>
                    <div class="col-lg-8 col-md-7 pt-md-5">
                        <img
                            class="d-block mt-4 ms-auto"
                            src="./img/hero-img.png"
                            width="800"
                            alt="Car"
                        />
                    </div>
                </div>
            </div>
            <div class="container mt-4 mt-sm-3 mt-lg-n3 pb-5 mb-md-4">
                <!-- Search-->
                <form @submit.prevent="search(this.query.split(' ').join('+'))" class="form-group form-group-light mb-5 mt-3">
                    <div class="input-group">
                        <span class="input-group-text">
                            <i class="bi bi-search"></i
                        ></span>
                        <input
                            v-model="query"
                            class="form-control"
                            type="text"
                            placeholder="Search for movie or series..."
                        />
                    </div>
                    <button class="btn btn-primary" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </section>

        <!-- popular -->
        <section class="container pb-5 mb-md-4">
            <div
                class="d-sm-flex align-items-center justify-content-between mb-3 mb-sm-4 pb-sm-2"
            >
                <h2 class="h3 text-light mb-2 mb-sm-0">What's Popular</h2>
                <div class="d-flex align-items-center">
                    <ul
                        class="nav nav-tabs nav-tabs-light fs-sm me-4 pe-2 mb-0"
                    >
                        <li class="nav-item">
                            <a @click.prevent="movieNavigation" class="btn btn-link border border-primary btn-light btn-sm btn-primary d-none d-lg-block order-lg-3" href="">Movie</a>
                        </li>
                        <li class="nav-item">
                            <a @click.prevent="seriesNavigation" class="btn btn-link border border-primary btn-light btn-sm btn-primary d-none d-lg-block order-lg-3" href="">TV Series</a>
                        </li>
                    </ul>
                    <a
                        class="btn btn-link btn-light fw-normal px-0"
                        href=""
                        v-if="popularNavigation== 'Movies'"
                        @click="$router.push('/movie')"
                        >View all<i class="bi bi-arrow-right mt-0 ps-1 ms-2"></i
                    ></a>
                    <a
                        class="btn btn-link btn-light fw-normal px-0"
                        href=""
                        v-if="popularNavigation== 'Series'"
                        @click="$router.push('/series')"
                        >View all<i class="bi bi-arrow-right mt-0 ps-1 ms-2"></i
                    ></a>
                </div>
            </div>
            <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-2 g-md-4">
                <!-- Item-->
                <PopularCard v-if="popularNavigation == 'Movies'" v-for="m in movies.slice(0, 5)" :key="m.id" :p="m" :kind="popularNavigation" />
                <PopularCard v-else-if="popularNavigation == 'Series'" v-for="s in series.slice(0, 5)" :key="s.id" :p="s" :kind="popularNavigation" />

            </div>
        </section>
    </main>
</template>
