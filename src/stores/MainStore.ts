import {reactive, ref} from 'vue'
import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import type { ThemeColorEnum as ThemeColorEnumType } from "@/models/ThemeColorEnum"
import { ThemeColorEnum } from "@/models/ThemeColorEnum"
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


  // Dynamic theme colors in nav bar
  const themeColor = reactive({
    logo: ThemeColorEnum.REBALANCING_TOOL_LOGO,
    background: ThemeColorEnum.REBALANCING_TOOL_BACKGROUND,
    text: ThemeColorEnum.REBALANCING_TOOL_TEXT
  })

  // Check viewport with on resize
  window.onscroll = (): void => {
    checkNavThemeOnScroll()
  }

  function checkNavThemeOnScroll() {
    // project page theme color set
    if (router.currentRoute.value.path === '/' && window.scrollY >= 0 && window.scrollY < 1224) {
      themeColor.background = ThemeColorEnum.REBALANCING_TOOL_LOGO
      themeColor.text = ThemeColorEnum.REBALANCING_TOOL_TEXT
      themeColor.logo = ThemeColorEnum.REBALANCING_TOOL_LOGO
    }
    if (router.currentRoute.value.path === '/' && window.scrollY >= 1224) {
      themeColor.background = ThemeColorEnum.SUGGEST_APP_LOGO
      themeColor.text = ThemeColorEnum.SUGGEST_APP_TEXT
      themeColor.logo = ThemeColorEnum.SUGGEST_APP_LOGO
    }

    // websites page theme color set
    if (router.currentRoute.value.path === '/websites' && window.scrollY >= 0 && window.scrollY < 714) {
      themeColor.background = ThemeColorEnum.PURE_AIR_BACKGROUND
      themeColor.text = ThemeColorEnum.PURE_AIR_TEXT
      themeColor.logo = ThemeColorEnum.PURE_AIR_LOGO
    }
    if (router.currentRoute.value.path === '/websites' && window.scrollY >= 714 && window.scrollY < 1530) {
      themeColor.background = ThemeColorEnum.DIEWELL_WEBSITE_BACKGROUND
      themeColor.text = ThemeColorEnum.DIEWELL_WEBSITE_TEXT
      themeColor.logo = ThemeColorEnum.DIEWELL_WEBSITE_LOGO
    }
    if (router.currentRoute.value.path === '/websites' && window.scrollY >= 1530) {
      themeColor.background = ThemeColorEnum.BROADY_PICTURES_BACKGROUND
      themeColor.text = ThemeColorEnum.BROADY_PICTURES_TEXT
      themeColor.logo = ThemeColorEnum.BROADY_PICTURES_LOGO
    }
  }

  function checkNavThemeColor() {
    if (
        router.currentRoute.value.path === '/' ||
        router.currentRoute.value.path === '/about' ||
        router.currentRoute.value.path === '/blog'
    ) {
      themeColor.background = ThemeColorEnum.REBALANCING_TOOL_LOGO
      themeColor.text = ThemeColorEnum.REBALANCING_TOOL_TEXT
      themeColor.logo = ThemeColorEnum.REBALANCING_TOOL_LOGO
    }
    if (router.currentRoute.value.path === '/websites') {
      themeColor.background = ThemeColorEnum.PURE_AIR_BACKGROUND
      themeColor.text = ThemeColorEnum.PURE_AIR_TEXT
      themeColor.logo = ThemeColorEnum.PURE_AIR_LOGO
    }
  }



  return { isDesktop, openNavMenu, themeColor, checkNavThemeColor }
})
