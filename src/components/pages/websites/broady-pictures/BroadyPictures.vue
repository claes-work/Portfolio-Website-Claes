<script lang="ts" setup>
import type { ComputedRef, PropType } from "vue";
import type { IBroadyPictures } from "@/models/websites/broady-pictures/IBroadyPictures";
import { computed, inject} from "vue";
import { marked } from "marked";
import type { AllMediaSrcset } from "@/models/components/media/AllMediaSrcset";
import { getAllMediaSrcset } from "@/composables/MediaProperties";

const urlPrefix = inject('URL_PATH')

const props = defineProps({
  data: {
    type: Object as PropType<IBroadyPictures>,
    required: true
  }
})

const broadyData: ComputedRef<IBroadyPictures> = computed(() => {
  return props.data
})

// Render markdown from content editor
const markdown: ComputedRef<string> = computed(() => {
  return (broadyData.value.description)
      ? marked(broadyData.value.description)
      : ''
})

// Ensure label src is never null and add url prefix to upload path
const labelSrc: ComputedRef<string> = computed(() => {
  return broadyData.value.label ? urlPrefix + broadyData.value.label.url : ''
})

// Ensure mockup src is never null and add url prefix to upload path
const labelAlt: ComputedRef<string> = computed(() => {
  return broadyData.value.label ? broadyData.value.label.alternativeText : ''
})


// Ensure mockup src is never null and add url prefix to upload path
const mockupSrcset: ComputedRef<AllMediaSrcset> = computed(() => {
  return broadyData.value.image && broadyData.value.image
      ? getAllMediaSrcset(broadyData.value.image)
      : {} as AllMediaSrcset
})

// Ensure mockup src is never null and add url prefix to upload path
const mockupAlt: ComputedRef<string> = computed(() => {
  return broadyData.value.image && broadyData.value.image
      ? broadyData.value.image.alternativeText
      : ''
})
</script>

<template>
  <section id="broady-pictures">
    <div class="container">
      <div class="text-wrapper">
        <img
            class="website-label"
            :src="labelSrc"
            :alt="labelAlt"
        />
        <h2 v-html="broadyData.heading"></h2>
        <p v-html="markdown"></p>
        <div class="button-wrapper">
          <a
              v-for="(button, index) in broadyData.buttons"
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
            class="broady-pictures-image"
            :src="mockupSrcset.smallSrc"
            :alt="mockupAlt"
        />
      </picture>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/pages/websites/broady-pictures/broady-pictures.scss";
</style>
