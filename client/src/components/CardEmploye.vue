<script>
import { mapActions } from "pinia";
import { useEmployeesStore } from "../stores/employee";
export default {
  props: ["data"],
  methods: {
    ...mapActions(useEmployeesStore, [
      "getEmployeesById",
      "editEmployees",
      "deleteEmployeesById",
    ]),
    async edit() {
      console.log(this.data.cloudinary_id, "<<< dari ccard");
      this.$router.push(`/editemployee/${this.data.id}`);
    },
    async deleted() {
      await this.deleteEmployeesById(this.data.cloudinary_id);
    },
  },
};
</script>
<template>
  <div class="col-12 col-md-3 mt-3">
    <div class="card shadow">
      <img :src="data.imageUrl" alt="image" class="card-img-top" />
      <div class="card-body">
        <h6 class="card-title">
          <span class="badge bg-secondary">Name: {{ data.name }}</span>
        </h6>
        <h6 class="card-text">
          <span class="badge bg-secondary">Status: {{ data.status }}</span>
        </h6>
        <h6 class="card-text">
          <span class="badge bg-secondary"
            >Department: {{ data.department }}</span
          >
        </h6>
        <div class="row mt-2">
          <div class="col mt-2 mb-2 d-grid">
            <button @click="deleted" type="submit" class="btn btn-primary mb-2">
              Delete
            </button>
            <button @click="edit" type="submit" class="btn btn-primary">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  height: 100%;
  transition: 0.5s;
}
.card:hover {
  transform: scale(1.1);
}
</style>
