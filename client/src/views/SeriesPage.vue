<script></script>
<template>
    <main class="page-wrapper">
        <!-- Page content-->
        <!-- Page container-->
        <div class="container mt-5 mb-md-4 py-5">
            <div class="row py-md-1">
                <!-- Filers sidebar (Offcanvas on mobile)-->
                <div class="col-lg-3 pe-xl-4">
                    <div
                        class="offcanvas offcanvas-start offcanvas-collapse bg-dark"
                        id="filters-sidebar"
                    >
                        <div
                            class="offcanvas-header bg-transparent d-flex d-lg-none align-items-center"
                        >
                            <h2 class="h5 text-light mb-0">Filters</h2>
                            <button
                                class="btn-close btn-close-white"
                                type="button"
                                data-bs-dismiss="offcanvas"
                            ></button>
                        </div>
                        <div class="offcanvas-body py-lg-4">
                            <div class="pb-4 mb-2">
                                <h3 class="h6 text-light">Popular Series</h3>
                                <form action="">
                                    <select
                                        class="form-select form-select-light mb-2"
                                    >
                                        <option
                                            value=""
                                            disabled=""
                                            selected=""
                                        >
                                            By Genre
                                        </option>
                                        <option value="Thriller">
                                            Thriller
                                        </option>
                                        <option value="Comedy">Comedy</option>
                                        <option value="Action">Action</option>
                                    </select>
                                    <select
                                        class="form-select form-select-light mb-1"
                                    >
                                        <option
                                            value=""
                                            disabled=""
                                            selected=""
                                        >
                                            By Release Year
                                        </option>
                                        <option value="2022">2022</option>
                                        <option value="2021">2021</option>
                                    </select>
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
                        <div class="col-sm-4 mb-4">
                            <div class="card card-light card-hover h-100">
                                <div class="card-img-top card-img-hover">
                                    <a class="img-overlay" href=""></a>

                                    <div
                                        class="content-overlay end-0 top-0 pt-3 pe-3"
                                    >
                                        <button
                                            class="btn btn-icon btn-light btn-xs text-primary rounded-circle"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="left"
                                            title=""
                                            data-bs-original-title="Add to Watchlist"
                                            aria-label="Add to Watchlist"
                                        >
                                            <i
                                                class="bi bi-bookmark-heart-fill"
                                            ></i>
                                        </button>
                                    </div>
                                    <img
                                        src="https://www.themoviedb.org/t/p/w440_and_h660_face/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div class="card-body">
                                    <div
                                        class="d-flex align-items-center justify-content-between pb-1"
                                    >
                                        <span class="fs-sm text-light me-3"
                                            >1995</span
                                        >
                                    </div>
                                    <h3 class="h6 mb-1">
                                        <a class="nav-link-light" href=""
                                            >Thor: Love and Thunder</a
                                        >
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <!-- Item-->
                        <div class="col-sm-4 mb-4">
                            <div class="card card-light card-hover h-100">
                                <div class="card-img-top card-img-hover">
                                    <a class="img-overlay" href=""></a>

                                    <div
                                        class="content-overlay end-0 top-0 pt-3 pe-3"
                                    >
                                        <button
                                            class="btn btn-icon btn-light btn-xs text-primary rounded-circle"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="left"
                                            title=""
                                            data-bs-original-title="Add to Watchlist"
                                            aria-label="Add to Watchlist"
                                        >
                                            <i
                                                class="bi bi-bookmark-heart-fill"
                                            ></i>
                                        </button>
                                    </div>
                                    <img
                                        src="https://www.themoviedb.org/t/p/w440_and_h660_face/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div class="card-body">
                                    <div
                                        class="d-flex align-items-center justify-content-between pb-1"
                                    >
                                        <span class="fs-sm text-light me-3"
                                            >2022</span
                                        >
                                    </div>
                                    <h3 class="h6 mb-1">
                                        <a class="nav-link-light" href=""
                                            >Dragon Ball Super: Super Hero</a
                                        >
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <!-- Item-->
                        <div class="col-sm-4 mb-4">
                            <div class="card card-light card-hover h-100">
                                <div class="card-img-top card-img-hover">
                                    <a class="img-overlay" href=""></a>

                                    <div
                                        class="content-overlay end-0 top-0 pt-3 pe-3"
                                    >
                                        <button
                                            class="btn btn-icon btn-light btn-xs text-primary rounded-circle"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="left"
                                            title=""
                                            data-bs-original-title="Add to Watchlist"
                                            aria-label="Add to Watchlist"
                                        >
                                            <i
                                                class="bi bi-bookmark-heart-fill"
                                            ></i>
                                        </button>
                                    </div>
                                    <img
                                        src="https://www.themoviedb.org/t/p/w440_and_h660_face/c5OwwBNyJkwyroIOIJL9IiRjydR.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div class="card-body">
                                    <div
                                        class="d-flex align-items-center justify-content-between pb-1"
                                    >
                                        <span class="fs-sm text-light me-3"
                                            >2022</span
                                        >
                                    </div>
                                    <h3 class="h6 mb-1">
                                        <a class="nav-link-light" href=""
                                            >Fullmetal Alchemist: The Revenge of
                                            Scar</a
                                        >
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <!-- Item-->
                        <div class="col-sm-4 mb-4">
                            <div class="card card-light card-hover h-100">
                                <div class="card-img-top card-img-hover">
                                    <a class="img-overlay" href=""></a>

                                    <div
                                        class="content-overlay end-0 top-0 pt-3 pe-3"
                                    >
                                        <button
                                            class="btn btn-icon btn-light btn-xs text-primary rounded-circle"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="left"
                                            title=""
                                            data-bs-original-title="Add to Watchlist"
                                            aria-label="Add to Watchlist"
                                        >
                                            <i
                                                class="bi bi-bookmark-heart-fill"
                                            ></i>
                                        </button>
                                    </div>
                                    <img
                                        src="https://www.themoviedb.org/t/p/w440_and_h660_face/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div class="card-body">
                                    <div
                                        class="d-flex align-items-center justify-content-between pb-1"
                                    >
                                        <span class="fs-sm text-light me-3"
                                            >1995</span
                                        >
                                    </div>
                                    <h3 class="h6 mb-1">
                                        <a class="nav-link-light" href=""
                                            >Thor: Love and Thunder</a
                                        >
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <!-- Item-->
                        <div class="col-sm-4 mb-4">
                            <div class="card card-light card-hover h-100">
                                <div class="card-img-top card-img-hover">
                                    <a class="img-overlay" href=""></a>

                                    <div
                                        class="content-overlay end-0 top-0 pt-3 pe-3"
                                    >
                                        <button
                                            class="btn btn-icon btn-light btn-xs text-primary rounded-circle"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="left"
                                            title=""
                                            data-bs-original-title="Add to Watchlist"
                                            aria-label="Add to Watchlist"
                                        >
                                            <i
                                                class="bi bi-bookmark-heart-fill"
                                            ></i>
                                        </button>
                                    </div>
                                    <img
                                        src="https://www.themoviedb.org/t/p/w440_and_h660_face/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div class="card-body">
                                    <div
                                        class="d-flex align-items-center justify-content-between pb-1"
                                    >
                                        <span class="fs-sm text-light me-3"
                                            >2022</span
                                        >
                                    </div>
                                    <h3 class="h6 mb-1">
                                        <a class="nav-link-light" href=""
                                            >Dragon Ball Super: Super Hero</a
                                        >
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <!-- Item-->
                        <div class="col-sm-4 mb-4">
                            <div class="card card-light card-hover h-100">
                                <div class="card-img-top card-img-hover">
                                    <a class="img-overlay" href=""></a>

                                    <div
                                        class="content-overlay end-0 top-0 pt-3 pe-3"
                                    >
                                        <button
                                            class="btn btn-icon btn-light btn-xs text-primary rounded-circle"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="left"
                                            title=""
                                            data-bs-original-title="Add to Watchlist"
                                            aria-label="Add to Watchlist"
                                        >
                                            <i
                                                class="bi bi-bookmark-heart-fill"
                                            ></i>
                                        </button>
                                    </div>
                                    <img
                                        src="https://www.themoviedb.org/t/p/w440_and_h660_face/c5OwwBNyJkwyroIOIJL9IiRjydR.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div class="card-body">
                                    <div
                                        class="d-flex align-items-center justify-content-between pb-1"
                                    >
                                        <span class="fs-sm text-light me-3"
                                            >2022</span
                                        >
                                    </div>
                                    <h3 class="h6 mb-1">
                                        <a class="nav-link-light" href=""
                                            >Fullmetal Alchemist: The Revenge of
                                            Scar</a
                                        >
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Pagination-->
                    <div
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
