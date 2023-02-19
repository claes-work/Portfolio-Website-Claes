<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import type { IRebalancingTool } from "@/models/rebalancing-tool/IRebalancingTool";
import { ThemeColorClasses } from "@/models/ThemeColorClasses";
import { rebalancingToolInsides } from "@/data/rebalancing-tool/RebalancingToolInsides"
import { suggestAppInsides } from "@/data/suggest-app/SuggestAppInsides"
import FetchAppSections from "@/services/FetchAppSections";
import RebalancingToolSection from "@/components/pages/projects/rebalancing-tool/RebalancingToolSection.vue";
import SuggestSection from "@/components/pages/projects/suggest-app/SuggestSection.vue";
import TabSection from "@/components/content-elements/tab-element/TabSection.vue";


// Typed data from strapi api
const rebalancingToolData: Ref<IRebalancingTool> = ref({} as IRebalancingTool)

// Fetch strapi data on mounted
onMounted(async () => {
  rebalancingToolData.value = await FetchAppSections.fetchRebalancingToolSection()
})

</script>

<template>
  <RebalancingToolSection :data="rebalancingToolData" />
  <TabSection
      :theme-color="ThemeColorClasses.PORTFOLIO_APP"
      :project-tabs="rebalancingToolInsides"
  />
  <SuggestSection />
  <TabSection
      :theme-color="ThemeColorClasses.SUGGEST_APP"
      :project-tabs="suggestAppInsides"
  />
</template>
