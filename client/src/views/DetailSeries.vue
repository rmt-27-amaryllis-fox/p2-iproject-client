<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
import CastCard from "../components/CastCard.vue";
import ProviderCard from "../components/ProviderCard.vue";

export default {
    computed: {
        ...mapWritableState(useCounterStore, ["seriesData"]),
    },
    methods: {
        ...mapActions(useCounterStore, [
            "detailSeries",
            "createSeriesWatchlist",
        ]),
    },
    watch: {
        "$route.params.id": {
            handler(id) {
                this.detailSeries(id);
            },
            immediate: true,
        },
    },
    components: { CastCard, ProviderCard },
};
</script>
<template>
    <main class="page-wrapper" v-if="seriesData.series">
        <!-- Page content-->
        <div class="container mt-5 mb-md-4 py-5">
            <!-- Breadcrumb-->
            <nav class="mb-3 pt-md-3" style="" aria-label="Breadcrumb">
                <ol class="breadcrumb breadcrumb-light">
                    <li class="breadcrumb-item">
                        <a @click.prevent="$router.push('/')" href="">Home</a>
                    </li>
                    <i class="bi bi-arrow-right-short mx-2"></i>
                    <li class="breadcrumb-item">
                        <a @click.prevent="$router.push('/series')" href=""
                            >Series</a
                        >
                    </li>
                    <i class="bi bi-arrow-right-short mx-2"></i>
                    <li class="breadcrumb-item active" aria-current="page">
                        {{ seriesData.series.title }}
                    </li>
                </ol>
            </nav>
            <!-- Title -->
            <div
                class="d-sm-flex align-items-end align-items-md-center justify-content-between position-relative mb-4"
                style="z-index: 1025"
            >
                <div class="me-3">
                    <h1 class="h2 text-light mb-md-0">
                        {{ seriesData.series.title }} ({{
                            new Date(
                                seriesData.series.first_air_date
                            ).getFullYear()
                        }})
                    </h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-7">
                    <!-- Gallery-->
                    <!-- Light card on dark background: Vertical -->
                    <div class="card card-light card-hover">
                        <div class="card-img-top card-img-hover">
                            <img
                                alt="Banner"
                                :src="seriesData.series.backdrop_path"
                            />
                        </div>
                    </div>

                    <!-- Overview-->
                    <div class="py-3 mb-3">
                        <h2 class="h4 text-light mb-4">Overview</h2>
                        <p>
                            {{ seriesData.series.overview }}
                        </p>
                        <div class="row text-light">
                            <div class="col-sm-6 col-md-12 col-lg-6">
                                <ul class="list-unstyled">
                                    <li class="mb-2">
                                        <strong>First Air Date:</strong
                                        ><span class="opacity-70 ms-1">{{
                                            new Date(
                                                seriesData.series.first_air_date
                                            ).toLocaleDateString("id-ID", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })
                                        }}</span>
                                    </li>
                                    <li class="mb-2">
                                        <strong>Genre:</strong
                                        ><span class="opacity-70 ms-1">{{
                                            seriesData.series.genres
                                        }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- Cast -->
                    <div class="card card-body p-4 card-light mb-4">
                        <div
                            class="row row-cols-2 row-cols-sm-4 gx-3 gx-xl-4 gy-4"
                        >
                            <!-- card -->
                            <CastCard
                                v-for="(c, idx) in seriesData.cast"
                                :key="idx"
                                :c="c"
                            />
                        </div>
                    </div>
                </div>
                <!-- Sidebar-->
                <div class="col-md-5 pt-5 pt-md-0" style="margin-top: -6rem">
                    <div class="sticky-top pt-5">
                        <div class="d-none d-md-block pt-5">
                            <div class="card card-light card-body mb-4 align-items-center">
                                <div class="inline">
                                    <button
                                        class="btn btn-outline-light btn-lg px-4 me-3"
                                        type="button"
                                    >
                                        <i
                                            class="bi bi-caret-right-square me-2"
                                        ></i
                                        >Play trailer</button
                                    ><a
                                        class="btn btn-primary btn-lg"
                                        href=""
                                        data-bs-toggle="collapse"
                                        @click.prevent="createSeriesWatchlist(seriesData.series.id)"
                                        ><i
                                            class="bi bi-bookmark-star-fill me-2"
                                        ></i
                                        >Add to watchlist</a
                                    >
                                </div>
                            </div>
                        </div>
                        
                        <div
                            v-if="seriesData.provider.length > 0"
                            class="card card-body bg-transparent border-light"
                        >
                            <h5 class="text-light">Where to watch</h5>
                            <!-- card -->
                            <ProviderCard
                                v-for="(p, idx) in seriesData.provider"
                                :key="idx"
                                :p="p"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
