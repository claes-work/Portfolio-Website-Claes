<script lang="ts" setup>
import TabContainer from "@/components/tab-view/TabHeader.vue";
import TechStackTab from "@/components/tab-view/tech-stack-tab/TechStackTab.vue";
import { techStackData } from "@/data/TechStackData"
</script>

<template>
  <section id="rebalancing-tool-insides">
    <div class="container">
      <h3>Project insides</h3>
      <TabContainer />
      <TechStackTab :slider-data="techStackData" />
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/rebalancing-tool-insides.scss";
</style>
