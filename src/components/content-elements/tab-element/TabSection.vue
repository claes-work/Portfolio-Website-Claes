<script lang="ts" setup>
import { ref } from "vue";
import TabHeader from "@/components/content-elements/tab-element/TabHeader.vue";
import { TabView } from "@/models/TabView";
import type { TabView as TabViewType } from "@/models/TabView";
import type { Ref } from "vue";
import ProjectFeatures from "@/components/pages/projects/rebalancing-tool/project-insides/ProjectFeatures.vue";
import TechStack from "@/components/pages/projects/rebalancing-tool/project-insides/TechStack.vue";
import ProjectIdea from "@/components/pages/projects/rebalancing-tool/project-insides/ProjectIdea.vue";
import ProjectFiles from "@/components/pages/projects/rebalancing-tool/project-insides/ProjectFiles.vue";

// The visible tab
const selectedTab: Ref<TabViewType> = ref(TabView.PROJECT_IDEA)

// function, that is called by TabHeader child component
const changeTab = (tabName: TabView) => {
  selectedTab.value = tabName
}

// Compare selected tab and return bool
const isTab = (tabName: TabView) => {
  return selectedTab.value === tabName
}
</script>

<template>
  <section id="tab-section">
    <div class="container">
    <!--<h3>Project insides</h3>-->

      <TabHeader
          @change-tab="changeTab"
          :selected-tab="selectedTab"
      />

      <ProjectIdea     v-if="isTab(TabView.PROJECT_IDEA)" />
      <ProjectFeatures v-if="isTab(TabView.FEATURES)"     />
      <TechStack       v-if="isTab(TabView.TECH_STACK)"   />
      <ProjectFiles    v-if="isTab(TabView.FILES)"        />
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/content-elements/tab-section.scss";
</style>
