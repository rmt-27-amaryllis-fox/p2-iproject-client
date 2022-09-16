<script>
export default {
    props: {
        song: Object
    }
};
</script>
    
<template>
    <div class="col p-1">
        <div class="card h-100 col-12" style="background-color: #292823;">
            <img :src="song.image" class="card-img-top">
            <div class="card-body mb-0">
                <h6 class="card-title text-light">{{song.name}}</h6>
                <p class="card-text text-light" style="font-size: 13px">{{song.artist}}</p>
            </div>
        </div>
    </div>
</template>