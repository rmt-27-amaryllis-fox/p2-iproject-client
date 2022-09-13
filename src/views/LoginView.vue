<script>
export default {
  name: "LoginView"
}
</script>

<template>
  <div class="container mt-4">
    <div class="card m-auto" style="width: 50%">
      <img src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           class="card-img-top" alt="..." style="height: 240px">
      <div class="card-body">
        <form action="">
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email"
                   placeholder="name@example.com">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="email" class="form-control" id="password"
                   placeholder="password">
          </div>
          <div class="d-flex justify-content-end">
            <button class="btn btn-outline-primary">Login</button>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>