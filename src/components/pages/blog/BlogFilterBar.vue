<script lang="ts" setup>

import SearchIcon from "@/components/icons/SearchIcon.vue";
</script>

<template>
  <div class="blog-filter-bar">
    <button class="blog-filter-btn">BlogFilter</button>
    <button class="blog-filter-btn">BlogFilter</button>
    <button class="blog-filter-btn">BlogFilter</button>
    <button class="blog-filter-btn">BlogFilter</button>

    <label for="search-bar">
      <input id="search-bar" value="" placeholder="Search" />
      <SearchIcon />
    </label>
  </div>
</template>
