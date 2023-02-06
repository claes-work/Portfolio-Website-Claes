<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useMainStore } from "@/stores/MainStore";
import MobileNavbar from "@/components/MobileNavbar.vue";
import DesktopNavbar from "@/components/DesktopNavbar.vue";
import Footer from "@/components/Footer.vue";

const store = useMainStore()
</script>

<template>
  <MobileNavbar v-if="!store.isDesktop"/>
  <DesktopNavbar v-if="store.isDesktop"/>
  <RouterView />
  <Footer />
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
