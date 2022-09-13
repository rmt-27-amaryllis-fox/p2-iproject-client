<script>
export default {
  props: ["data"],
};
</script>
<template>
  <div class="col-12 col-md-3 mt-3">
    <div class="card shadow">
      <img :src="data.imageUrl" alt="image" class="card-img-top" />
      <div class="card-body">
        <h6 class="card-title">Name: {{ data.name }}</h6>
        <h6 class="card-text">Status: {{ data.status }}</h6>
        <h6 class="card-text">Department: {{ data.department }}</h6>
        <div class="row">
          <div class="col mt-2">
            <button type="submit" class="btn btn-outline-primary">Edit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
