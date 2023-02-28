<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ThemeColorClasses } from "@/models/theme/ThemeColorClasses";
import FetchAppSections from "@/services/FetchAppSections";
import RebalancingToolSection from "@/components/pages/projects/rebalancing-tool/RebalancingToolSection.vue";
import SuggestSection from "@/components/pages/projects/suggest-app/SuggestSection.vue";
import TabSection from "@/components/content-elements/tab-element/TabSection.vue";
import { useMainStore } from "@/stores/MainStore";
import { useStrapiDataStore } from "@/stores/StrapiDataStore";

const mainStore = useMainStore()
const strapiStore = useStrapiDataStore()

// Fetch strapi data on mounted
onMounted(async () => {
  strapiStore.projectData.rebalancingTool = await FetchAppSections.fetchRebalancingToolSection()
  strapiStore.projectData.suggestApp = await FetchAppSections.fetchSuggestAppSection()
})
</script>

<template>
  <RebalancingToolSection
      :ref="(el) => mainStore.setSectionOffset(el, 'rebalancingTool')"
      :data="strapiStore.projectData.rebalancingTool"
  />
  <TabSection
      :theme-color="ThemeColorClasses.REBALANCING_TOOL"
      :data="strapiStore.projectData.rebalancingTool"

  />
  <SuggestSection
      :ref="(el) => mainStore.setSectionOffset(el, 'suggestApp')"
      :data="strapiStore.projectData.suggestApp"
  />
  <TabSection
      :theme-color="ThemeColorClasses.SUGGEST_APP"
      :data="strapiStore.projectData.suggestApp"
  />
</template>
