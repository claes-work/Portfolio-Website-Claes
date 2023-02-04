<script lang="ts" setup>
import { useMainStore } from "@/stores/MainStore";

const mainStore = useMainStore()
</script>

<template>
  <div class="table-row">
    <div class="column technology">
      <slot name="technology"></slot>
    </div>

    <span v-if="!mainStore.isDesktop">Usage:</span>
    <ul class="column usage">
      <slot name="usage"></slot>
    </ul>

    <span v-if="!mainStore.isDesktop">Description:</span>
    <div class="column description">
      <slot name="description"></slot>
    </div>

    <span v-if="!mainStore.isDesktop">Implemented by:</span>
    <div class="column implemented-by">
      <slot name="implemented-by"></slot>
    </div>
  </div>
</template>
