import { createRouter, createWebHistory } from "vue-router";
import todo from "@m/todo/router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      ...todo,
    },
  ],
});

export default router;
