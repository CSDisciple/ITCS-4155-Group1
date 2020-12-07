import Vue from 'vue'
import Router from 'vue-router'
import Community from '@/components/Community'
import NewPost from '@/components/NewPost'
import Home from '@/components/Home'
import About from '@/components/About'
import Faq from '@/components/Faq'
import Create from '@/components/Create'
import Login from '@/components/Login'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/community',
      name: 'Community',
      component: Community
    },
    {
      path: '/community/new-post',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
  
  ]
})
