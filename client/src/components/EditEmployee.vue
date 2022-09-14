<script>
import { mapWritableState, mapActions } from "pinia";
import { useEmployeesStore } from "../stores/employee";
export default {
  computed: {
    ...mapWritableState(useEmployeesStore, ["oneEmployee"]),
  },
  data() {
    return {
      name: "",
      imageUrl: "",
      birthDate: "",
      status: "",
      department: "",
    };
  },
  methods: {
    ...mapActions(useEmployeesStore, ["editEmployees", "getEmployeesById"]),
    async editEmployee() {
      let name = this.name;
      let imageUrl = this.imageUrl;
      let birthDate = this.birthDate;
      let status = this.status;
      let department = this.department;
      await this.editEmployees(name, imageUrl, birthDate, status, department);
    },
    upload(event) {
      console.log(event.target, "<<< edit");
      this.imageUrl = event.target.files[0];
      console.log(event.target.files, "<< form ");
      console.log(event.target, "<< form ");
    },
  },
  created() {
    this.getEmployeesById(this.$route.params.id).then((result) => {
      this.name = result.name;
      this.imageUrl = result.imageUrl;
      this.birthDate = result.birthDate;
      this.status = result.status;
      this.department = result.department;
    });

    // this.getEmployeesById(this.$route.params.id);
  },
};
</script>
<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-12 col-md-6 offset-md-3">
        <form
          @submit.prevent="editEmployee"
          enctype="multipart/form-data"
          class="shadow"
        >
          <div class="card">
            <div class="card-body">
              <h3 class="card-title mb-3 text-center">Add Employee</h3>
              <div class="mb-3">
                <label for="text" class="form-label">Name</label>
                <input
                  v-model="oneEmployee.name"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">imageUrl</label>
                <div>
                  <input
                    @change="upload"
                    name="imageUrl"
                    id="imageUrl"
                    type="file"
                    class="form-control-file"
                  />
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">birthDate</label>
                <input
                  v-model="oneEmployee.birthDate"
                  type="date"
                  class="form-control"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">status</label>
                <select v-model="oneEmployee.status" class="form-select">
                  <option value="" selected disabled>Choose Status</option>
                  <option value="Permanent">Permanent</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">department</label>
                <select v-model="oneEmployee.department" class="form-select">
                  <option value="" selected disabled>Choose Status</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Warehouse">Warehouse</option>
                </select>
              </div>
              <div class="mb-3">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
