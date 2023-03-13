<script lang="ts" setup>
import gsap from "gsap";
import { ref } from "vue";
import type { Ref } from "vue";
import { numberWithCommas } from "@/composables/NumberFormating";

const props = defineProps({
  data: {
    type: Number,
    required: true
  }
})

const countedStats: Ref<string> = ref('0')
let currentVal = { val: 0 }

gsap.to(currentVal, 1.8, {
  val: props.data,
  roundProps: 'val',
  onUpdate: function () {
    countedStats.value = numberWithCommas(currentVal.val);
  }
});
</script>

<template>
  <div class="stats">{{ countedStats }}</div>
</template>
