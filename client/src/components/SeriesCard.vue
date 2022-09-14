<script>
export default {
    props: {
        s: Object,
    },
};
</script>
<template>
    <div class="col-sm-3 mb-4">
        <div class="card card-light card-hover h-100">
            <div class="card-img-top card-img-hover">
                <a href="" @click="$router.push('/series/' + s.id)" class="img-overlay"></a>
                <img
                    :src="s.poster"
                    alt="Image"
                />
            </div>
            <div class="card-body">
                <div
                    class="d-flex align-items-center justify-content-between pb-1"
                >
                    <span class="fs-sm text-light me-3">{{s.first_air_date}}</span>
                </div>
                <h3 class="h6 mb-1">
                    <a class="nav-link-light" href="">{{s.name}}</a>
                </h3>
            </div>
        </div>
    </div>
</template>
