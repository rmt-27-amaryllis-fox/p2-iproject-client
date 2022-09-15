<script>
import { mapActions, mapWritableState } from 'pinia';
import OwnedTable from "../components/OwnedTable.vue"
import { useCounterStore } from '../stores/counter';

export default {
    components: {
        OwnedTable
    },
    methods: {
        ...mapActions(useCounterStore, ["fetchOwned"]),
        changePage() {
            this.$router.push("/")
        },
    },
    computed: {
        ...mapWritableState(useCounterStore, ["owneds"])
    },
    created() {
        this.fetchOwned()
    }
}

</script>
    

<template>
    <!-- <table class="table mt-5"> -->
        <h1 ></h1>
<table class="table mt-3 table-dark  table-bordered text-center mx-auto" style="width:90%">
    <thead class="border">
        <tr>
            <!-- <th scope="col">#</th> -->
            <th scope="col">title</th>
            <th scope="col">Artist</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Purchase Date</th>
            <th scope="col">Ownner</th>
        </tr>
    </thead>

    <tbody>
        <OwnedTable v-for="(owned, index) in owneds" :key="index" :owned="owned"  />
    </tbody>
</table>
    <!-- </table> -->
</template>
    