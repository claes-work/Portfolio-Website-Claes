<script setup lang="ts">
import BlogFilterBar from "@/components/pages/blog/BlogFilterBar.vue";
import BlogSearchInput from "@/components/pages/blog/BlogSearchInput.vue";
import BlogPostItem from "@/components/pages/blog/BlogPostItem.vue";
</script>

<template>
  <section id="blog-page">
    <div class="container">
      <h2>Latest posts</h2>
      <div class="blog-container">
        <main>
          <BlogFilterBar />
          <div class="blog-grid">
            <BlogPostItem />
            <BlogPostItem />
            <BlogPostItem />
            <BlogPostItem />
            <BlogPostItem />
            <BlogPostItem />
            <BlogPostItem />
            <BlogPostItem />
          </div>
        </main>
        <aside>
          <BlogSearchInput />
        </aside>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/pages/blog/blog-page.scss";
</style>
