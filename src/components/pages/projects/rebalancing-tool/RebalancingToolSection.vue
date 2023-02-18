<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { marked } from 'marked';
import type { Ref } from "vue";
import type { IRebalancingTool } from "@/models/rebalancing-tool/IRebalancingTool";
import FetchAppSections from "@/services/FetchAppSections";

// Typed data from strapi api
const data: Ref<IRebalancingTool> = ref({} as IRebalancingTool)

// Fetch strapi data on mounted
onMounted(async () => {
  data.value = await FetchAppSections.fetchRebalancingToolSection()
})

// Ensure mockup src is never null and add url prefix to upload path
const mockupSrc = computed(() => {
  return data.value.heroMockup ? 'https://strapi.claes-work.de' + data.value.heroMockup.url : ''
})

// Ensure video src is never null and add url prefix to upload path
const videoSrc = computed(() => {
  return data.value.video ? 'https://strapi.claes-work.de' + data.value.video.url : ''
})

// Render markdown from content editor
const markdown = computed(() => {
  return (data.value.description) ? marked(data.value.description) : ''
})
</script>

<template>
  <section id="rebalancing-tool">
    <div class="container">
      <div class="text-wrapper">
        <div class="logo"></div>
        <h2 v-html="data.heading"></h2>
        <p v-html="markdown"></p>
        <div class="button-wrapper">
          <a
              v-for="button in data.button"
              :key="button.id"
              class="button"
              :class="button.id === 1 ? 'primary' : 'secondary'"
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
