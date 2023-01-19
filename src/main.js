import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuenues from "@/components/Vuenues";
import Preview from "@/components/Preview";
import Vuenue from "@/components/Vuenue";
import { store } from "./stores/index";
import Vuex from "vuex";

Vue.config.productionTip = false;

const routes = [
  { path: "/vuenues", name: "vuenues", component: Vuenues },
  { path: "/vuenue/:id", name: "vuenue", component: Vuenue },
  { path: "/preview", name: "preview", component: Preview },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
