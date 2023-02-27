import { reactive, ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type { IRebalancingTool } from "@/models/rebalancing-tool/IRebalancingTool";
import type { ISuggestApp } from "@/models/suggest-app/ISuggestApp";
import type { IProjectData } from "@/models/IProjectData";
import FetchAppSections from "@/services/FetchAppSections";
import { AllLocales } from "@/models/AllLocales";
import type { AllLocales as AllLocalesType} from "@/models/AllLocales";

export const useStrapiDataStore = defineStore('strapiDataStore', () => {

  // project data from strapi api
  const projectData: IProjectData = reactive({
    rebalancingTool: {} as IRebalancingTool,
    suggestApp: {} as ISuggestApp
  })

  /************** Localization **************/

  const activeLocale: Ref<AllLocalesType> = ref(AllLocales.DE)

  async function changeLocale(newLocale: AllLocalesType) {
    activeLocale.value = newLocale
    projectData.rebalancingTool = await FetchAppSections.fetchRebalancingToolSection(newLocale)
  }

  return { projectData, activeLocale, changeLocale }
})
