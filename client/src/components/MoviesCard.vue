<script>

export default {
    props: {
        m: Object
    },
};
</script>
<template>
    <div class="col-sm-3 mb-4">
        <div class="card card-light card-hover h-100">
            <div class="card-img-top card-img-hover">
                <a class="img-overlay" href="" @click="$router.push('/movie/' + s.id)"></a>
                <!-- <div class="content-overlay end-0 top-0 pt-3 pe-3">
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
                </div> -->
                <img
                    :src="m.poster"
                    alt="Image"
                />
            </div>
            <div class="card-body">
                <div
                    class="d-flex align-items-center justify-content-between pb-1"
                >
                    <span class="fs-sm text-light me-3">{{new Date(m.release_date).toLocaleDateString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}}</span>
                </div>
                <h3 class="h6 mb-1">
                    <a href="" @click.prevent="$router.push('/movie/' + m.id)" class="nav-link-light">{{m.title}}</a>
                </h3>
            </div>
        </div>
    </div>
</template>
