<script lang="ts" setup>
import type { PropType } from "vue";
import type { TimelineRow } from "@/models/TimelineRow";
import TimeLineRow from "@/components/pages/about/time-line-section/TimelineRow.vue";

const props = defineProps({
  timelineData: {
    type: Object as PropType<TimelineRow[]>,
    required: true
  }
})

</script>


<template>
  <section id="timeline-section">
    <div class="container">
      <TimeLineRow
        v-for="(row, index) in props.timelineData"
        :kex="index"
        :row-data="row"
      />
    </div>
  </section>
</template>


<style lang="scss">
@import "@/assets/scss/timeline-section.scss";
</style>
