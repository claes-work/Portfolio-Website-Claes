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
  ]
})

export default router
