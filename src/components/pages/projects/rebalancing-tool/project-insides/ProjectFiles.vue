<script lang="ts" setup>
import type { PropType, Ref } from "vue";
import { ref } from "vue";
import type { IFileTab } from "@/models/tabs/IFileTab";
import type { ILinkBox } from "@/models/tabs/ILinkBox";

const props = defineProps({
  data: {
    type: Object as PropType<IFileTab>,
    required: true
  }
})

const linkBoxes: Ref<ILinkBox[]> = ref((props.data && props.data.linkBox)
    ? props.data.linkBox
    : {} as ILinkBox[]
)
</script>

<template>
  <div class="project-files">
    <div
        v-for="linkBox in linkBoxes"
        :key="linkBox.id"
        class="file-wrapper"
    >
      <div class="header">
        <img class="logo" :src="'https://strapi.claes-work.de' + linkBox.icon.url" :alt="linkBox.icon.alternativeText" />
        <span>{{ linkBox.heading }}</span>
      </div>
      <ul>
        <li
          v-for="link in linkBox.link"
          :key="link.id"
        >
          <img :src="'https://strapi.claes-work.de' + link.icon.url" :alt="link.icon.alternativeText">
          <a
              v-if="link.file && link.file.url"
              :href="'https://strapi.claes-work.de' + link.file.url"
              :title="link.titleTag"
              download
          >{{ link.text }}</a>

          <a
              v-if="!link.file || !link.file.url"
              :href="link.link"
              :title="link.titleTag"
              :target="link.openNewTab ? '_blank' : ''"
          >{{ link.text }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/pages/projects/rebalancing-tool/project-insides/project-files.scss";
</style>
