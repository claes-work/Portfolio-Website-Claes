<script setup lang="ts">
import { RouterView } from 'vue-router'
import MobileNavbar from "@/components/MobileNavbar.vue";
</script>

<template>
  <MobileNavbar />
  <RouterView />
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
