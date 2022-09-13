<script>
export default {};
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
                <form class="form-group form-group-light mb-5 mt-3">
                    <div class="input-group">
                        <span class="input-group-text">
                            <i class="bi bi-search"></i
                        ></span>
                        <input
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
                            <a class="nav-link" href="#">TV Series</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Movie</a>
                        </li>
                    </ul>
                    <a
                        class="btn btn-link btn-light fw-normal px-0"
                        href="car-finder-catalog-grid.html"
                        >View all<i class="bi bi-arrow-right mt-0 ps-1 ms-2"></i
                    ></a>
                </div>
            </div>
            <div
                class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-2 g-md-4"
            >
                <!-- Item-->

                <div class="col">
                    <div class="card card-light card-hover h-100">
                        <div class="card-img-top card-img-hover">
                            <a
                                class="img-overlay"
                                href="car-finder-single.html"
                            ></a>

                            <div class="content-overlay end-0 top-0 pt-3 pe-3">
                                <button
                                    class="btn btn-icon btn-light btn-xs text-primary rounded-circle"
                                    type="button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="left"
                                    title=""
                                    data-bs-original-title="Add to Watchlist"
                                    aria-label="Add to Watchlist"
                                >
                                    <i class="bi bi-bookmark-heart-fill"></i>
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
                                <span class="fs-sm text-light me-3">2022</span>
                            </div>
                            <h3 class="h6 mb-1">
                                <a
                                    class="nav-link-light"
                                    href="car-finder-single.html"
                                    >Thor: Love and Thunder</a
                                >
                            </h3>
                        </div>
                    </div>
                </div>
                <!-- Item-->
                <div class="col">
                    <div class="card card-light card-hover h-100">
                        <div class="card-img-top card-img-hover">
                            <a
                                class="img-overlay"
                                href="car-finder-single.html"
                            ></a>

                            <div class="content-overlay end-0 top-0 pt-3 pe-3">
                                <button
                                    class="btn btn-icon btn-light btn-xs text-primary rounded-circle"
                                    type="button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="left"
                                    title=""
                                    data-bs-original-title="Add to Watchlist"
                                    aria-label="Add to Watchlist"
                                >
                                    <i class="bi bi-bookmark-heart-fill"></i>
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
                                <span class="fs-sm text-light me-3">2022</span>
                            </div>
                            <h3 class="h6 mb-1">
                                <a
                                    class="nav-link-light"
                                    href="car-finder-single.html"
                                    >Thor: Love and Thunder</a
                                >
                            </h3>
                        </div>
                    </div>
                </div>
                <!-- Item-->
                <div class="col">
                    <div class="card card-light card-hover h-100">
                        <div class="card-img-top card-img-hover">
                            <a
                                class="img-overlay"
                                href="car-finder-single.html"
                            ></a>

                            <div class="content-overlay end-0 top-0 pt-3 pe-3">
                                <button
                                    class="btn btn-icon btn-light btn-xs text-primary rounded-circle"
                                    type="button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="left"
                                    title=""
                                    data-bs-original-title="Add to Watchlist"
                                    aria-label="Add to Watchlist"
                                >
                                    <i class="bi bi-bookmark-heart-fill"></i>
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
                                <span class="fs-sm text-light me-3">2022</span>
                            </div>
                            <h3 class="h6 mb-1">
                                <a
                                    class="nav-link-light"
                                    href="car-finder-single.html"
                                    >Dragon Ball Super: Super Hero</a
                                >
                            </h3>
                        </div>
                    </div>
                </div>
                <!-- Item-->
                <div class="col">
                    <div class="card card-light card-hover h-100">
                        <div class="card-img-top card-img-hover">
                            <a
                                class="img-overlay"
                                href="car-finder-single.html"
                            ></a>

                            <div class="content-overlay end-0 top-0 pt-3 pe-3">
                                <button
                                    class="btn btn-icon btn-light btn-xs text-primary rounded-circle"
                                    type="button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="left"
                                    title=""
                                    data-bs-original-title="Add to Watchlist"
                                    aria-label="Add to Watchlist"
                                >
                                    <i class="bi bi-bookmark-heart-fill"></i>
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
                                <span class="fs-sm text-light me-3">2022</span>
                            </div>
                            <h3 class="h6 mb-1">
                                <a
                                    class="nav-link-light"
                                    href="car-finder-single.html"
                                    >Thor: Love and Thunder</a
                                >
                            </h3>
                        </div>
                    </div>
                </div>
                <!-- Item-->
                <div class="col">
                    <div class="card card-light card-hover h-100">
                        <div class="card-img-top card-img-hover">
                            <a
                                class="img-overlay"
                                href="car-finder-single.html"
                            ></a>

                            <div class="content-overlay end-0 top-0 pt-3 pe-3">
                                <button
                                    class="btn btn-icon btn-light btn-xs text-primary rounded-circle"
                                    type="button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="left"
                                    title=""
                                    data-bs-original-title="Add to Watchlist"
                                    aria-label="Add to Watchlist"
                                >
                                    <i class="bi bi-bookmark-heart-fill"></i>
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
                                <span class="fs-sm text-light me-3">2022</span>
                            </div>
                            <h3 class="h6 mb-1">
                                <a
                                    class="nav-link-light"
                                    href="car-finder-single.html"
                                    >Thor: Love and Thunder</a
                                >
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
