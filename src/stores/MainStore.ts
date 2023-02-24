import type { Ref } from 'vue'
import {reactive, ref} from 'vue'
import { defineStore } from 'pinia'
import type { ThemeColorClasses as ThemeColorClassesType} from "@/models/ThemeColorClasses"
import { ThemeColorClasses } from "@/models/ThemeColorClasses"
import { checkNavThemeOnScroll } from "@/composables/ThemeHandler";
import type {SectionOffsets} from "@/models/SectionOffsets";


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

  // Section offsets
  const offsets: SectionOffsets = reactive({
    rebalancingTool: 0,
    suggestApp: 0,
    pureAir: 0,
    diewellWebsite: 0,
    broadyPrictures: 0
  })

  // Check viewport with on resize
  window.onscroll = (): void => {
    checkNavThemeOnScroll(themeClass, offsets)
  }

  return {
    isDesktop,
    openNavMenu,
    themeClass,
    offsets
  }
})
