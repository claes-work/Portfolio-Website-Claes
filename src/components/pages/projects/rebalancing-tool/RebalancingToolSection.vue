<script lang="ts" setup>
import Video from "@/components/pages/projects/rebalancing-tool/RebalancingVideo.vue";
</script>

<template>
  <section id="rebalancing-tool">
    <div class="container">
      <div class="text-wrapper">
        <div class="logo"></div>
        <h2>Portfolio<br>Rebalancing Tool</h2>
        <p>This App simplifies the process of asset rebalancing. With a user-friendly interface, investors can easily track and manage their portfolio.</p>
        <div class="button-wrapper">
          <a
              class="button primary"
              href="https://portfolio-rebalancer.com/"
              title="portfolio-rebalancer.com"
          >Try it now</a>
          <a
              class="button secondary"
              href="https://github.com/Asset-Rebalancing-Tool/AssetRebalancingTool"
              title="github.com/Asset-Rebalancing-Tool"
          >Browse Code</a>
        </div>
      </div>
      <div class="macbook-image-wrapper">
        <img
            class="macbook-image"
            src="@/assets/images/MacBook_Portfolio_Rebalancer.png"
            alt="MacBook Portfolio Rebalancer"
        />
        <div class="player-container">
          <Vue3VideoPlayer ref="player" src="src/assets/videos/test.mp4" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/pages/projects/rebalancing-tool/rebalancing-tool.scss";
</style>
