<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
import SearchCard from "../components/SearchCard.vue";

export default {
    computed: {
        ...mapWritableState(useCounterStore, ["searchData", "page"]),
    },
    methods: {
        ...mapActions(useCounterStore, ["search"]),
        pageIncrement() {
            this.page++
        }
    },
    created() {
        this.searchData;
    },
    components: { SearchCard },
    watch: {
        "$route.params.query": {
            handler(query) {
                this.search(query);
            },
            immediate: true,
        },
    },
};
</script>
<template>
    <main class="page-wrapper" v-if="searchData.total_pages > 0">
        <!-- Page content-->
        <!-- Page container-->
        <div class="container mt-5 mb-md-4 py-5">
            <div class="row py-md-1">
                <!-- Movie grid view-->
                <div class="col-lg-12">
                    <p>
                        You search "{{
                            $route.params.query.split("+").join(" ")
                        }}"
                    </p>
                    <!-- Page Content-->
                    <div class="row">
                        <!-- Item-->
                        <SearchCard
                            v-for="(s, idx) in searchData.results"
                            :key="idx"
                            :s="s"
                        />
                        
                    </div>
                    <!-- Pagination-->
                    <div
                        v-if="searchData.total_pages > 1"
                        class="d-flex align-items-center justify-content-between py-2"
                    >
                        <nav aria-label="Pagination">
                            <ul
                                class="pagination pagination-light mb-0 border rounded"
                            >
                                <li class="page-item d-sm-none text-nowrap">
                                    <span class="page-link page-link-static"
                                        >1 / 5</span
                                    >
                                </li>

                                <li class="page-item d-none d-sm-block">
                                    <a class="page-link" href="#">1</a>
                                </li>
                                <li class="page-item d-none d-sm-block">
                                    <a class="page-link" href="#">2</a>
                                </li>
                                <li class="page-item d-none d-sm-block">
                                    <a class="page-link" href="#">3</a>
                                </li>
                                <li class="page-item d-none d-sm-block">...</li>
                                <li class="page-item d-none d-sm-block">
                                    <a class="page-link" href="#">8</a>
                                </li>
                                <li class="page-item">
                                    <a
                                        class="page-link"
                                        href="#"
                                        aria-label="Next"
                                        @click="pageIncrement"
                                        ><i
                                            class="bi bi-arrow-right-short"
                                            style="font-size: 1.2rem"
                                        ></i
                                    ></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <main class="page-wrapper" v-if="searchData.total_pages < 1">
        <!-- Page content-->
        <!-- Page container-->
        <div class="container mt-5 mb-md-4 py-5">
            <div class="row py-md-1">
                <!-- Movie grid view-->
                <div class="col-lg-12">
                    <p>
                        You search "{{
                            $route.params.query.split("+").join(" ")
                        }}"
                    </p>
                    <!-- Page Content-->
                    <div class="row">
                        <!-- Item-->
                        <h3 class="text-white">Sorry.. We couldn't find what you were looking for</h3>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
