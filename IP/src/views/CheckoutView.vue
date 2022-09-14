<script>
import { mapActions, mapState } from "pinia";
import swal from "sweetalert";
import { useUserStore } from "../stores/user";

export default {
  data() {
    return {
      paymentType: "",
    };
  },
  computed: {
    ...mapState(useUserStore, ["myCart"]),
  },
  methods: {
    ...mapActions(useUserStore, ["fetchMyCart", "checkout"]),
    totalPrice() {
      let sum = 0;
      this.myCart.forEach((e) => {
        sum += e.price;
      });

      return sum;
    },
    onClickPay() {
      if (this.paymentType == "") {
        swal("Payment type must be choosen", "", "error");
        return;
      }
      this.checkout(this.totalPrice(), this.paymentType);
    },
  },
  created() {
    this.fetchMyCart();
  },
};
</script>

<template>
  <section class="main-content mt-3 mx-auto">
    <section class="product-"></section>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="">
            <div class="card-body">
              <table class="table table-dark">
                <thead>
                  <tr class="title">
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(cart, index) in myCart">
                    <td>{{ index + 1 }}</td>
                    <td>{{ cart.itemName }}</td>
                    <td>Rp. {{ cart.price }}</td>
                  </tr>
                  <tr>
                    <td class="totalprice font-weight-bolder" colspan="2">
                      Total Price
                    </td>
                    <td
                      class="title font-weight-bolde"
                      style="color: #4ab8b8"
                      id="totalprice"
                    >
                      Rp. {{ totalPrice() }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="main-content mt-3 mx-auto">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="">
              <div class="card-body">
                <table class="table table-dark">
                  <thead>
                    <tr class="title">
                      <th>Payment Method</th>
                      <th colspan="4" scope="col">Number</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr class="title">
                      <td>
                        <div class="form-check">
                          <input
                            v-model="paymentType"
                            class="form-check-input"
                            type="radio"
                            name="paymentmethod"
                            id="paymentmethod"
                            value="BCA-72823920202"
                          />
                          <label class="form-check-label" for="paymentmethod">
                            Bank BCA
                          </label>
                        </div>
                      </td>
                      <td>72823920202</td>
                    </tr>

                    <tr class="title">
                      <td>
                        <div class="form-check">
                          <input
                            v-model="paymentType"
                            class="form-check-input"
                            type="radio"
                            name="paymentmethod"
                            id="paymentmethod"
                            value="BNI-43292828319"
                          />
                          <label class="form-check-label" for="paymentmethod">
                            Bank BNI
                          </label>
                        </div>
                      </td>
                      <td>43292828319</td>
                    </tr>

                    <tr class="title">
                      <td>
                        <div class="form-check">
                          <input
                            v-model="paymentType"
                            class="form-check-input"
                            type="radio"
                            name="paymentmethod"
                            id="paymentmethod"
                            value="BRI-20120392932"
                          />
                          <label class="form-check-label" for="paymentmethod">
                            Bank BRI
                          </label>
                        </div>
                      </td>
                      <td>20120392932</td>
                    </tr>

                    <tr class="title">
                      <td>
                        <div class="form-check">
                          <input
                            v-model="paymentType"
                            class="form-check-input"
                            type="radio"
                            name="paymentmethod"
                            id="paymentmethod"
                            value="OVO-081912381012"
                          />
                          <label class="form-check-label" for="paymentmethod">
                            OVO
                          </label>
                        </div>
                      </td>
                      <td>081912381012</td>
                    </tr>

                    <tr class="title">
                      <td>
                        <div class="form-check">
                          <input
                            v-model="paymentType"
                            class="form-check-input"
                            type="radio"
                            name="paymentmethod"
                            id="paymentmethod"
                            value="Gopay-081912381012"
                          />
                          <label class="form-check-label" for="paymentmethod">
                            Gopay
                          </label>
                        </div>
                      </td>
                      <td>081912381012</td>
                    </tr>

                    <tr class="title">
                      <td>
                        <div class="form-check">
                          <input
                            v-model="paymentType"
                            class="form-check-input"
                            type="radio"
                            name="paymentmethod"
                            id="paymentmethod"
                            value="Dana-0812931281991"
                          />
                          <label class="form-check-label" for="paymentmethod">
                            Dana
                          </label>
                        </div>
                      </td>
                      <td>0812931281991</td>
                    </tr>
                  </tbody>
                </table>

                <div class="col text-center">
                  <hr />
                  <button
                    @click.prevent="onClickPay()"
                    type="button"
                    class="btn btn-primary text-center mx-2"
                    style="width: 150px"
                  >
                    Pay
                  </button>
                  <RouterLink to="/mycart">
                    <button class="btn btn-danger" style="width: 150px"
                      >Cancel</button
                    >
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
