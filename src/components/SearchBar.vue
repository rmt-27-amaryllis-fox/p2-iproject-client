<script>
export default {
  name: "SearchBar",
  emits: ['onSearch'],
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onSearchHandler() {
      this.$emit('onSearch', this.value);
    },
  },
}
</script>

<template>
  <form class="d-flex mb-4" role="search" @submit.prevent="onSearchHandler">
    <input class="form-control me-2 rounded-0" type="search" placeholder="ex: AAPL" aria-label="Search" v-model="value">
    <button class="btn btn-outline-primary rounded-0" type="submit">Search</button>
  </form>
</template>

<style scoped>

</style>