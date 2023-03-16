<script setup lang="ts">
import { computed, onMounted, ref} from "vue";
import type { ComputedRef, Ref } from "vue";
import gsap from "gsap";
import {wordFloatUp} from "@/composables/animations/TextAnimations";

const props = defineProps({
  heading: {
    type: String,
    required: true
  }
})

let timeline: GSAPTimeline | null = null
const charElements: Ref<HTMLElement[][]> = ref([])

onMounted(() => {
  timeline = gsap.timeline();
  timeline = wordFloatUp(timeline, charElements.value)
})

// Get array based of heading strings split by <br> and extend charElements array
const headingArray: ComputedRef<string[]> = computed(() => {
  if (props.heading) {
    const array = props.heading.split('<br>')
    // Push empty array for each heading string to ensure the array index is not null
    array.forEach(() => charElements.value.push([]))
    return array
  }
  return ['']
})

let space: string = '<div style="opacity:0;width:8px;">.</div>'
</script>


<template>
  <h2>
    <span
        class="wrapper"
        v-for="(headingString, arrayIndex) in headingArray"
        :key="arrayIndex"
    >
      <span
          v-for="(char, charIndex) in headingString.split('')"
          :key="charIndex"
          :ref="(el) => charElements[arrayIndex].push(el)"
          v-html="(char === '#') ? space : char"
      ></span>
    </span>
  </h2>
</template>


<style lang="scss" scoped>
h2 {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;

  span {
    color: $primary-text-color;
    display: block;
    overflow: hidden;
    line-height: 1.2;
  }

  .wrapper {
    display: flex;
  }
}

#hero-section h2 .wrapper span {
  color: #FFFFFF;
}

#hero-section h2 .wrapper:last-child span {
  color: $main-color;
}
</style>
