<script setup lang="ts">
import BlogFilterBar from "@/components/pages/blog/BlogFilterBar.vue";
</script>

<template>
  <section id="blog-page">
    <div class="container">
      <h2>Latest posts</h2>
      <BlogFilterBar />
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/pages/blog/blog-page.scss";
</style>
