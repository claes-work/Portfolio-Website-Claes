<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useMainStore } from "@/stores/MainStore";
import MobileNavbar from "@/components/content-elements/navbar/MobileNavbar.vue";
import DesktopNavbar from "@/components/content-elements/navbar/DesktopNavbar.vue";
import TransitionOverlay from "@/components/TransitionOverlay.vue";
import Footer from "@/components/content-elements/Footer.vue";
import {onMounted} from "vue";
import WelcomeOverlay from "@/components/WelcomeOverlay.vue";
import {useStrapiDataStore} from "@/stores/StrapiDataStore";

const store = useMainStore()
const strapiStore = useStrapiDataStore()

// Fetch strapi data on mounted
onMounted(async () => {
  await strapiStore.fetchAllStrapiData()
})
</script>

<template>
  <WelcomeOverlay />
  <TransitionOverlay v-show="store.showPageTransition"/>
  <MobileNavbar v-if="!store.isDesktop"/>
  <DesktopNavbar v-if="store.isDesktop"/>
  <RouterView />
  <Footer />
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
