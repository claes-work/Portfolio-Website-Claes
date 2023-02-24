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
import { useMainStore } from "@/stores/MainStore";

const mainStore = useMainStore()

// section references
const rebalancingToolSection = ref(null)
const suggestAppSection = ref(null)


// Typed data from strapi api
const rebalancingToolData: Ref<IRebalancingTool> = ref({} as IRebalancingTool)

// Fetch strapi data on mounted
onMounted(async () => {
  rebalancingToolData.value = await FetchAppSections.fetchRebalancingToolSection()

  // Set the section offsets after page load
  mainStore.offsets.rebalancingTool = rebalancingToolSection.value.$el.offsetTop
  mainStore.offsets.suggestApp = suggestAppSection.value.$el.offsetTop
})

</script>

<template>
  <RebalancingToolSection
      ref="rebalancingToolSection"
      :data="rebalancingToolData"
  />
  <TabSection
      :theme-color="ThemeColorClasses.REBALANCING_TOOL"
      :project-tabs="rebalancingToolInsides"
  />
  <SuggestSection ref="suggestAppSection" />
  <TabSection
      :theme-color="ThemeColorClasses.SUGGEST_APP"
      :project-tabs="suggestAppInsides"
  />
</template>
