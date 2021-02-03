import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Product from "@/views/Product.vue";
import ProductList from "@/views/ProductList.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/product",
    name: "Product",
    component: ProductList
  },
  {
    path: "/product/:id",
    component: Product,
    props: route => ({
      id: Number(route.params.id)
    })
  }
];

// {
//   path: "/product",
//   name: "product",
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () =>
//     import(/* webpackChunkName: "product" */ "../views/Product.vue")
// }

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
