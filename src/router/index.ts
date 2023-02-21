import { createRouter, createWebHistory } from 'vue-router'
import ProjectPage from '@/components/pages/projects/ProjectPage.vue'
import WebsitesPage from '@/components/pages/websites/WebsitesPage.vue'
import AboutPage from '@/components/pages/about/AboutPage.vue'
import BlogPage from "@/components/pages/blog/BlogPage.vue";
import {useMainStore} from "@/stores/MainStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'projects',
      component: ProjectPage
    },
    {
      path: '/websites',
      name: 'websites',
      component: WebsitesPage
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

router.beforeEach(() => {
  const mainStore = useMainStore()
  mainStore.openNavMenu = false
})

router.afterEach(() => {
  const mainStore = useMainStore()
  mainStore.checkNavThemeColor()
})

export default router
