<script lang="ts" setup>
import {computed, onMounted, ref} from "vue";
import { useStrapiDataStore } from "@/stores/StrapiDataStore";
import { getAllMediaSrcset } from "@/composables/MediaProperties";
import type { IHeroSection } from "@/models/about-page/IHeroSection";
import type { ComputedRef, Ref } from "vue";
import type { AllMediaSrcset } from "@/models/components/media/AllMediaSrcset";
import gsap from "gsap";
import AnimatedHeading from "@/components/content-elements/AnimatedHeading.vue";

const strapiStore = useStrapiDataStore()

// GSAP timeline
let timeline: GSAPTimeline | null = null

const mockup:      Ref<HTMLElement | null> = ref(null)
const subHeading:  Ref<HTMLElement | null> = ref(null)
const text:        Ref<HTMLElement | null> = ref(null)

onMounted(() => {
  timeline = gsap.timeline();

  timeline.from(mockup.value, {
    duration: 1.4,
    y: 100,
    ease: 'Circ.easeOut'
  }, 0.2)

  timeline.from(subHeading.value, {
    duration: 0.6,
    y: 5,
    opacity: 0,
    ease: 'Power1.easeOut'
  }, 1)

  timeline.from(text.value, {
    duration: 1.4,
    x: -150,
    ease: 'Circ.easeOut'
  }, 0.2)
})

/**************************** Template Properties ****************************/

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
       <span class="subheading" ref="subHeading">{{ heroSection.subHeading }}</span>
       <AnimatedHeading :heading="heroSection.heading" />
       <p v-html="heroSection.text" ref="text"></p>
     </div>
     <picture>
       <source media="(min-width: 768px)" :srcset="mockupIMacSrcset.mediumSrc">
       <source media="(min-width: 1280px)" :srcset="mockupIMacSrcset.originalSrc">
       <img
           ref="mockup"
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
