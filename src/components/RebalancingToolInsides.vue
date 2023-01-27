<script lang="ts" setup>
import TabContainer from "@/components/tab-view/TabContainer.vue";
import TechStackTab from "@/components/tab-view/tech-stack-tab/TechStackTab.vue";
</script>

<template>
  <section id="rebalancing-tool-insides">
    <div class="container">
      <h2>Project insides</h2>
      <TabContainer />
      <TechStackTab />
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/rebalancing-tool-insides.scss";
</style>
