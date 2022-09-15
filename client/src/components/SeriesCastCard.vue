<script></script>
<template>
    <div
        class="col text-light text-center h-100"
    >
        <div class="d-table bg-dark rounded-3 mx-auto p-3">
            <img :src="c.photo" alt="Cast" class="rounded" />
        </div>
        <div class="fs-sm pt-2 mt-1">
            <strong>{{ c.name }}</strong>
            <br />
            {{ c.as }}
        </div>
    </div>
</template>
