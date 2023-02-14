import { createRouter, createWebHistory } from 'vue-router'
import ProjectPage from '@/components/pages/projects/ProjectPage.vue'
import AboutPage from '@/components/pages/about/AboutPage.vue'
import BlogPage from "@/components/pages/blog/BlogPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'projects',
      component: ProjectPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogPage
    }
  ],
  // Always start at the top after route change
  scrollBehavior(to, from, savedPosition) {
    return (savedPosition) ? savedPosition : { top: 0 }
  },
})

export default router
