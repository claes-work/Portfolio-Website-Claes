<script lang="ts" setup>
import {computed, inject, onMounted, ref} from "vue";
import { marked } from 'marked';
import type { PropType, ComputedRef, Ref } from "vue";
import type { IRebalancingTool } from "@/models/projects/rebalancing-tool/IRebalancingTool";
import { getAllMediaSrcset } from "@/composables/MediaProperties";
import type { AllMediaSrcset } from "@/models/components/media/AllMediaSrcset";
import gsap from "gsap";

const urlPrefix = inject('URL_PATH')

const props = defineProps({
  data: {
    type: Object as PropType<IRebalancingTool>,
    required: true
  }
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

/**************************** GSAP ****************************/

// GSAP timeline
let timeline = null

// Element template references
const section: Ref<HTMLElement | null> = ref(null)
const text:    Ref<HTMLElement | null> = ref(null)
const button1: Ref<HTMLElement | null> = ref(null)
const button2: Ref<HTMLElement | null> = ref(null)

// Register animations on mount
onMounted(() => {
  // Parallax scroll effect
  gsap.set(text.value, { yPercent: 40});
  gsap.to(text.value, {
    yPercent: -28,
    ease: 'none',
    scrollTrigger: {
      trigger: section.value,
      scrub: 1
    },
  });

  // Timeline config itself
  timeline = gsap.timeline({
    scrollTrigger: {
      trigger: button1.value,
      start: 'top 10%',
      markers: true,
      toggleActions: 'play none none reverse',
    }
  });

  // Timeline tweens
  timeline.from(button1.value, {
    x: -75,
    opacity: 0,
    duration: 0.8,
    ease: 'power1.out'
  }, '0')
  timeline.from(button2.value, {
    x: 75,
    opacity: 0,
    duration: 0.8,
    ease: 'power1.out'
  }, '0')

 /* timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section.value,
      start: 'top 150',
      toggleActions: 'play none none reverse',
    }
  });
  timeline.from(text.value, {
    x: -75,
    opacity: 0,
    duration: 0.8,
    ease: 'power1.out'
  }, "0")*/
})
</script>

<template>
  <section id="rebalancing-tool" ref="section">
    <div class="container">
      <div class="text-wrapper" ref="text">
        <div class="logo" :style="{ backgroundImage: 'url('+logoSrc+')' }"></div>
        <h2 v-html="data.heading"></h2>
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
