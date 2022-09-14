<script>
import { mapState } from "pinia";
import { useInventoriesStore } from "../stores/inventories";
import CardCategory from "./CardCategory.vue";
export default {
  computed: {
    ...mapState(useInventoriesStore, ["categories"]),
  },
  components: {
    CardCategory,
  },
};
</script>

<template>
  <div class="container mt-3">
    <div class="row mt-3">
      <div class="d-flex justify-content-center">
        <h4>List Categories</h4>
      </div>
      <!-- CardHome -->
      <CardCategory v-for="el in categories" :key="el.id" :data="el" />

      <!-- <CardHome v-for="el in inventories" :key="el.id" :data="el" /> -->
      <!-- <div class="container d-flex text-align-center justify-content-center">
            <nav aria-label="Page navigation example" class="mt-5">
              <ul class="pagination">
                <li @click="previousPage" class="page-item">
                  <a class="page-link" href="#">Previous</a>
                </li>
  
                <li class="page-item">
                  <a class="page-link">{{ currentPage }}</a>
                </li>
  
                <li @click="nextPage" class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
                <li class="page-item">
                  <a class="page-link">{{ totalPages }}</a>
                </li>
              </ul>
            </nav>
          </div> -->
    </div>
  </div>
</template>
