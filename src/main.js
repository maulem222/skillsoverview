import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Comp_ABOUTME from "./Comp_ABOUTME.vue";
import Comp_ASPNETJQ from "./Comp_ASPNETJQ.vue";
import Comp_ASPNETJQM from "./Comp_ASPNETJQM.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/aboutme", name: "aboutme", component: Comp_ABOUTME },
  { path: "/aspnetjquery", name: "aspnetjquery", component: Comp_ASPNETJQ },
  { path: "/aspnetjqm", name: "aspnetjqm", component: Comp_ASPNETJQM }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

