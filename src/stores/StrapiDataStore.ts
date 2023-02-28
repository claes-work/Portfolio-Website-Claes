import { reactive, ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type { IRebalancingTool } from "@/models/projects/rebalancing-tool/IRebalancingTool";
import type { ISuggestApp } from "@/models/projects/suggest-app/ISuggestApp";
import type { IProjectData } from "@/models/IProjectData";
import FetchAppSections from "@/services/FetchAppSections";
import { AllLocales } from "@/models/AllLocales";
import type { AllLocales as AllLocalesType} from "@/models/AllLocales";
import type { INavbar } from "@/models/components/navbar/INavbar";
import router from "@/router";
import type { IFooter } from "@/models/components/footer/IFooter";
import type { IPureAir } from "@/models/websites/pure-air/IPureAir";
import type { IDiewellWebsite } from "@/models/websites/diewell-website/IDiewellWebsite";
import type { IBroadyPictures } from "@/models/websites/broady-pictures/IBroadyPictures";
import type { IWebsiteData } from "@/models/IWebsiteData";

export const useStrapiDataStore = defineStore('strapiDataStore', () => {

  // navbar and footer data from strapi api
  const navBarData: Ref<INavbar> = ref({} as INavbar)
  const footerData: Ref<IFooter> = ref({} as IFooter)

  // project data from strapi api
  const projectData: IProjectData = reactive({
    rebalancingTool: {} as IRebalancingTool,
    suggestApp: {} as ISuggestApp
  })

  // website data from strapi api
  const websiteData: IWebsiteData = reactive({
    pureAir: {} as IPureAir,
    diewellWebsite: {} as IDiewellWebsite,
    broadyPictures: {} as IBroadyPictures
  })

  /************** Localization **************/

  const activeLocale: Ref<AllLocalesType> = ref(AllLocales.DE)

  /**
   * Change locale and fetch sections data again
   *
   * @param newLocale
   *
   * @return Promise<void>
   */
  async function changeLocale(newLocale: AllLocalesType): Promise<void> {

    const routerPath = router.currentRoute.value.path
    activeLocale.value = newLocale

    // Always fetch navbar and footer data
    navBarData.value = await FetchAppSections.fetchNavbarData(newLocale)
    footerData.value = await FetchAppSections.fetchFooterData(newLocale)

    // Fetch project data if route is projects page
    if (routerPath === '/') {
      projectData.rebalancingTool = await FetchAppSections.fetchRebalancingToolSection(newLocale)
      projectData.suggestApp = await FetchAppSections.fetchSuggestAppSection(newLocale)
    }

    // Fetch website data if route is websites page
    if (routerPath === '/websites') {

    }
  }

  return { navBarData, footerData, projectData, websiteData, activeLocale, changeLocale }
})
