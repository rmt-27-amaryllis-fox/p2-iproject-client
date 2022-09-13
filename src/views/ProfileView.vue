<script>
export default {
  name: "ProfileView"
}
</script>

<template>
  <div class="container my-4">
    <div class="row mb-2">
      <div class="col-md-3">
        <div class="card">
          <div class="card-body d-flex flex-column">
            <img src="https://pbs.twimg.com/profile_images/1510276954938920966/_jPqrcHD_400x400.jpg"
                 class="rounded mx-auto d-block" alt="..." style="width: 140px">
            <p class="text-center fw-bold mt-4 fs-4 mb-0">Alfinna</p>
            <p class="text-center mb-0"><span class="badge rounded-pill text-bg-warning">Premium</span></p>
          </div>
        </div>
      </div>
      <div class="col-md-9" hidden>
        <div class="card p-2">
          <div class="card-body d-flex flex-column">
            <p class="m-0">Hallo, Alfinna!</p>
            <hr>
            <form action="">
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="email" class="form-label">Email Address</label>
                    <input type="email" class="form-control" id="email" placeholder="name@example.com">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="name" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Seorina">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="phoneNumber" class="form-label">Phone Number</label>
                    <input type="number" class="form-control" id="phoneNumber"
                           placeholder="08123456789">
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-end">
                <button class="btn btn-outline-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="card p-2">
          <div class="card-body d-flex flex-column">
            <div class="card">
              <div class="card-body">
                <div class="d-flex">
                  <p class="flex-grow-1">Kantong Saham Premium</p>
                  <button class="btn btn-outline-primary" style="width: 25%">Buy Now</button>
                </div>
                <h4><span class="fw-bold">Rp 150.000,-</span><span style="font-size: small">/12 Bulan</span>
                </h4>
                <hr>
                <p><i class="bi bi-check-all me-2"></i>News terupdate mengenai Investasi dan saham</p>
                <p><i class="bi bi-check-all me-2"></i>Watchlist(Saham Rekomendasi)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <ul class="list-group">
          <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
            Profile
          </button>
          <button type="button" class="list-group-item list-group-item-action">Membership</button>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>