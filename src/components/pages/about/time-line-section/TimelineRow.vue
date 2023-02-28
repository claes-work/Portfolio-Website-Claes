<script lang="ts" setup>
import type { PropType } from "vue";
import type { TimelineRow } from "@/models/about-page/TimelineRow";

const props = defineProps({
  rowData: {
    type: Object as PropType<TimelineRow>,
    required: true,
  }
})
</script>

<template>
  <div class="timeline-row">
    <div class="year-column">
      <h2>{{ props.rowData.year }}</h2>
    </div>
    <div class="text-column">
      <h3>{{ props.rowData.title }}</h3>
      <p>{{ props.rowData.text }}</p>
    </div>
    <div class="timeline-point">
      <div class="timeline-circle"></div>
      <div class="timeline-line"></div>
    </div>
  </div>
</template>
