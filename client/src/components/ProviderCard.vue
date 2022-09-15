<script>
export default {
    props: {
        p: Object,
    },
};
</script>
<template>
    <div class="text-white">
        <img :src="p.img" width="48" alt="Icon" class="rounded mb-2" />
        <p>{{ p.name }}</p>
    </div>
</template>
