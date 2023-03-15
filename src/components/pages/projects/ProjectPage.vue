<script setup lang="ts">
import { ThemeColorClasses } from "@/models/theme/ThemeColorClasses";
import RebalancingToolSection from "@/components/pages/projects/rebalancing-tool/RebalancingToolSection.vue";
import SuggestSection from "@/components/pages/projects/suggest-app/SuggestSection.vue";
import TabSection from "@/components/content-elements/tab-element/TabSection.vue";
import { useMainStore } from "@/stores/MainStore";
import { useStrapiDataStore } from "@/stores/StrapiDataStore";

const mainStore = useMainStore()
const strapiStore = useStrapiDataStore()
</script>

<template>
  <div id="project-page">
    <RebalancingToolSection
        :ref="async (el) => await mainStore.setSectionOffset(el, 'rebalancingTool')"
        :data="strapiStore.projectData.rebalancingTool"
    />
    <TabSection
        :theme-color="ThemeColorClasses.REBALANCING_TOOL"
        :data="strapiStore.projectData.rebalancingTool"

    />
    <SuggestSection
        :ref="async (el) => await mainStore.setSectionOffset(el, 'suggestApp')"
        :data="strapiStore.projectData.suggestApp"
    />
    <TabSection
        :theme-color="ThemeColorClasses.SUGGEST_APP"
        :data="strapiStore.projectData.suggestApp"
    />
  </div>
</template>
