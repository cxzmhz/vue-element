import Vue from "vue";
import Router from "vue-router";

import Directive from "../components/Directive.vue"
import onemit from "../components/onemit.vue"

Vue.use(Router);
export default new Router({
  mode: 'history',//默认为hash，即路由前面会有一个#
  fallback: false,//兼容ie9的hash模式
  routes: [
    {
      path: "/",
      redirect: "/directive"
    },
    { path: "/directive", component: Directive },
    { path: "/onemit", component: onemit }
  ]
})
