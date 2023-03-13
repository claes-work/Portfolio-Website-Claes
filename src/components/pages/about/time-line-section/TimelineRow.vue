<script lang="ts" setup>
import { onMounted, ref } from "vue";
import type { PropType, Ref } from "vue";
import gsap from "gsap";
import type { ITimelineRow } from "@/models/about-page/ITimelineRow";

const props = defineProps({
  rowData: {
    type: Object as PropType<ITimelineRow>,
    required: true,
  }
})

let timeline = null

const row: Ref<HTMLElement | null> = ref(null)
const date: Ref<HTMLElement | null> = ref(null)
const text: Ref<HTMLElement | null> = ref(null)

onMounted(() => {

  timeline = gsap.timeline({
    scrollTrigger: {
      trigger: row.value,
      start: 'top 150',
      toggleActions: 'play none none reverse',
    }
  });

  timeline.from(date.value, {
    x: -75,
    opacity: 0,
    duration: 0.8,
    ease: 'power1.out'
  }, "0")

  timeline.from(text.value, {
    x: 75,
    opacity: 0,
    duration: 0.8,
    ease: 'power1.out'
  }, "0")
})
</script>

<template>
  <div class="timeline-row" ref="row">
    <div class="date-column" ref="date">
      <h2>{{ props.rowData.date }}</h2>
    </div>
    <div class="text-column" ref="text">
      <h3 v-html="props.rowData.heading"></h3>
      <p>{{ props.rowData.text }}</p>
    </div>
    <div class="timeline-point">
      <div class="timeline-circle"></div>
      <div class="timeline-line"></div>
    </div>
  </div>
</template>
