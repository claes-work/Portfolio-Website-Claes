<script lang="ts" setup>
import TimeLineRow from "@/components/pages/about/time-line-section/TimelineRow.vue";
import { computed } from "vue";
import { useStrapiDataStore } from "@/stores/StrapiDataStore";
import type { ComputedRef } from "vue";
import type { ITimelineRow } from "@/models/about-page/ITimelineRow";

const strapiStore = useStrapiDataStore()

// Ensure that timeline data from strapi api has been fetched
const timeLine: ComputedRef<ITimelineRow[]> = computed(() => {
  return strapiStore.aboutData.timeline
      ? strapiStore.aboutData.timeline
      : {} as ITimelineRow[]
})
</script>


<template>
  <section id="timeline-section">
    <div class="container">
      <TimeLineRow
        v-for="(row, index) in timeLine"
        :kex="index"
        :row-data="row"
      />
    </div>
  </section>
</template>


<style lang="scss">
@import "@/assets/scss/pages/about/timeline-section.scss";
</style>
