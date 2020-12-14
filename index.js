import Vue from 'vue'
import Router from 'vue-router'
import Community from '@/components/Community'
import NewPost from '@/components/NewPost'
import Home from '@/components/Home'
import About from '@/components/About'
import Faq from '@/components/Faq'
import Create from '@/components/Create'
import Login from '@/components/Login'
import Story1 from '@/components/Story1' 
import Story2 from '@/components/Story2' 
import Story3 from '@/components/Story3' 
import Story4 from '@/components/Story4' 
import Story5 from '@/components/Story5' 
import Story6 from '@/components/Story6' 
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

     {
      path: '/Story1',
      name: 'Story1',
      component: Story1
    }, 

    {
      path: '/Story2',
      name: 'Story2',
      component: Story2
    }, 

    {
      path: '/Story3',
      name: 'Story3',
      component: Story3
    }, 

    {
      path: '/Story4',
      name: 'Story4',
      component: Story4
    }, 

    {
      path: '/Story5',
      name: 'Story5',
      component: Story5
    }, 

    {
      path: '/Story6',
      name: 'Story6',
      component: Story6
    }, 

  
  ]
})
