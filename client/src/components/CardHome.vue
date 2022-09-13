<script>
export default {
  props: ["data"],
};
</script>
<template>
  <div class="col-12 col-md-3 mt-3">
    <div class="card shadow">
      <img :src="data.image" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ data.name }}</h5>
        <h5 class="card-text">stock: {{ data.stock }}</h5>
        <div class="row">
          <div class="col mt-2">
            <button type="submit" class="btn btn-outline-primary">Edit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
