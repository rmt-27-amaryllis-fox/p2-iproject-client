<script>
    import { mapActions } from 'pinia';
    import { useAllStateStore } from '../stores/allState'

    export default {
        name: "MyJobsCard",
        props: ['myjob'],
        methods:{
            ...mapActions(useAllStateStore, ['patchMyJob']),
            localPatchMyJob(){
                this.patchMyJob(this.myjob.id)
            }
        }
    }
</script>

<template>
    <div class="col-4 mb-3">
          <div class="card p-3 rounded-3">
            <div class="row align-items-center">
              <div class="col-9">
                <h5 class="mb-0">{{myjob.Job.title}}</h5>
                <p class="mb-0">Type : <strong>{{ myjob.Job.type }}</strong></p>
                <p class="mb-0">Location : <strong>{{ myjob.Job.location }}</strong></p>
                <p class="mb-0">Status : <strong>{{myjob.status}}</strong></p>
              </div>
            </div>
          </div>
        </div>
</template>