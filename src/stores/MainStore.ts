import type {Ref} from 'vue'
import {reactive, ref} from 'vue'
import {defineStore} from 'pinia'
import type {ThemeColorClasses as ThemeColorClassesType} from "@/models/ThemeColorClasses"
import {ThemeColorClasses} from "@/models/ThemeColorClasses"
import router from "@/router";


export const useMainStore = defineStore('mainStore', () => {

  // Flag that indicates if the viewport with is at least 768px
  const isDesktop: Ref<boolean> = ref(window.innerWidth >= 991)

  // Flag that indicates if the nav menu is open
  const openNavMenu: Ref<boolean> = ref(false)

  // Check viewport with on resize
  window.onresize = (): void => {
    isDesktop.value =  (window.innerWidth >= 991)
  }

  /*********** Dynamic Theme Color ***********/


  // Dynamic theme color class in nav bar
  const themeClass: Ref<ThemeColorClassesType> = ref(ThemeColorClasses.REBALANCING_TOOL)

  // Check viewport with on resize
  window.onscroll = (): void => {
    checkNavThemeOnScroll()
  }

  function checkNavThemeOnScroll() {
    // project page theme color set
    if (router.currentRoute.value.path === '/' && window.scrollY >= 0 && window.scrollY < 1224) {
      themeClass.value = ThemeColorClasses.REBALANCING_TOOL
    }
    if (router.currentRoute.value.path === '/' && window.scrollY >= 1224) {
      themeClass.value = ThemeColorClasses.SUGGEST_APP
    }

    // websites page theme color set
    if (router.currentRoute.value.path === '/websites' && window.scrollY >= 0 && window.scrollY < 714) {
      themeClass.value = ThemeColorClasses.PURE_AIR
    }
    if (router.currentRoute.value.path === '/websites' && window.scrollY >= 714 && window.scrollY < 1530) {
      themeClass.value = ThemeColorClasses.DIEWELL_WEBSITE
    }
    if (router.currentRoute.value.path === '/websites' && window.scrollY >= 1530) {
      themeClass.value = ThemeColorClasses.BROADY_PICTURES
    }
  }

  function checkNavThemeColor() {
    if (
        router.currentRoute.value.path === '/' ||
        router.currentRoute.value.path === '/about' ||
        router.currentRoute.value.path === '/blog'
    ) {
      themeClass.value = ThemeColorClasses.REBALANCING_TOOL
    }
    if (router.currentRoute.value.path === '/websites') {
      themeClass.value = ThemeColorClasses.PURE_AIR
    }
  }



  return { isDesktop, openNavMenu, themeClass, checkNavThemeColor }
})
