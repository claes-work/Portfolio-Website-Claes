<script lang="ts" setup>
import { computed } from "vue";
import { useStrapiDataStore } from "@/stores/StrapiDataStore";
import { getAllMediaSrcset } from "@/composables/MediaProperties";
import type { IHeroSection } from "@/models/about-page/IHeroSection";
import type { ComputedRef } from "vue";
import type { AllMediaSrcset } from "@/models/components/media/AllMediaSrcset";

const strapiStore = useStrapiDataStore()

// Ensure that hero section data from strapi api has been fetched
const heroSection: ComputedRef<IHeroSection> = computed(() => {
  return strapiStore.aboutData.heroSection
      ? strapiStore.aboutData.heroSection
      : {} as IHeroSection
})

// Ensure mockup src is never null and add url prefix to upload path
const mockupIMacSrcset: ComputedRef<AllMediaSrcset> = computed(() => {
  return heroSection.value.heroImage
      ? getAllMediaSrcset(heroSection.value.heroImage)
      : {} as AllMediaSrcset
})

// Ensure mockup src is never null and add url prefix to upload path
const mockupIMacAlt: ComputedRef<string> = computed(() => {
  return heroSection.value.heroImage
      ? heroSection.value.heroImage.alternativeText
      : ''
})
</script>

<template>
  <section id="hero-section">
   <div class="container">
     <div class="text-wrapper">
       <span class="subheading">{{ heroSection.subHeading }}</span>
       <h1 v-html="heroSection.heading"></h1>
       <p v-html="heroSection.text"></p>
     </div>
     <picture>
       <source media="(min-width: 768px)" :srcset="mockupIMacSrcset.mediumSrc">
       <source media="(min-width: 1280px)" :srcset="mockupIMacSrcset.originalSrc">
       <img
           v-if="mockupIMacSrcset"
           class="hero-image"
           :src="mockupIMacSrcset.smallSrc"
           :alt="mockupIMacAlt"
       />
     </picture>
     <slot name="divider-content"></slot>
     <div class="hero-background">
       <img
           class="shape"
           src="@/assets/images/Hero_Background_Shape.png"
           alt="Hero Background Shape"
       />
     </div>
   </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/pages/about/hero-section.scss";
</style>
