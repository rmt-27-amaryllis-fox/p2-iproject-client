import { createRouter, createWebHistory } from "vue-router";
import SymptomsCheck from "../views/InputSymptoms.vue";
import SymptomsResult from "../views/SymptomsRankCards.vue";
import SearchDiseases from "../views/SearchDiseases.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Home",
      path: "/",
      component: HomeView,
    },
    {
      name: "Symptoms Check",
      path: "/symptomscheck",
      component: SymptomsCheck,
    },
    {
      name: "Symptoms Result",
      path: "/symptomsresult",
      component: SymptomsResult,
    },
    {
      name: "ICD 10",
      path: "/icd10",
      component: SearchDiseases,
    },
  ],
});

export default router;
