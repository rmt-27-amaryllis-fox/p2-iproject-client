<script>
import { mapActions, mapState } from "pinia";
import { useBaseStore } from "../stores/base";
export default {
  computed: {
    ...mapState(useBaseStore, ["Services"]),
  },
  methods: {
    ...mapActions(useBaseStore, ["fetchServices"]),
  },
  created() {
    console.log(this.Services.Category, "dab daby");
    this.fetchServices();
  },
};
</script>

<template>
  <h3>Historical Services</h3>
  <br />
  <table class="table">
    <thead class="thead-light">
      <tr>
        <th scope="col">Nomor Antrian</th>
        <th scope="col">Type</th>
        <th scope="col">Service Date</th>
        <th scope="col">Finished Date</th>
        <th scope="col">Status</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="service in Services" :key="service.id">
        <th scope="row">{{ service.id }}</th>
        <td>{{ service.Category.name }}</td>
        <td>{{ service.ServiceDate }}</td>
        <td>{{ service.updatedAt }}</td>
        <td>{{ service.status }}</td>
        <td>
          {{
            Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(service.Category.price)
          }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
