<script lang="ts" setup>
import { computed } from "vue";
import { marked } from 'marked';
import type { PropType } from "vue";
import type { IRebalancingTool } from "@/models/rebalancing-tool/IRebalancingTool";

const props = defineProps({
  data: {
    type: Object as PropType<IRebalancingTool>,
    required: true
  },
})

// Ensure mockup src is never null and add url prefix to upload path
const logoSrc = computed(() => {
  return props.data.logo ? 'https://strapi.claes-work.de' + props.data.logo.url : ''
})

// Ensure mockup src is never null and add url prefix to upload path
const mockupSrc = computed(() => {
  return props.data.heroMockup ? 'https://strapi.claes-work.de' + props.data.heroMockup.url : ''
})

// Ensure video src is never null and add url prefix to upload path
const videoSrc = computed(() => {
  return props.data.video ? 'https://strapi.claes-work.de' + props.data.video.url : ''
})

// Render markdown from content editor
const markdown = computed(() => {
  return (props.data.description) ? marked(props.data.description) : ''
})
</script>

<template>
  <section id="rebalancing-tool">
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
              :href="button.link"
              :title="button.titleAttr"
              :target="button.openInNewTab ? '_blank' : ''"
          >{{ button.text }}</a>
        </div>
      </div>
      <div class="macbook-image-wrapper">
        <img
            v-if="mockupSrc"
            class="macbook-image"
            :src="mockupSrc"
            :alt="data.heroMockup.alternativeText"
        />
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
