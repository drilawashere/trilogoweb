import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutPage.vue')
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: () => import('../views/SolutionsPage.vue')
  },
  {
    path: '/solution/:id',
    name: 'SolutionDetails',
    component: () => import('../views/SolutionDetails.vue')
  },
  {
    path: '/case-study/:id',
    name: 'CaseStudy',
    component: () => import('../views/CaseStudy.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactPage.vue')
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router