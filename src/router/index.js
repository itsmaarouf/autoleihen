import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cars",
    name: "Cars",
    component: () =>
        import( "../views/Cars.vue"),
  },
  {
    path: "/minibus",
    name: "Minibus",
    component: () =>
        import( "../views/Minibus.vue"),
  },
  {
    path: "/services",
    name: "Services",
    component: () =>
        import( "../views/Services.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () =>
        import( "../views/News.vue"),
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    component: () =>
        import( "../views/Testimonials.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
        import( "../views/About.vue"),
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
