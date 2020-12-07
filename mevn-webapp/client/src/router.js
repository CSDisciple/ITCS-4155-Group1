import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Posts from '@/components/Posts'
import NewPost from '@/components/NewPost'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/posts",
      name: "Posts",
      component: () => import("./components/Posts.vue")
    },
    {
      path: "/create",
      name: "Create",
      component: () => import("./views/Create.vue")
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("./components/faq.vue")
    }

  ]
});
