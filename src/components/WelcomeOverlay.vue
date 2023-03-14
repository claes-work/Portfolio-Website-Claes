<script setup lang="ts">
import { useMainStore } from "@/stores/MainStore";
import {useStrapiDataStore} from "@/stores/StrapiDataStore";
import type {ComputedRef, Ref} from "vue";
import {computed, onMounted, ref} from "vue";
import {AllLocales} from "@/models/AllLocales";
import gsap from "gsap";
import { charFloatUp } from "@/composables/animations/TextAnimations";

const mainStore = useMainStore()
const strapiStore = useStrapiDataStore()

const overlay: Ref<HTMLElement | null> = ref(null)
const charElements: Ref<HTMLElement[]> = ref([])

const welcomeText: ComputedRef<string> = computed(() => {
  switch (strapiStore.activeLocale) {
    default:
    case AllLocales.DE:
      return 'Willkommen'
    case AllLocales.EN:
      return 'Welcome'
  }
})

// GSAP timeline
let timeline: GSAPTimeline | null = null

onMounted(() => {
  timeline = gsap.timeline();
  timeline = charFloatUp(timeline, charElements.value)
  timeline.to(overlay.value, {
    opacity: 0,
    ease: 'ease-out',
    duration: 1
  }, '2.5')
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
  </div>
</template>

<style lang="scss" scoped>
#welcome-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  background-color: #000000;

  h3 {
    color: #FFFFFF;
    font-size: 60px;
    z-index: 10002;

    span {
      display: block;
      overflow: hidden;
    }

    .wrapper {
      display: flex;
    }
  }
}

#welcome-container .overlay.hide {
  display: none;
}
</style>
