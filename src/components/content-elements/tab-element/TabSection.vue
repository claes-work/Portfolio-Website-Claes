<script lang="ts" setup>
import { computed, ref, toRaw } from "vue";
import type { PropType } from "vue";
import type { ThemeColorClasses } from "@/models/ThemeColorClasses";
import TabButton from "@/components/content-elements/tab-element/TabButton.vue";
import type { ProjectTab } from "@/models/ProjectTab";

const props = defineProps({
  themeColor: {
    type: Object as PropType<ThemeColorClasses>,
    required: true
  },
  projectTabs: {
    type: Object as PropType<ProjectTab[]>,
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
    return toRaw(component).component
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

</script>

<template>
  <section id="tab-section" :class="themeColor">
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

      <component :is="activeComponent" @change-tab="changeComponent"></component>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/content-elements/tab-section.scss";
</style>
