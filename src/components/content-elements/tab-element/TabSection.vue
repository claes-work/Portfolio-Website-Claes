<script lang="ts" setup>
// DO NOT REMOVE even if import is currently unused
import type {IProjectIdeaTab} from "@/models/components/tabs/IProjectIdeaTab";

import type {ComputedRef, PropType, Ref} from "vue";
import {computed, inject, ref, watch} from "vue";
import type {ThemeColorClasses} from "@/models/theme/ThemeColorClasses";
import TabButton from "@/components/content-elements/tab-element/TabButton.vue";
import type {ProjectTabReferences as TabReferencesType} from "@/models/components/tabs/enums/ProjectTabReferences";
import {ProjectTabReferences} from "@/models/components/tabs/enums/ProjectTabReferences";
import type {IRebalancingTool} from "@/models/projects/rebalancing-tool/IRebalancingTool";
import type {ISuggestApp} from "@/models/projects/suggest-app/ISuggestApp";
import type {ITabButton} from "@/models/components/tabs/ITabButton";
import ProjectIdea from "@/components/pages/projects/project-insides/ProjectIdea.vue";
import ProjectFeatures from "@/components/pages/projects/project-insides/ProjectFeatures.vue";
import TechStack from "@/components/pages/projects/project-insides/TechStack.vue";
import ProjectFiles from "@/components/pages/projects/project-insides/ProjectFiles.vue";
import { useStrapiDataStore } from "@/stores/StrapiDataStore";
import {AllLocales} from "@/models/AllLocales";


const urlPrefix = inject('URL_PATH')
const strapiStore = useStrapiDataStore()

const props = defineProps({
  themeColor: {
    type: Object as PropType<ThemeColorClasses>,
    required: true
  },
  data: {
    type: Object as PropType<IRebalancingTool | ISuggestApp>,
    required: true
  }
})

// The currently rendered tab component
const renderedComponent: Ref = ref(ProjectIdea)
// The reference for the currently rendered tab component
const reference: Ref<TabReferencesType> = ref(ProjectTabReferences.IDEA)

// The data of the  currently rendered tab component
const componentData: ComputedRef = computed(() => {
  if (props.data && props.data.projectInsides) {
    // Filter and return the active tab component
    return props.data.projectInsides.filter(
        (el: any) => el['__component'] === reference.value
    )[0]
  }
  // Default return if props not defined
  return {} as IProjectIdeaTab
})

/**
 * Change the rendered tab component
 *
 * @param tabReference TabReferencesType
 *
 * @return void
 */
const changeComponent = (tabReference: TabReferencesType): void => {
  // Set the reference of the clicked tab
  reference.value = tabReference
  // Change the active class of the related tab button
  changeActiveClass(tabReference)

  // Find the tab component by its reference
  switch (tabReference) {
    default:
    case ProjectTabReferences.IDEA:
      renderedComponent.value = ProjectIdea
      break;
    case ProjectTabReferences.FEATURES:
      renderedComponent.value = ProjectFeatures
      break;
    case ProjectTabReferences.TECH_STACK:
      renderedComponent.value = TechStack
      break;
    case ProjectTabReferences.FILES:
      renderedComponent.value = ProjectFiles
      break;
  }
}

/**
 * Change the active class of the related tab button
 *
 * @param reference
 *
 * @return void
 */
const changeActiveClass = (reference: TabReferencesType): void => {
  // Reset the current active tab button
  let activeButton: ITabButton = getTabButton('isActive', true)
  if (activeButton) activeButton.isActive = false

  // Set the isActive property of the clicked tab button
  let clickedButton: ITabButton = getTabButton('strapiReference', reference)
  if (clickedButton) clickedButton.isActive = true
}

/**
 * Filter and return a tab button by a property and value
 *
 * @param property
 * @param value
 *
 * @return ITabButton
 */
const getTabButton = (property: string, value: any): ITabButton => {
  if (props.data && props.data.tabButtons) {
    return props.data.tabButtons.filter(
        (el: any) => el[property] === value
    )[0]
  }
  return {} as ITabButton
}

const projectInsidesHeading: ComputedRef<string> = computed(() => {
  switch (strapiStore.activeLocale) {
    case AllLocales.DE:
      return 'Projekt Einblicke'
    case AllLocales.EN:
      return 'Project insides'
  }
})


// Detect if locale is getting changed in order to rerender component
watch(
    () => props.data,
    () => changeComponent(ProjectTabReferences.IDEA)
)
</script>

<template>
  <section class="tab-section" :class="themeColor">
    <div class="container">
    <h3 class="insides-heading">{{ projectInsidesHeading }}</h3>

      <div class="tab-header">
        <TabButton
            v-for="tab in data.tabButtons"
            :tab-name="tab.componentName"
            :class="{ active : tab.isActive }"
            @click="changeComponent(tab.strapiReference)"
        >
          <template #tab-icon>
            <img
                v-if="tab.icon"
                :src="urlPrefix + tab.icon.url"
                :alt="tab.icon.alternativeText"
            />
          </template>
        </TabButton>
      </div>

      <component
          :is="renderedComponent"
          :data="componentData"
          @change-tab="changeComponent"
      ></component>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/content-elements/tab-section.scss";
</style>
