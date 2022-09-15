<script>
    export default {
        props: { p: Object, kind: String }
    }
</script>
<template>
    <div class="col">
        <div class="card card-light card-hover h-100">
            <div class="card-img-top card-img-hover">
                <a v-if="kind =='Movies'" class="img-overlay" href="" @click="$router.push('/movie/' + p.id)"></a>
                <a v-else-if="kind =='Series'" class="img-overlay" href="" @click="$router.push('/series/' + p.id)"></a>

                <div class="content-overlay end-0 top-0 pt-3 pe-3">
                </div>
                <img
                    :src="p.poster"
                    alt="poster"
                />
            </div>
            <div class="card-body">
                <div
                    class="d-flex align-items-center justify-content-between pb-1"
                >
                    <span class="fs-sm text-light me-3">{{new Date(p.release_date).getFullYear()}}</span>
                </div>
                <h3 class="h6 mb-1">
                    <a v-if="kind =='Movies'" class="nav-link-light" href="" @click="$router.push('/movie/' + p.id)">{{p.title}}</a>
                    <a v-else-if="kind =='Series'" class="nav-link-light" href="" @click="$router.push('/series/' + p.id)"
                        >{{p.name}}</a
                    >
                </h3>
            </div>
        </div>
    </div>
</template>
