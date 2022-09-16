<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default {
    methods: {
        ...mapActions(useCounterStore, ["genrenator"]),
    },
    computed: {
        ...mapWritableState(useCounterStore, ['genre'])
    }
}
</script>
            
<template>
    <section class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="row">
            <div class="col-12">
                <h2 class="mb-3 mt-4"><b>GENRENATOR</b></h2>
                <p>Think you know all the music genres? <br>
                    Try pushing the button below to reveal a unique genre you may not know before!
                </p>
                <div class="mt-3 d-flex">
                    <button @click="genrenator" class="btn btn-dark col-2 mb-2 me-2" type="submit">Let's find
                        out!</button>
                </div>

                <div class="col-7 mb-3 mt-4">
                    <div class="card py-2 rounded-4 border-danger border-3">
                        <div class="row align-items-center">
                            <div class="col-12 ms-4 p-3">
                                <h1 class="text-danger">{{genre}}</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>