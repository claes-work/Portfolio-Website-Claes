<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useMainStore } from "@/stores/MainStore";
import MobileNavbar from "@/components/content-elements/navbar/MobileNavbar.vue";
import DesktopNavbar from "@/components/content-elements/navbar/DesktopNavbar.vue";
import Footer from "@/components/content-elements/Footer.vue";
import {onMounted} from "vue";
import gsap from "gsap";
import WelcomeOverlay from "@/components/WelcomeOverlay.vue";

const store = useMainStore()
</script>

<template>
  <WelcomeOverlay />
  <MobileNavbar v-if="!store.isDesktop"/>
  <DesktopNavbar v-if="store.isDesktop"/>
  <RouterView />
  <Footer />
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
