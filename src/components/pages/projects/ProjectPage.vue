<script setup lang="ts">
import RebalancingToolSection from "@/components/pages/projects/rebalancing-tool/RebalancingToolSection.vue";
import SuggestSection from "@/components/pages/projects/suggest-app/SuggestSection.vue";
import TabSection from "@/components/content-elements/tab-element/TabSection.vue";
import { ThemeColorClasses } from "@/models/ThemeColorClasses";
import { rebalancingToolInsides } from "@/data/rebalancing-tool/RebalancingToolInsides"
import { suggestAppInsides } from "@/data/suggest-app/SuggestAppInsides"

</script>

<template>
  <RebalancingToolSection />
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
