<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/user";
export default {
  props: {
    game: Object,
  },
  methods: {
    ...mapActions(useUserStore, ["addToCart"]),
    converToIdr(money) {
      if (!money) {
        return 0;
      }
      return Math.round(money * 15000);
    },
  },
};
</script>

<template>
  <div class="col-md-4">
    <div class="card border mb-4">
      <div class="card-body">
        <h5 class="card-title">{{ game.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ game.type }}</h6>
        <p class="card-text short_desc">
          Lowest Price: Rp. {{ converToIdr(game.currentLowestPrice) }}
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
            >
              Store
            </button>
          </div>

          <div
            class="modal fade bd-example-modal-lg"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <div class="card container">
                          <div class="card-body">
                            <table class="table table-hover">
                              <thead>
                                <tr class="title">
                                  <th colspan="">Seller</th>
                                  <th colspan="" scope="col">Prices</th>
                                  <th colspan="" scope="col">URL</th>
                                </tr>
                              </thead>

                              <tbody v-for="store in game.stores">
                                <tr class="title">
                                  <td>
                                    <div class="form-check">
                                      <label
                                        class="form-check-label"
                                        for="paymentmethod"
                                      >
                                        {{store.seller}}
                                      </label>
                                    </div>
                                  </td>
                                  <td>Rp. {{converToIdr(store.price)}}</td>
                                  <td>
                                    <a :href="store.url" target="_blank">Visit</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div class="btn-group">
            <button
              @click.prevent="
                addToCart(game.name, converToIdr(game.currentLowestPrice))
              "
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* .short_desc {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    } */
</style>
