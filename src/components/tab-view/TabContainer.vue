<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from "vue";
import { techStackData } from "@/data/TechStackData";
import TechStackTab from "@/components/tab-view/tech-stack-tab/TechStackTab.vue";
import FeaturesTab from "@/components/tab-view/features-tab/FeaturesTab.vue";
import ProjectIdeaTab from "@/components/tab-view/project-idea-tab/ProjectIdeaTab.vue";
import FileTab from "@/components/tab-view/file-tab/FileTab.vue";
import TabHeader from "@/components/tab-view/TabHeader.vue";
import { TabView } from "@/models/TabView";
import type { TabView as TabViewType } from "@/models/TabView";

const selectedTab: Ref<TabViewType> = ref(TabView.TECH_STACK)
</script>

<template>
  <TabHeader />

  <FeaturesTab
      v-if="selectedTab === TabView.FEATURES"
  />
  <TechStackTab
      v-if="selectedTab === TabView.TECH_STACK"
      :slider-data="techStackData"
  />
  <ProjectIdeaTab
      v-if="selectedTab === TabView.PROJECT_IDEA"
  />
  <FileTab
      v-if="selectedTab === TabView.FILES"
  />
</template>
