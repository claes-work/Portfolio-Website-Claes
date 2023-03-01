<script lang="ts" setup>
import { useStrapiDataStore } from "@/stores/StrapiDataStore";
import type { ComputedRef } from "vue";
import type { IPureAir } from "@/models/websites/pure-air/IPureAir";
import { computed, inject } from "vue";
import { marked } from "marked";
import type { AllMediaSrcset } from "@/models/components/media/AllMediaSrcset";
import { getAllMediaSrcset } from "@/composables/MediaProperties";

const urlPrefix = inject('URL_PATH')

const strapiStore = useStrapiDataStore()

const pureAirData: ComputedRef<IPureAir> = computed(() => {
  return strapiStore.websiteData.pureAir
})

// Render markdown from content editor
const markdown: ComputedRef<string> = computed(() => {
  return (pureAirData.value.description)
      ? marked(pureAirData.value.description)
      : ''
})

// Ensure label src is never null and add url prefix to upload path
const labelSrc: ComputedRef<string> = computed(() => {
  return pureAirData.value.label ? urlPrefix + pureAirData.value.label.url : ''
})

// Ensure mockup src is never null and add url prefix to upload path
const labelAlt: ComputedRef<string> = computed(() => {
  return pureAirData.value.label ? pureAirData.value.label.alternativeText : ''
})


// Ensure mockup src is never null and add url prefix to upload path
const mockupTowerSrcset: ComputedRef<AllMediaSrcset> = computed(() => {
  return pureAirData.value.image && pureAirData.value.image[0]
      ? getAllMediaSrcset(pureAirData.value.image[0])
      : {} as AllMediaSrcset
})

// Ensure mockup src is never null and add url prefix to upload path
const mockupTowerAlt: ComputedRef<string> = computed(() => {
  return pureAirData.value.image && pureAirData.value.image[0]
      ? pureAirData.value.image[0].alternativeText
      : ''
})

// Ensure mockup src is never null and add url prefix to upload path
const mockupIMacSrcset: ComputedRef<AllMediaSrcset> = computed(() => {
  return pureAirData.value.image && pureAirData.value.image[1]
      ? getAllMediaSrcset(pureAirData.value.image[1])
      : {} as AllMediaSrcset
})

// Ensure mockup src is never null and add url prefix to upload path
const mockupIMacAlt: ComputedRef<string> = computed(() => {
  return pureAirData.value.image && pureAirData.value.image[1]
      ? pureAirData.value.image[1].alternativeText
      : ''
})
</script>

<template>
  <section id="pure-air">
    <div class="container">
      <div class="text-wrapper">
        <img
            class="website-label"
            :src="labelSrc"
            :alt="labelAlt"
        />
        <h2 v-html="pureAirData.heading"></h2>
        <p v-html="markdown"></p>
        <div class="button-wrapper">
          <a
              v-for="(button, index) in pureAirData.buttons"
              :key="button.id"
              class="button"
              :class="index === 0 ? 'primary' : 'secondary'"
              :href="button.link"
              :title="button.titleAttr"
              :target="button.openInNewTab ? '_blank' : ''"
          >{{ button.text }}</a>
        </div>
      </div>

      <picture>
        <source media="(min-width: 768px)" :srcset="mockupIMacSrcset.mediumSrc">
        <source media="(min-width: 1280px)" :srcset="mockupIMacSrcset.originalSrc">
        <img
            v-if="mockupIMacSrcset"
            class="pure-air-image"
            :src="mockupIMacSrcset.smallSrc"
            :alt="mockupIMacAlt"
        />
      </picture>

      <picture>
        <source media="(min-width: 768px)" :srcset="mockupTowerSrcset.mediumSrc">
        <source media="(min-width: 1280px)" :srcset="mockupTowerSrcset.originalSrc">
        <img
            v-if="mockupTowerSrcset"
            class="pure-air-image tower"
            :src="mockupTowerSrcset.smallSrc"
            :alt="mockupTowerAlt"
        />
      </picture>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/pages/websites/pure-air/pure-air.scss";
</style>
