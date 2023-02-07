import { createRouter, createWebHistory } from 'vue-router'
import ProjectView from '@/components/pages/projects/ProjectPage.vue'
import AboutView from '@/components/pages/about/AboutPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'projects',
      component: ProjectView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ],
  // Always start at the top after route change
  scrollBehavior(to, from, savedPosition) {
    return (savedPosition) ? savedPosition : { top: 0 }
  },
})

export default router
