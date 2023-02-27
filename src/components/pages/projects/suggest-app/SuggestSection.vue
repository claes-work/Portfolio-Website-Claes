<script lang="ts" setup>
import { computed, inject } from "vue";
import { marked } from 'marked';
import type { PropType, ComputedRef } from "vue";
import type { IRebalancingTool } from "@/models/rebalancing-tool/IRebalancingTool";
import { getAllMediaSrcset } from "@/composables/MediaProperties";
import type { AllMediaSrcset } from "@/models/components/media/AllMediaSrcset";

const urlPrefix = inject('URL_PATH')

const props = defineProps({
  data: {
    type: Object as PropType<IRebalancingTool>,
    required: true
  },
})

// Ensure mockup src is never null and add url prefix to upload path
const logoSrc: ComputedRef<string> = computed(() => {
  return props.data.logo ? urlPrefix + props.data.logo.url : ''
})

// Ensure mockup src is never null and add url prefix to upload path
const mockupSrcset: ComputedRef<AllMediaSrcset> = computed(() => {
  return props.data && props.data.heroMockup
      ? getAllMediaSrcset(props.data.heroMockup)
      : {} as AllMediaSrcset
})

// Ensure mockup src is never null and add url prefix to upload path
const mockupAlt: ComputedRef<string> = computed(() => {
  return props.data && props.data.heroMockup
      ? props.data.heroMockup.alternativeText
      : ''
})

// Render markdown from content editor
const markdown: ComputedRef<string> = computed(() => {
  return (props.data.description) ? marked(props.data.description) : ''
})
</script>

<template>
  <section id="suggest-app">
    <div class="container">
      <div class="text-wrapper">
        <div class="logo" :style="{ backgroundImage: 'url('+logoSrc+')' }"></div>
        <h2 v-html="data.heading"></h2>
        <p v-html="markdown"></p>
        <div class="button-wrapper">
          <a
              v-for="(button, index)  in data.button"
              :key="button.id"
              class="button"
              :class="index === 0 ? 'primary' : 'secondary'"
              :style="{ backgroundImage: 'url('+ urlPrefix + button.icon +')' }"
              :href="button.link"
              :title="button.titleAttr"
              :target="button.openInNewTab ? '_blank' : ''"
          ></a>
        </div>
      </div>
      <img
          class="iphone-image"
          src="@/assets/images/IPhone_Suggest_App.png"
          alt="IPhone Suggest App"
      >
      <picture>
        <source media="(min-width: 768px)" :srcset="mockupSrcset.mediumSrc">
        <source media="(min-width: 1280px)" :srcset="mockupSrcset.originalSrc">
        <img
            v-if="mockupSrcset"
            class="iphone-image"
            :src="mockupSrcset.smallSrc"
            :alt="mockupAlt"
        />
      </picture>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/pages/projects/suggest-app/suggest-app.scss";
</style>
