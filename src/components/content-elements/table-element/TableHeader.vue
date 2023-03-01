<script lang="ts" setup>
import type { PropType } from "vue";
import type { ILabel } from "@/models/components/tabs/ILabel";

const props = defineProps({
  labels: {
    type: Object as PropType<ILabel[]>,
    required: true
  }
})
</script>

<template>
  <div id="table-header">
    <div
        v-for="label in labels"
        :key="label.id"
        class="th"
        :class="label.cssClass ? label.cssClass : ''"
    >{{ label.label }}</div>
  </div>
</template>
