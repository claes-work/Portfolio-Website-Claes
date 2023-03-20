import { createRouter, createWebHistory } from 'vue-router'
import ProjectPage from '@/components/pages/projects/ProjectPage.vue'
import WebsitesPage from '@/components/pages/websites/WebsitesPage.vue'
import AboutPage from '@/components/pages/about/AboutPage.vue'
import BlogPage from "@/components/pages/blog/BlogPage.vue";
import {useMainStore} from "@/stores/MainStore";
import {checkNavThemeColor} from "@/composables/ThemeHandler";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/apps',
      name: 'apps',
      component: ProjectPage
    },
    {
      path: '/websites',
      name: 'websites',
      component: WebsitesPage
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

// Ensure that transition animation occurred halfway before actually changing the route
router.beforeResolve(async () => {
  const mainStore = useMainStore()
  mainStore.showPageTransition = true

  await new Promise(resolve => setTimeout(
      resolve, 700)
  );
})

// Always close the navbar by resetting the store variable
router.beforeEach(() => {
  const mainStore = useMainStore()
  mainStore.openNavMenu = false
})

// Always check what page navbar theme color should be applied
router.afterEach(() => {
  checkNavThemeColor()
  const mainStore = useMainStore()

  setTimeout(() => {
    mainStore.showPageTransition = false
  },  680)
})

export default router
