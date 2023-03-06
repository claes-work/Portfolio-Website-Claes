<script lang="ts" setup>
import { ProjectTabReferences } from "@/models/components/tabs/enums/ProjectTabReferences";

const emit = defineEmits(['change-tab'])

import type { ComputedRef, PropType, Ref } from "vue";
import type { IProjectIdeaTab } from "@/models/components/tabs/IProjectIdeaTab";
import { ref, computed } from "vue";
import type {IMedia} from "@/models/components/media/IMedia";
import type {IButton} from "@/models/components/buttons/IButton";

const props = defineProps({
  data: {
    type: Object as PropType<IProjectIdeaTab>,
    required: true
  }
})

const heading: Ref<string> = ref((props.data && props.data.heading)
    ? props.data.heading
    : ''
)

const text: Ref<string> = ref((props.data && props.data.text)
    ? props.data.text
    : ''
)

const image: ComputedRef<IMedia> = computed(() => {
  return (props.data && props.data.image)
      ? props.data.image
      : {} as IMedia
})

const button: ComputedRef<IButton> = computed(() => {
  return (props.data && props.data.button)
      ? props.data.button
      : {} as IButton
})

</script>

<template>
  <div class="project-idea">
    <h2 class="heading" v-html="props.data.heading"></h2>

    <img
        class="wireframes-bc"
        :src="'https://strapi.claes-work.de' + image.url"
        :alt="image.alternativeText"
    />

    <p>{{ props.data.text }}</p>

    <div
        class="button"
        @click="$emit('change-tab', ProjectTabReferences.FEATURES)"
        :title="button.titleAttr">
      {{ button.text }}
    </div>

  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/pages/projects/project-insides/project-idea.scss";
</style>
