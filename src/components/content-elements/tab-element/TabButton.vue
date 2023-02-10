<script lang="ts" setup>
const props = defineProps({
  tabName: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="tab-button">
    <slot name="tab-icon"></slot>
    <span>{{ tabName }}</span>
  </div>
</template>
