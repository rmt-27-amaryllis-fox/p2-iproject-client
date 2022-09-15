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
                <a class="img-overlay" href="" @click="$router.push('/movie/' + m.id)"></a>
                <img
                    :src="m.poster"
                    alt="Image"
                />
            </div>
            <div class="card-body">
                <div
                    class="d-flex align-items-center justify-content-between pb-1"
                >
                    <span class="fs-sm text-light me-3">{{new Date(m.release_date).getFullYear()}}</span>
                </div>
                <h3 class="h6 mb-1">
                    <a href="" @click.prevent="$router.push('/movie/' + m.id)" class="nav-link-light">{{m.title}}</a>
                </h3>
            </div>
        </div>
    </div>
</template>
