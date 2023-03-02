<script lang="ts" setup>
import { computed, ref } from "vue"
import type { ComputedRef, Ref } from "vue"
import { useMainStore } from "@/stores/MainStore";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon.vue";
import {useStrapiDataStore} from "@/stores/StrapiDataStore";
import {AllLocales} from "@/models/AllLocales";

const mainStore = useMainStore()
const strapiStore = useStrapiDataStore()
const fullColumnHeight: Ref<boolean> = ref(false)

const btnText: ComputedRef<string> = computed((): string => {
  switch (strapiStore.activeLocale) {
    default:
    case AllLocales.DE:
      return (fullColumnHeight.value) ? 'weniger anzeigen' : 'mehr anzeigen'
    case AllLocales.EN:
      return (fullColumnHeight.value) ? 'show less' : 'show more'
  }
})

</script>

<template>
  <div class="table-row">
    <div class="column technology">
      <slot name="technology"></slot>
    </div>

    <span v-if="!mainStore.isDesktop">Usage:</span>
    <ul class="column usage">
      <slot name="usage"></slot>
    </ul>

    <span v-if="!mainStore.isDesktop">Description:</span>
    <div class="column description" :class="{ open : fullColumnHeight }">
      <slot name="description"></slot>
      <div
          class="show-more"
          v-if="mainStore.isDesktop"
          @click="fullColumnHeight = !fullColumnHeight"
      >
        <span>{{ btnText }}</span>
        <ArrowDownIcon />
      </div>
    </div>

    <span v-if="!mainStore.isDesktop">Implemented by:</span>
    <div class="column implemented-by">
      <slot name="implemented-by"></slot>
    </div>
  </div>
</template>
