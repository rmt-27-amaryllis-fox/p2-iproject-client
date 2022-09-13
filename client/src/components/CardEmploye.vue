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
      this.$router.push(`/editemployee/${this.data.cloudinary_id}`);
      await this.getEmployeesById(this.data.id);
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
        <h6 class="card-title">Name: {{ data.name }}</h6>
        <h6 class="card-text">Status: {{ data.status }}</h6>
        <h6 class="card-text">Department: {{ data.department }}</h6>
        <div class="row">
          <div class="col mt-2">
            <button @click="edit" type="submit" class="btn btn-outline-primary">
              Edit
            </button>
            <button
              @click="deleted"
              type="submit"
              class="btn btn-outline-primary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
