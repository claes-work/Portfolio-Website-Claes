<script lang="ts" setup>
import { computed } from "vue";
import { useStrapiDataStore } from "@/stores/StrapiDataStore";
import { getAllMediaSrcset } from "@/composables/MediaProperties";
import type { IPersonalTechStack } from "@/models/about-page/IPersonalTechStack"
import type { ComputedRef } from "vue";
import type { IButton } from "@/models/components/buttons/IButton";
import type { AllMediaSrcset } from "@/models/components/media/AllMediaSrcset";

const strapiStore = useStrapiDataStore()

// Ensure that personal tech stack data from strapi api has been fetched
const techStack: ComputedRef<IPersonalTechStack> = computed(() => {
  return strapiStore.aboutData.personalTechStack
      ? strapiStore.aboutData.personalTechStack
      : {} as IPersonalTechStack
})

// Ensure that button data exists on personal tech stack
const button: ComputedRef<IButton> = computed(() => {
  return techStack.value.button
      ? techStack.value.button
      : {} as IButton
})

// Ensure mockup src is never null and add url prefix to upload path
const mockupIMacSrcset: ComputedRef<AllMediaSrcset> = computed(() => {
  return techStack.value.image
      ? getAllMediaSrcset(techStack.value.image)
      : {} as AllMediaSrcset
})

// Ensure mockup src is never null and add url prefix to upload path
const mockupIMacAlt: ComputedRef<string> = computed(() => {
  return techStack.value.image
      ? techStack.value.image.alternativeText
      : ''
})
</script>

<template>
  <section id="personal-tech-stack-section">
    <div class="container">
      <span class="subheading">{{ techStack.subheading }}</span>
      <h2>{{ techStack.heading }}</h2>
      <p>{{ techStack.text }}</p>
      <a
          class="button"
          :href="button.link"
          :title="button.titleAttr"
          :target="button.openInNewTab ? '_blank' : ''"
      >{{ button.text }}</a>
      <picture>
        <source media="(min-width: 768px)" :srcset="mockupIMacSrcset.mediumSrc">
        <source media="(min-width: 1280px)" :srcset="mockupIMacSrcset.originalSrc">
        <img
            v-if="mockupIMacSrcset"
            class="personal-tech-stack-image"
            :src="mockupIMacSrcset.smallSrc"
            :alt="mockupIMacAlt"
        />
      </picture>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/pages/about/personal-tech-stack-section.scss";
</style>
