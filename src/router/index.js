// Composables
import { createRouter, createWebHistory } from "vue-router";
import HomeApp from "@/views/HomeApp.vue";
const routes = [
  {
    path: "/LARD-technical-task/",
    component: HomeApp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
