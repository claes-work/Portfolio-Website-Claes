<script lang="ts" setup>
import { computed, inject } from "vue";
import { marked } from 'marked';
import type { PropType, ComputedRef } from "vue";
import type { IRebalancingTool } from "@/models/projects/rebalancing-tool/IRebalancingTool";
import { getAllMediaSrcset } from "@/composables/MediaProperties";
import type { AllMediaSrcset } from "@/models/components/media/AllMediaSrcset";
import AnimatedHeading from "@/components/content-elements/AnimatedHeading.vue";

const urlPrefix = inject('URL_PATH')

const props = defineProps({
  data: {
    type: Object as PropType<IRebalancingTool>,
    required: true
  }
})

/**************************** Template Properties ****************************/

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

// Ensure video src is never null and add url prefix to upload path
const videoSrc: ComputedRef<string> = computed(() => {
  return props.data.video ? urlPrefix + props.data.video.url : ''
})

// Render markdown from content editor
const markdown: ComputedRef<string> = computed(() => {
  return (props.data && props.data.description)
      ? marked(props.data.description)
      : ''
})
</script>

<template>
  <section id="rebalancing-tool">
    <div class="container">
      <div class="text-wrapper">
        <div class="logo" :style="{ backgroundImage: 'url('+logoSrc+')' }"></div>
        <AnimatedHeading :heading="data.heading" />
        <p v-html="markdown"></p>
        <div class="button-wrapper">
          <a
              v-for="(button, index)  in data.button"
              :key="button.id"
              class="button"
              :class="index === 0 ? 'primary' : 'secondary'"
              :ref="index === 0 ? 'button1' : 'button2'"
              :href="button.link"
              :title="button.titleAttr"
              :target="button.openInNewTab ? '_blank' : ''"
          >{{ button.text }}</a>
        </div>
      </div>
      <div class="macbook-image-wrapper">
        <picture>
          <source media="(min-width: 768px)" :srcset="mockupSrcset.mediumSrc">
          <source media="(min-width: 1280px)" :srcset="mockupSrcset.originalSrc">
          <img
              v-if="mockupSrcset"
              class="macbook-image"
              :src="mockupSrcset.smallSrc"
              :alt="mockupAlt"
          />
        </picture>

        <div class="player-container" v-if="videoSrc">
          <Vue3VideoPlayer ref="player" :src="videoSrc" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/pages/projects/rebalancing-tool/rebalancing-tool.scss";
</style>
