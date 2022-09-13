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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/employees",
      name: "employees",
      component: Employee,
    },
    {
      path: "/categories",
      name: "categories",
      component: Category,
    },
    {
      path: "/addemployee",
      name: "addemployee",
      component: AddEmployee,
    },
    {
      path: "/addproduct",
      name: "addproduct",
      component: AddProduct,
    },
    {
      path: "/editemployee/:id",
      name: "editemployee",
      component: EditEmployee,
    },
    {
      path: "/editproduct/:id",
      name: "editproduct",
      component: EditProduct,
    },
  ],
});

export default router;
