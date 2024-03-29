import type { Ref } from 'vue'
import {reactive, ref} from 'vue'
import { defineStore } from 'pinia'
import type { ThemeColorClasses as ThemeColorClassesType} from "@/models/theme/ThemeColorClasses"
import { ThemeColorClasses } from "@/models/theme/ThemeColorClasses"
import { checkNavThemeOnScroll } from "@/composables/ThemeHandler";
import type {SectionOffsets} from "@/models/theme/SectionOffsets";

export const useMainStore = defineStore('mainStore', () => {

  // DOM loaded flag
  const hasLoaded: Ref<boolean> = ref(false)
  const showPageTransition: Ref<boolean> = ref(false)

  // remove body overlay after DOM has loaded
  window.addEventListener('DOMContentLoaded', () => {
    hasLoaded.value = true
  })

  /*************** Window Sizes ***************/

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
    broadyPictures: 0
  })

  // Set the section offset for each section that is passed
  async function setSectionOffset(el: any, section: string) {
    await new Promise(() => setTimeout(
        () => {
          if (el && el.$el) {
            // @ts-ignore
            offsets[section] = el.$el.offsetTop
          }
        }, 700)
    );
  }

  // Check viewport with on resize
  window.onscroll = async (): Promise<void> => {
    await new Promise(() => setTimeout(
        () => {
          checkNavThemeOnScroll(themeClass, offsets)
        }, 700)
    );
  }

  return {
    hasLoaded,
    showPageTransition,

    // Window Sizes
    isDesktop,
    openNavMenu,

    // Dynamic Theme Color
    themeClass,
    offsets,
    setSectionOffset
  }
})
