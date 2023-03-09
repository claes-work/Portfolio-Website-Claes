import router from "@/router";
import { ThemeColorClasses } from "@/models/theme/ThemeColorClasses";
import type { ThemeColorClasses as ThemeColorClassesType } from "@/models/theme/ThemeColorClasses";
import type { Ref } from "vue";
import { useMainStore } from "@/stores/MainStore";
import type { SectionOffsets } from "@/models/theme/SectionOffsets";


/**
 * Compare scroll offset with section offsets in order to set the theme color
 *
 * @param themeClass Ref<ThemeColorClassesType>
 * @param offsets SectionOffsets
 */
export function checkNavThemeOnScroll(themeClass: Ref<ThemeColorClassesType>, offsets: SectionOffsets) {

    const routerPath = router.currentRoute.value.path

    // project page theme color set
    if (
        routerPath === '/'
        && window.scrollY > offsets.rebalancingTool
        && window.scrollY < offsets.suggestApp
    ) {
        themeClass.value = ThemeColorClasses.REBALANCING_TOOL
    }

    if (
        routerPath === '/'
        && window.scrollY > offsets.suggestApp
    ) {
        themeClass.value = ThemeColorClasses.SUGGEST_APP
    }

    /********************************************************************************/
    /* --------------------------------- Websites --------------------------------- */
    /********************************************************************************/

    // websites page theme color set
    if (
        routerPath === '/websites'
        && window.scrollY > offsets.pureAir
        && window.scrollY < (offsets.diewellWebsite - 150)
    ) {
        themeClass.value = ThemeColorClasses.PURE_AIR
    }

    if (
        routerPath === '/websites'
        && window.scrollY > (offsets.diewellWebsite - 20)
        && window.scrollY < (offsets.broadyPictures - 40)
    ) {
        themeClass.value = ThemeColorClasses.DIEWELL_WEBSITE
    }

    if (
        routerPath === '/websites'
        && window.scrollY > (offsets.broadyPictures - 40)
    ) {
        themeClass.value = ThemeColorClasses.BROADY_PICTURES
    }
}

/**
 * Initial color check after route change
 */
export function checkNavThemeColor() {
    const mainStore = useMainStore()

    if (
        router.currentRoute.value.path === '/' ||
        router.currentRoute.value.path === '/about' ||
        router.currentRoute.value.path === '/blog'
    ) {
        mainStore.themeClass = ThemeColorClasses.REBALANCING_TOOL
    }
    if (router.currentRoute.value.path === '/websites') {
        mainStore.themeClass = ThemeColorClasses.PURE_AIR
    }
}
