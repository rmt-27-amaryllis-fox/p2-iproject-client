<script>
import { mapActions, mapState } from "pinia";
import { useBaseStore } from "../stores/base";
export default {
  data() {
    return {
      location: "",
    };
  },
  computed: {
    ...mapState(useBaseStore, ["Services", "weather", "role"]),
  },
  methods: {
    ...mapActions(useBaseStore, ["fetchServices", "weatherAPI", "locWeather"]),
    locationWeather() {
      const value = {
        location: this.location,
      };
      this.locWeather(value);
    },
  },
  created() {
    this.fetchServices();
    this.weatherAPI();
    console.log(this.weather, "dari local");
  },
};
</script>

<template>
  <div>
    <div class="col">
      <form
        class="form-inline my-2 my-lg-0 d-flex flex-row-reverse"
        @submit.prevent="locationWeather"
      >
        <input
          v-model="location"
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search Location"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
    <br />
    <div>
      <table class="table" border="1">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Location</th>
            <th scope="col">Humidity</th>
            <th scope="col">Temperature</th>
            <th scope="col">wind_speed</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="el in weather" :key="el.id">
            <td>{{ el.location.name }}</td>
            <td>{{ el.current.humidity }}</td>
            <td>{{ el.current.temperature }}</td>
            <td>{{ el.current.wind_speed }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col">
      <RouterLink to="/add-queue">
        <button type="button" class="btn btn-outline-primary">
          + Make Your Bike Awesome Here !
        </button>
      </RouterLink>
    </div>
  </div>
  <h3 class="d-flex justify-content-center">Daftar Antrian Harian</h3>
  <table class="table" border="1">
    <thead class="thead-light">
      <tr>
        <th scope="col">Nomor Antrian</th>
        <th scope="col">Tipe</th>
        <th scope="col">Tanggal Servis</th>
        <th scope="col">Status</th>
        <th scope="col" v-if="role == 'admin'">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="service in Services" :key="service.id">
        <td>{{ service.id }}</td>
        <td>{{ service.Category.name }}</td>
        <td>{{ service.ServiceDate }}</td>
        <td>{{ service.status }}</td>
        <td v-if="role == 'admin'">
          <button type="button" class="btn btn-info">Change Status</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style></style>
