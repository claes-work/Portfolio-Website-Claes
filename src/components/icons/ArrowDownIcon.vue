<template>
  <svg width="12" height="7" viewBox="0 0 12 7" :fill="fill" xmlns="http://www.w3.org/2000/svg" rotate="">
    <line x1="1.06066" y1="1" x2="6" y2="5.93934" :stroke="fill" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="6" y1="5.93934" x2="10.9393" y2="1" :stroke="fill" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: true,
  },
  fill: {
    type: String,
    default: '#53FDCA'
  }
})
</script>

<style scoped>
svg.open {
  margin-top: -1px;
}
</style>
