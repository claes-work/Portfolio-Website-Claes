<script lang="ts" setup>
import type { PropType } from "vue";
import type { IFeature } from "@/models/tabs/IFeature";
import type { IFeaturesTab } from "@/models/tabs/IFeaturesTab";
import {computed} from "vue";

const props = defineProps({
  data: {
    type: Object as PropType<IFeaturesTab>,
    required: true
  }
})

const featureData = computed(() => {
  return (props.data && props.data.features)
      ? props.data.features
      : {} as IFeature[]
})

</script>

<template>
  <div class="project-features">
    <div
        v-for="feature in featureData"
        :key="feature.id"
        class="feature-wrapper"
    >
      <img :src="'https://strapi.claes-work.de' + feature.image.url" :alt="feature.image.alternativeText" />
      <h2>{{ feature.title }}</h2>
      <p>{{ feature.description }}</p>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/pages/projects/rebalancing-tool/project-insides/project-features.scss";
</style>
