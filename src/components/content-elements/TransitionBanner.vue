<script lang="ts" setup>
const props = defineProps({
  htmlText: {
    type: String,
    default: true,
  },
})
</script>

<template>
  <div class="transition-banner">
    <h3 v-html="props.htmlText"></h3>
  </div>
</template>
