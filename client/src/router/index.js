import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import HomePage from "../components/HomePage.vue";
import Employee from "../components/Employee.vue";
import Category from "../components/Category.vue";
import AddEmployee from "../components/AddEmployee.vue";
import EditEmployee from "../components/EditEmployee.vue";
import AddProduct from "../components/AddProduct.vue";
import EditProduct from "../components/EditProduct.vue";
import NotFound from "../components/NotFound.vue";
import Swal from "sweetalert2";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
      beforeEnter: (to, from) => {
        // reject the navigation
        if (localStorage.getItem("access_token")) {
          return true;
        }
        return "/login";
      },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: (to, from) => {
        // reject the navigation
        if (!localStorage.getItem("access_token")) {
          return true;
        }
        return "/";
      },
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      beforeEnter: (to, from) => {
        // reject the navigation
        if (localStorage.getItem("access_token")) {
          return true;
        }
        return "/";
      },
    },
    {
      path: "/employees",
      name: "employees",
      component: Employee,
      beforeEnter: (to, from) => {
        // reject the navigation
        if (localStorage.getItem("access_token")) {
          return true;
        }
        return (
          "/login",
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Login First!",
          })
        );
      },
    },
    // {
    //   path: "/categories",
    //   name: "categories",
    //   component: Category,
    //   beforeEnter: (to, from) => {
    //     // reject the navigation
    //     if (localStorage.getItem("access_token")) {
    //       return true;
    //     }
    //     return (
    //       "/login",
    //       Swal.fire({
    //         icon: "error",
    //         title: "Oops...",
    //         text: "Login First!",
    //       })
    //     );
    //   },
    // },
    {
      path: "/addemployee",
      name: "addemployee",
      component: AddEmployee,
      beforeEnter: (to, from) => {
        // reject the navigation
        if (localStorage.getItem("access_token")) {
          return true;
        }
        return (
          "/login",
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Login First!",
          })
        );
      },
    },
    {
      path: "/addproduct",
      name: "addproduct",
      component: AddProduct,
      beforeEnter: (to, from) => {
        // reject the navigation
        if (localStorage.getItem("access_token")) {
          return true;
        }
        return (
          "/login",
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Login First!",
          })
        );
      },
    },
    {
      path: "/editemployee/:id",
      name: "editemployee",
      component: EditEmployee,
      beforeEnter: (to, from) => {
        // reject the navigation
        if (localStorage.getItem("access_token")) {
          return true;
        }
        return (
          "/login",
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Login First!",
          })
        );
      },
    },
    {
      path: "/editproduct/:id",
      name: "editproduct",
      component: EditProduct,
      beforeEnter: (to, from) => {
        // reject the navigation
        if (localStorage.getItem("access_token")) {
          return true;
        }
        return (
          "/login",
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Login First!",
          })
        );
      },
    },
    {
      path: "/Notfound",
      name: "Notfound",
      component: NotFound,
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

export default router;
