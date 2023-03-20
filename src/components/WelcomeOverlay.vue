<script setup lang="ts">
import { useMainStore } from "@/stores/MainStore";
import {useStrapiDataStore} from "@/stores/StrapiDataStore";
import type {ComputedRef, Ref} from "vue";
import {computed, onMounted, ref} from "vue";
import {AllLocales} from "@/models/AllLocales";
import gsap from "gsap";
import {charFloatUp, wordFloatDown} from "@/composables/animations/TextAnimations";
import {blinderTransition} from "@/composables/animations/BackgroundAnimations";

const mainStore = useMainStore()
const strapiStore = useStrapiDataStore()

const overlay: Ref<HTMLElement | null> = ref(null)
const charElements: Ref<HTMLElement[]> = ref([])

const blinderElements: Ref<HTMLElement[]> = ref([])

const welcomeText: ComputedRef<string> = computed(() => {
  switch (strapiStore.activeLocale) {
    default:
    case AllLocales.EN:
      return 'Welcome'
    case AllLocales.DE:
      return 'Willkommen'
  }
})

// GSAP timeline
let timeline: GSAPTimeline | null = null

onMounted(() => {
  timeline = gsap.timeline();
  timeline = charFloatUp(timeline, charElements.value)
  timeline = wordFloatDown(timeline, charElements.value)
  timeline = blinderTransition(timeline, blinderElements.value)

  // Disable welcome container element after animation
  timeline.to(overlay.value, {
     opacity: 0,
     display: 'none'
  }, 3.5 + (blinderElements.value.length / 14))
})
</script>

<template>
  <div id="welcome-container" ref="overlay">
    <div class="overlay" :class="{ hide : mainStore.hasLoaded }"></div>
    <h3>
      <span class="wrapper">
        <span
            v-for="(char, index) in welcomeText.split('')"
            :key="index"
            :ref="(el) => charElements.push(el)"
        >{{ char }}</span>
      </span>
    </h3>
    <div class="blinder-container">
      <div
          v-for="(blinder, index) in 8"
          :key="index"
          :ref="(el) => blinderElements.push(el)"
          class="blinder"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#welcome-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  pointer-events: none;

  h3 {
    z-index: 10010;

    span {
      display: block;
      overflow: hidden;
      color: #FFFFFF;
      font-size: 26px;
      font-weight: 900;
      font-family: Varino, sans-serif;
    }

    .wrapper {
      display: flex;
    }
  }

  .blinder-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
  }

  .blinder {
    background-color: #000000;
    height: 100vh;
    flex: 1;
    transform-origin: bottom;
  }
}

#welcome-container .overlay.hide {
  display: none;
}

@media only screen and (min-width: 768px) {
  #welcome-container h3 span {
    font-size: 40px;
  }
}

@media only screen and (min-width: 991px) {
  #welcome-container h3 span {
    font-size: 60px;
  }
}

@media only screen and (min-width: 1280px) {
  #welcome-container h3 span {
    font-size: 70px;
  }
}

@media only screen and (min-width: 1360px) {
  #welcome-container h3 span {
    font-size: 80px;
  }
}
</style>
