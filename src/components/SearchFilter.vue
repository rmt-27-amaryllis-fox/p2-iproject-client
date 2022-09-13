<script>
export default {
  name: "SearchFilter"
}
</script>

<template>
  <div class="card">
    <div class="card-header bg-primary text-light">Filter Your Search</div>
    <div class="card-body">
      <div class="mb-4">
        <p class="mb-2">P/E Ratio (In Percent)</p>
        <select class="form-select mb-2" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">Greater Than</option>
          <option value="2">Less Than</option>
        </select>
        <input type="text" class="form-control" placeholder="10">
      </div>
      <div>
        <p class="mb-2">P/B Value (In Percent)</p>
        <select class="form-select mb-2" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">Greater Than</option>
          <option value="2">Less Than</option>
        </select>
        <input type="text" class="form-control" placeholder="10">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>