<script>
    export default {
        props: {
            s: Object
        }
    }
</script>
<template>
    <div class="col-sm-3 mb-4">
        <div class="card card-light card-hover h-100">
            <div class="card-img-top card-img-hover">
                <a v-if="s.media_type == 'movie'" class="img-overlay" href="" @click="$router.push('/movie/' + s.id)"></a>
                <a v-else-if="s.media_type == 'tv'" class="img-overlay" href="" @click="$router.push('/series/' + s.id)"></a>
                <img
                    :src="s.poster_path"
                    alt="Image"
                />
            </div>
            <div class="card-body">
                <div
                    class="d-flex align-items-center justify-content-between pb-1"
                >
                    <span v-if="s.media_type == 'movie'" class="fs-sm text-light me-3">{{new Date(s.release_date).toLocaleDateString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}}</span>
                    <span v-else-if="s.media_type == 'tv'" class="fs-sm text-light me-3">{{new Date(s.first_air_date).toLocaleDateString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}}</span>
                </div>
                <h3 class="h6 mb-1">
                    <a v-if="s.media_type == 'movie'" href="" @click.prevent="$router.push('/movie/' + s.id)" class="nav-link-light">{{s.title}}</a>
                    <a v-else-if="s.media_type == 'tv'" href="" @click.prevent="$router.push('/series/' + s.id)" class="nav-link-light">{{s.title}}</a>
                </h3>
            </div>
        </div>
    </div>
</template>