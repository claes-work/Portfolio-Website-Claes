<script lang="ts" setup>
import { computed, ref, toRaw } from "vue";
import type { PropType } from "vue";
import type { ThemeColorClasses } from "@/models/ThemeColorClasses";
import TabButton from "@/components/content-elements/tab-element/TabButton.vue";
import type { ProjectTab } from "@/models/ProjectTab";
import type { IProjectTab } from "@/models/tabs/IProjectTab";
import type { IProjectIdeaTab } from "@/models/tabs/IProjectIdeaTab";
import type { IFeaturesTab } from "@/models/tabs/IFeaturesTab";
import type { ITechStackTab } from "@/models/tabs/ITechStackTab";
import type { IFileTab } from "@/models/tabs/IFileTab";
import { ProjectTabReferences } from "@/models/tabs/enums/ProjectTabReferences";

const props = defineProps({
  themeColor: {
    type: Object as PropType<ThemeColorClasses>,
    required: true
  },
  projectTabs: {
    type: Object as PropType<ProjectTab[]>,
    required: true
  },
  projectTabData: {
    type: Object as PropType<IProjectTab[]>,
    required: true
  }
})

const filterArray = (property: string, value: any) => {
  return props.projectTabs.filter((el: any) => el[property] === value)[0]
}

// Get the active component
const getComponent = computed(() => {
  let component = filterArray('isActive', true)
  if (component) {
    return {
      rawComponent: toRaw(component).component,
      reference: component.strapiReference
    }
  }
})

// Change isActive property in oder to render the clicked component
const changeComponent = (componentName: any) => {

  // get active record
  let oldComponent = filterArray('isActive', true)
  if(oldComponent) {
    oldComponent.isActive = false
  }

  // Get record that matches the component name
  let newComponent = filterArray('componentName', componentName)
  if (newComponent) {
    newComponent.isActive = true
  }
}

const activeComponent = ref(getComponent)

// Get strapi data of the active component
function getTabData(reference: string) {
  if (props.projectTabData) {
    const tabData = props.projectTabData.filter((el: any) => el['__component'] === reference)[0]
    if (tabData) {
      switch (tabData.__component) {
        case ProjectTabReferences.IDEA:
          return tabData as IProjectIdeaTab
        case ProjectTabReferences.FEATURES:
          return tabData as IFeaturesTab
        case ProjectTabReferences.TECH_STACK:
          return tabData as ITechStackTab
        case ProjectTabReferences.FILES:
          return tabData as IFileTab
      }
    }
  }
  return ''
}
</script>

<template>
  <section class="tab-section" :class="themeColor">
    <div class="container">
    <!--<h3>Project insides</h3>-->

      <div class="tab-header">
        <TabButton
            v-for="tab in projectTabs"
            :tab-name="tab.componentName"
            :class="{ active : tab.isActive }"
            @click="changeComponent(tab.componentName)"
        >
          <template #tab-icon>
            <component :is="tab.icon"></component>
          </template>
        </TabButton>
      </div>

      <component :is="activeComponent.rawComponent" @change-tab="changeComponent" :data="getTabData(activeComponent.reference)"></component>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/content-elements/tab-section.scss";
</style>
