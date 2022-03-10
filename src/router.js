import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // 首页
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "home" */ "./views/Home.vue"),
    },
    //关于
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
    },
    // 案例
    {
      path: "/demo",
      name: "demo",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/demo"),
    },
    // 初级前端
    {
      path: "/elementary",
      name: "elementary",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Elementary.vue"),
    },
    // 中级前端
    {
      path: "/middlerank",
      name: "middlerank",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Middlerank.vue"),
    },
    // 高级前端
    {
      path: "/advanced",
      name: "advanced",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Advanced.vue"),
    },
  ],
});
