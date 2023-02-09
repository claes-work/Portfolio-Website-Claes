<script setup lang="ts">
import RebalancingToolSection from "@/components/pages/projects/rebalancing-tool/RebalancingToolSection.vue";
import SuggestSection from "@/components/pages/projects/suggest-app/SuggestSection.vue";
import TabSection from "@/components/content-elements/tab-element/TabSection.vue";
import { ThemeColorClasses } from "@/models/ThemeColorClasses";
</script>

<template>
  <RebalancingToolSection />
  <TabSection :theme-color="ThemeColorClasses.PORTFOLIO_APP" />
  <SuggestSection />
  <TabSection :theme-color="ThemeColorClasses.SUGGEST_APP"/>
</template>
