import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Overview from "../views/Overview.vue"
import Discussions from "../views/Discussions.vue"
import Tests from "../views/Tests.vue"
import Resource from "../views/Resource.vue"
import Assessments from "../views/Assessments.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect : "/discussions"
  },
  {
    path: '/overview',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/discussions',
    name: 'Discussions',
    component: Discussions
  },
  {
    path: '/tests',
    name: 'Tests',
    component: Tests
  },
  {
    path: '/resources',
    name: 'Resource',
    component: Resource
  },
  {
    path: '/assessments',
    name: 'Assessments',
    component: Assessments
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   route level code-splitting
  //   this generates a separate chunk (about.[hash].js) for this route
  //   which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
