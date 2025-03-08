import { createRouter, createWebHistory } from "vue-router";
import Reports from "@/views/reports.vue";
const router = createRouter({
  linkActiveClass:
    "text-slate-50 bg-indigo-600 rounded-md py-1 px-4  w-[200px] transition-all duration-300 font-normal ",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/hisobotlar" },
    { path: "/hisobotlar", name: "Hisobotlar", component: Reports },
    {
      path: "/mahsulotlar",
      name: "Mahsulotlar",
      component: () => import("../views/pradacts.vue"),
    },
    {
      path: "/mijozlar",
      name: "Mijozlar",
      component: () => import("../views/clients.vue"),
    },
    {
      path: "/foydalanovchilar",
      name: "Foydalanovchilar",
      component: () => import("../views/users.vue"),
    },
    {
      path: "/olchovlar",
      name: "Standart o'lchovlar",
      component: () => import("../views/sizes.vue"),
    },
    {
      path: "/valyutalar",
      name: "Valyutalar",
      component: () => import("../views/currency.vue"),
    },
    {
      path: "/kategoriyalar",
      name: "Kategoriyalar",
      component: () => import("../views/category.vue"),
    },
    {
      path: "/taminotchilar",
      name: "Taminotchilar",
      component: () => import("../views/providers.vue"),
    },
    {
      path: "/omborlar",
      name: "Omborlar",
      component: () => import("../views/warehouses.vue"),
    },

    { path: "/login", component: () => import("../views/login.vue") },
  ],
});

export default router;
