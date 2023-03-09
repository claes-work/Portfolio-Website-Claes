<script lang="ts" setup>
import type { PropType } from "vue";
import type { ITimelineRow } from "@/models/about-page/ITimelineRow";

const props = defineProps({
  rowData: {
    type: Object as PropType<ITimelineRow>,
    required: true,
  }
})
</script>

<template>
  <div class="timeline-row">
    <div class="year-column">
      <h2>{{ props.rowData.date }}</h2>
    </div>
    <div class="text-column">
      <h3>{{ props.rowData.heading }}</h3>
      <p>{{ props.rowData.text }}</p>
    </div>
    <div class="timeline-point">
      <div class="timeline-circle"></div>
      <div class="timeline-line"></div>
    </div>
  </div>
</template>
