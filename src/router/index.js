import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home.vue";
import Portofolio from "@/views/portofolio.vue";
import About from "@/views/about.vue";

import DefaultLayout from "@/layout/default.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: DefaultLayout,
      redirect: "/home",
      children: [
        {
          path: "home",
          name: "home",
          component: Home,
        },
        {
          path: "portofolio",
          name: "portofolio",
          component: Portofolio,
        },
        {
          path: "about",
          name: "about",
          component: About,
        },
      ],
    },
  ],
});

export default router;
