<script>
import {mapActions, mapState} from "pinia";
import {usePremiumPackageStore} from "../stores/premium.package";
import {usePaymentStore} from "../stores/payment";
import {useUserStore} from "../stores/user";
import LoadingBar from "../components/LoadingBar.vue";

export default {
  name: "ProfileView",
  components: {LoadingBar},
  data() {
    return {
      name: '',
      email: '',
      premium: '',
      page: 'profile',
      invisible: true
    }
  },
  computed: {
    ...mapState(usePremiumPackageStore, ['packages'])
  },
  methods: {
    ...mapActions(usePremiumPackageStore, ['fetchPackages']),
    ...mapActions(usePaymentStore, ['paymentHandler']),
    ...mapActions(useUserStore, ['fetchProfile']),
    onChangePageHandler(value) {
      this.page = value;
    },
    async onPaymentHandler(packageId) {
      try {
        this.invisible = false;
        const {data: {transactionToken}} = await this.paymentHandler(packageId);
        this.invisible = true;
        snap.pay(transactionToken);
      } catch (e) {
        console.log(e);
      }
    },
  },
  async created() {
    try {
      await this.fetchPackages();
      const {data} = await this.fetchProfile();
      this.name = data.name;
      this.premium = data.premium;
      this.email = data.email;
      localStorage.setItem('premium', data.premium);
    } catch (e) {
      console.log(e);
    }

  }
}
</script>

<template>
  <LoadingBar v-if="!invisible"/>

  <div class="container my-4">
    <div class="row">
      <div class="col-md-3 p-0">
        <div class="card mb-2 rounded-0">
          <div class="card-body d-flex flex-column">
            <img src="https://pbs.twimg.com/profile_images/1510276954938920966/_jPqrcHD_400x400.jpg"
                 class="rounded mx-auto d-block" alt="..." style="width: 140px">
            <p class="text-center fw-bold mt-4 fs-4 mb-0">{{ name }}</p>
            <p class="text-center mb-0" v-if="+premium === 1"><span
                class="badge rounded-pill text-bg-warning">Premium</span></p>
            <p class="text-center mb-0 " v-else><span class="badge rounded-pill text-bg-primary">Basic</span></p>
          </div>
        </div>
        <ul class="list-group rounded-0">
          <button type="button" :class="{active: page === 'profile'}" class="list-group-item list-group-item-action"
                  @click="onChangePageHandler('profile')">
            Profile
          </button>
          <button type="button" :class="{active: page === 'membership'}" class="list-group-item list-group-item-action"
                  @click="onChangePageHandler('membership')">Membership
          </button>
        </ul>
      </div>
      <div class="col-md-9" v-if="page === 'profile'">
        <div class="card p-2 rounded-0">
          <div class="card-body d-flex flex-column">
            <p class="m-0">Hallo, {{ name }}!</p>
            <hr>
            <form action="">
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="email" class="form-label">Email Address</label>
                    <input type="email" class="form-control rounded-0" id="email" placeholder="name@example.com"
                           :value="email" disabled>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="name" class="form-label">Full Name</label>
                    <input type="text" class="form-control rounded-0" id="name" placeholder="Seorina" :value="name"
                           disabled>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-9" v-else-if="page === 'membership'">
        <div class="card p-2 rounded-0">
          <div class="card-body d-flex flex-column">
            <div class="card rounded-0" v-for="row in packages" :key="row.id">
              <div class="card-body">
                <div class="d-flex">
                  <p class="flex-grow-1">{{ row.name }}</p>
                  <button v-if="+premium !== 1" class="btn btn-outline-primary rounded-0" style="width: 25%"
                          @click="onPaymentHandler(row.id)">Buy Now
                  </button>
                  <button v-else class="btn btn-outline-primary rounded-0" style="width: 25%" disabled>
                    You are premium user
                  </button>
                </div>
                <h4><span class="fw-bold">Rp {{ row.price.toLocaleString('id-ID') }},-</span>
                </h4>
                <hr>
                <p><i class="bi bi-check-all me-2"></i>Watchlist(Stocks recommendation)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>