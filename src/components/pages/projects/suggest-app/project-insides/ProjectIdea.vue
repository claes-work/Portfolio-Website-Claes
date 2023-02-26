<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from "vue";
import type { IProjectIdeaTab } from "@/models/tabs/IProjectIdeaTab";
import { ref, computed } from "vue";
import type {IMedia} from "@/models/components/media/IMedia";
import type {IButton} from "@/models/components/IButton";

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
        @click="$emit('change-tab', 'Features')"
        :title="button.titleAttr">
      {{ button.text }}
    </div>

  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/pages/projects/rebalancing-tool/project-insides/project-idea.scss";

@media only screen and (min-width: 768px) {
  .project-idea .wireframes-bc {
    shape-outside: url('@/assets/images/Suggest_Idea_Text_Shape.png');
    margin-right: -270px;
    margin-top: -40px;
    margin-bottom: -130px;
    shape-margin: 60px;
  }
}

@media only screen and (min-width: 840px) {
  .project-idea .wireframes-bc {
    margin-top: -55px;
    margin-bottom: -188px;
  }
}

@media only screen and (min-width: 900px) {
  .project-idea .wireframes-bc {
    margin-top: -55px;
    margin-bottom: -290px;
    margin-right: -220px;
  }
}

@media only screen and (min-width: 991px) {
  .project-idea {
    padding: 40px;

    .wireframes-bc {
      margin-right: -250px;
    }
  }
}

@media only screen and (min-width: 1100px) {
  .project-idea .wireframes-bc {
    shape-margin: 80px;
    margin-top: -100px;
  }
}

@media only screen and (min-width: 1280px) {
  .project-idea {
    background-color: unset;
    border: unset;
    max-width: unset;
    padding: 0 50px 50px;
    width: calc(100% + 40px);
    margin-left: -20px;
    margin-bottom: -45px;

    .wireframes-bc {
      margin-bottom: -410px;
      margin-top: -165px;
    }
  }
}
</style>
