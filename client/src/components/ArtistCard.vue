<script>
export default {
    props: {
        artist: Object
    },
    methods: {
        detailAction(id) {
            // console.log(id)
            // this.$router.push(`/products/${id}`);
        }
    }
};
</script>
        
<template>
    <!-- <a @click.prevent="detailAction(song.id)" class="page-link" href="#"> -->
    <div class="col p-1">
        <div class="card h-100 col-12" style="background-color: #292823;">
            <img :src="artist.image" class="card-img-top">
            <div class="card-body mb-0">
                <h6 class="card-title text-light">{{artist.name}}</h6>
            </div>
        </div>
    </div>
    <!-- </a> -->
</template>