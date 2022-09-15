<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
import SeriesCard from "../components/SeriesCard.vue";

export default {
    data() {
        return {
            pageLocal: "1",
            query: ""
        }
    },  
    methods: {
        ...mapActions(useCounterStore, ["fetchSeries", "search"]),
        pageIncrement() {
            this.page += 1
            this.pageLocal = this.page
            this.fetchSeries()
        },
        pageDecrement() {
            this.page -= 1
            this.pageLocal = this.page
            this.fetchSeries()
        },
        pageHandler(value) {
            this.page = value
            this.fetchSeries()
        }
    },
    computed: {
        ...mapWritableState(useCounterStore, ["series", "page"]),
    },
    created() {
        this.page = 1
        this.fetchSeries();
    },
    components: { SeriesCard }
};
</script>
<template>
    <main class="page-wrapper">
        <!-- Page content-->
        <!-- Page container-->
        <div class="container mt-5 mb-md-4 py-5">
            <div class="row py-md-1">
                <!-- Search sidebar -->
                <div class="col-lg-3 pe-xl-4">
                    <div
                        class="offcanvas offcanvas-start offcanvas-collapse bg-dark"
                        id="filters-sidebar"
                    >
                        <div class="offcanvas-body py-lg-4">
                            <div class="pb-4 mb-2">
                                <h3 class="h6 text-light">Popular Series</h3>
                                <form @submit.prevent="search(this.query.split(' ').join('+'))" class="form-group-light bg-dark">
                                    <input 
                                        type="text"
                                        class="form-control mb-2"
                                        placeholder="Search for series..."
                                        v-model="query"
                                    >
                                    <button
                                        class="btn btn-link border border-primary btn-light btn-primary mt-1"
                                    >
                                        Search
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Series grid view-->
                <div class="col-lg-9">
                    <!-- Breadcrumb-->
                    <nav class="mb-3 pt-md-2 pt-lg-4" aria-label="Breadcrumb">
                        <ol class="breadcrumb breadcrumb-light">
                            <li class="breadcrumb-item">
                                <a href="" @click.prevent="$router.push('/')"
                                    >Home</a
                                >
                            </li>
                            <i class="bi bi-arrow-right-short mx-2"></i>
                            <li
                                class="breadcrumb-item active"
                                aria-current="page"
                            >
                                Popular Series
                            </li>
                        </ol>
                    </nav>
                    <!-- Page Content-->
                    <div class="row">
                        <!-- Item-->
                        <SeriesCard v-for="s in series" :key="s.id" :s="s" />
                    </div>
                    <!-- Pagination-->
                    <div class="d-flex align-items-center justify-content-between py-2">
                        <nav aria-label="Pagination">
                            <ul class="pagination pagination-light mb-0 border rounded">
                                <li class="page-item">
                                    <a
                                        v-if="pageLocal > 1"
                                        @click.prevent="pageDecrement"
                                        class="page-link btn-primary"
                                        href="#"
                                        aria-label="Before"
                                        ><i
                                            class="bi bi-arrow-left-short"
                                            style="font-size: 1.2rem"
                                        ></i
                                    ></a>
                                </li>
                                <li class="page-item">
                                    <input @change="pageHandler(pageLocal)" v-model="pageLocal" type="number" class="text-center input-group" min="1">
                                </li>
                                <li class="page-item">
                                    <a
                                        @click.prevent="pageIncrement"
                                        class="page-link btn-primary"
                                        href="#"
                                        aria-label="Next"
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
</template>
