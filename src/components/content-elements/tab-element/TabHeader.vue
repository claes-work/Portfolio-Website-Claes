<script lang="ts" setup>
import FeaturesIcon from "@/components/icons/FeaturesIcon.vue";
import TechStackIcon from "@/components/icons/TechStackIcon.vue";
import ProjectIdeaIcon from "@/components/icons/ProjectIdeaIcon.vue";
import FileIcon from "@/components/icons/FileIcon.vue";
import { TabView } from "@/models/TabView";
import type { TabView as TabViewType } from "@/models/TabView";
import type { PropType } from "vue";

// Emit to call parent method change tab
const emit = defineEmits(['change-tab'])

const props = defineProps({
  selectedTab: {
    type: Object as PropType<TabViewType>,
    required: true
  }
})

// Compare selected tab and return bool
const isTab = (tabName: TabView) => {
  return props.selectedTab === tabName
}
</script>

<template>
  <div class="tab-header">
    <div
        class="tab-button"
        :class="{ active : isTab(TabView.PROJECT_IDEA) }"
        @click="$emit('change-tab', TabView.PROJECT_IDEA)"
    >
      <ProjectIdeaIcon />
      <span>Project Idea</span>
    </div>
    <div
        class="tab-button"
        :class="{ active : isTab(TabView.FEATURES) }"
        @click="$emit('change-tab', TabView.FEATURES)"
    >
      <FeaturesIcon />
      <span>Features</span>
    </div>
    <div
        class="tab-button"
        :class="{ active : isTab(TabView.TECH_STACK) }"
        @click="$emit('change-tab', TabView.TECH_STACK)"
    >
      <TechStackIcon />
      <span>TechStack</span>
    </div>
    <div
        class="tab-button"
        :class="{ active : isTab(TabView.FILES) }"
        @click="$emit('change-tab', TabView.FILES)"
    >
      <FileIcon />
      <span>Files & Links</span>
    </div>
  </div>
</template>
