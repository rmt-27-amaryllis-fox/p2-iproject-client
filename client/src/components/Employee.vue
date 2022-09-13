<script>
import CardEmploye from "./CardEmploye.vue";
import { mapState } from "pinia";
import { useEmployeesStore } from "../stores/employee";
export default {
  components: {
    CardEmploye,
  },
  methods: {},
  computed: {
    ...mapState(useEmployeesStore, ["employees"]),
  },
};
</script>
<template>
  <div class="container mt-3">
    <div class="row mt-3">
      <div class="d-flex justify-content-center">
        <h4>List Employees</h4>
      </div>
      <!-- CardHome -->
      <CardEmploye v-for="el in employees" :key="el.id" :data="el" />

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
