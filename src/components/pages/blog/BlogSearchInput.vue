<script lang="ts" setup>
import SearchIcon from "@/components/icons/SearchIcon.vue";
</script>

<template>
  <label for="search-bar">
    <input id="search-bar" value="" placeholder="Search" />
    <SearchIcon />
  </label>
</template>

<style lang="scss">
@import "@/assets/scss/pages/blog/bolg-search.scss";
</style>
