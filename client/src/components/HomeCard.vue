<script>
export default {
  props: ["post"],
  data() {
    return {
      flagUrl: `https://countryflagsapi.com/png`,
      weatherIconUrl: `http://openweathermap.org/img/w`,
    };
  },
  computed: {
    formattedDate() {
      return this.post.createdAt.substring(0, 19).replace("T", " ");
    },
  },
};
</script>

<template>
  <div class="col d-flex justify-content-center">
    <div class="card" style="width: 40rem">
      <img :src="post.imageUrl" class="card-img-top" alt="card-image" />
      <div class="card-body">
        <div class="row">
          <div class="col d-flex align-items-center">
            <img
              :src="`${flagUrl}/${post.country}`"
              alt="flag-icon"
              class="flag-icon"
              style="border: black 0.5pt solid"
            />
            <h4 class="fw-bolder">{{ post.location }}</h4>
            <div></div>
          </div>
          <div class="col">
            <img
              :src="`${weatherIconUrl}/${post.weatherIcon}.png`"
              alt="weather-icon"
              class="weather-icon"
            />
          </div>
        </div>
        <h6 class="weather-description">
          {{ post.weatherMain }}, {{ post.weatherDescription }}
        </h6>
        <p class="card-caption mb-4">
          {{ post.caption }}
        </p>
        <p class="card-created-at">posted at: {{ formattedDate }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flag-icon {
  float: left;
  width: 3rem;
  margin-right: 0.5rem;
}
.weather-main,
.card-created-at {
  text-align: right;
}

.weather-icon {
  float: right;
}

.card-caption {
  text-align: justify;
}
</style>
