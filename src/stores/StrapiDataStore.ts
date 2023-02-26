import { reactive } from 'vue'
import { defineStore } from 'pinia'
import type { IRebalancingTool } from "@/models/rebalancing-tool/IRebalancingTool";
import type { IProjectData } from "@/models/IProjectData";

export const useStrapiDataStore = defineStore('strapiDataStore', () => {

  // project data from strapi api
  const projectData: IProjectData = reactive({
    rebalancingTool: {} as IRebalancingTool
  })

  function loadLocale() {

  }

  return { projectData }
})
