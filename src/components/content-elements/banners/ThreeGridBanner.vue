<script lang="ts" setup>
import { computed } from "vue";
import type { PropType, ComputedRef } from "vue";
import type { IThreeGridBanner } from "@/models/components/banners/IThreeGridBanner";
import type { IColumn } from "@/models/components/banners/IColumn";
import Stat from "@/components/content-elements/banners/Stat.vue";

const props = defineProps({
  data: {
    type: Object as PropType<IThreeGridBanner>,
    required: true
  }
})

const bannerData: ComputedRef<IThreeGridBanner> = computed(() => {
  return props.data ? props.data : {} as IThreeGridBanner
})

const bannerColumns: ComputedRef<IColumn[]> = computed(() => {
  return bannerData.value && bannerData.value.columns ? bannerData.value.columns : {} as IColumn[]
})
</script>

<template>
  <div class="three-grid-banner">
    <h3 v-html="bannerData.heading"></h3>
    <div
        v-for="column in bannerColumns"
        :key="column.id"
        class="column"
    >
      <div class="stats-wrapper">
        <Stat :data="column.stats" />
        <span>{{ column.numberTitle }}</span>
      </div>
      <p>{{ column.description }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/content-elements/three-grid-banner.scss";
</style>
