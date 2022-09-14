<script>
import { mapActions, mapWritableState, mapState } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  computed: {
    ...mapWritableState(useUserStore, ["userProfile", "editUserProfile"]),
  },
  methods: {
    ...mapActions(useUserStore, ["editProfile"]),
    editProfileComponent() {
      this.editUserProfile = this.userProfile;
      this.editProfile(this.editUserProfile);
    },
    cancel() {
      this.$router.push("/profile");
    },
  },
};
</script>

<template>
  <!-- Edit profile section -->
  <section
    class="vh-100 page"
    style="background-color: #0f3d3e"
    id="login-section"
  >
    <div class="container py-4 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 1rem">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="../assets/edit-profile.jpg"
                  alt="login form"
                  class="img-fluid"
                  style="border-radius: 1rem 0 0 1rem"
                />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body text-black">
                  <form
                    id="login-form"
                    novalidate
                    @submit.prevent="editProfileComponent"
                  >
                    <div class="form-outline mb-1">
                      <label class="form-label">Username</label>
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        v-model="userProfile.username"
                      />
                    </div>
                    <div class="form-outline mb-1">
                      <label class="form-label">Email</label>
                      <input
                        type="email"
                        class="form-control form-control-sm"
                        v-model="userProfile.email"
                      />
                    </div>
                    <div class="form-outline mb-1">
                      <label class="form-label">Password</label>
                      <input
                        type="password"
                        class="form-control form-control-sm"
                        v-model="userProfile.password"
                      />
                    </div>
                    <div class="form-outline mb-1">
                      <label class="form-label">Profile Picture</label>
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        v-model="userProfile.profilePicture"
                      />
                    </div>
                    <div class="form-outline mb-1">
                      <label class="form-label">Location</label>
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        v-model="userProfile.location"
                      />
                    </div>
                    <div class="form-outline mb-1">
                      <label class="form-label">About</label>
                      <input
                        type="textarea"
                        class="form-control form-control-sm"
                        style="height: 60px"
                        v-model="userProfile.description"
                      />
                    </div>

                    <div class="pt-1">
                      <button
                        class="btn btn-dark btn-md btn-block button"
                        @click="cancel"
                      >
                        Cancel
                      </button>
                      <button
                        class="btn btn-dark btn-md btn-block mx-2 button"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End of edit profile section -->
</template>
