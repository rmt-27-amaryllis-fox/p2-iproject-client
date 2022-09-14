<script>
export default {
    props: {
        p: Object,
    },
};
</script>
<template>
    <div class="col text-light">
        <div class="d-table bg-dark rounded-3 p-3">
            <img :src="p.img" width="48" alt="Icon" class="rounded" />
            <p>{{ p.name }}</p>
        </div>
    </div>
</template>
