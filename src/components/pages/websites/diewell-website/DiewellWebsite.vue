<script lang="ts" setup>
import type { ComputedRef, PropType } from "vue";
import type { IDiewellWebsite } from "@/models/websites/diewell-website/IDiewellWebsite";
import { computed, inject} from "vue";
import { marked } from "marked";
import type { AllMediaSrcset } from "@/models/components/media/AllMediaSrcset";
import { getAllMediaSrcset } from "@/composables/MediaProperties";

const urlPrefix = inject('URL_PATH')

const props = defineProps({
  data: {
    type: Object as PropType<IDiewellWebsite>,
    required: true
  }
})

const diewellData: ComputedRef<IDiewellWebsite> = computed(() => {
  return props.data
})

// Render markdown from content editor
const markdown: ComputedRef<string> = computed(() => {
  return (diewellData.value.description)
      ? marked(diewellData.value.description)
      : ''
})

// Ensure label src is never null and add url prefix to upload path
const labelSrc: ComputedRef<string> = computed(() => {
  return diewellData.value.label ? urlPrefix + diewellData.value.label.url : ''
})

// Ensure mockup src is never null and add url prefix to upload path
const labelAlt: ComputedRef<string> = computed(() => {
  return diewellData.value.label ? diewellData.value.label.alternativeText : ''
})


// Ensure mockup src is never null and add url prefix to upload path
const mockupSrcset: ComputedRef<AllMediaSrcset> = computed(() => {
  return diewellData.value.image && diewellData.value.image
      ? getAllMediaSrcset(diewellData.value.image)
      : {} as AllMediaSrcset
})

// Ensure mockup src is never null and add url prefix to upload path
const mockupAlt: ComputedRef<string> = computed(() => {
  return diewellData.value.image && diewellData.value.image
      ? diewellData.value.image.alternativeText
      : ''
})
</script>

<template>
  <section id="diewell-website">
    <div class="container">
      <div class="text-wrapper">
        <img
            class="website-label"
            :src="labelSrc"
            :alt="labelAlt"
        />
        <h2 v-html="diewellData.heading"></h2>
        <p v-html="markdown"></p>
        <div class="button-wrapper">
          <a
              v-for="(button, index) in diewellData.buttons"
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
        <source media="(min-width: 768px)" :srcset="mockupSrcset.mediumSrc">
        <source media="(min-width: 1280px)" :srcset="mockupSrcset.originalSrc">
        <img
            v-if="mockupSrcset"
            class="diewell-website-image"
            :src="mockupSrcset.smallSrc"
            :alt="mockupAlt"
        />
      </picture>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/pages/websites/diewell-website/diewell-website.scss";
</style>
