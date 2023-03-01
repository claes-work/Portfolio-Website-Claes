<script lang="ts" setup>
import TableHeader from "@/components/content-elements/table-element/TableHeader.vue";
import TableRow from "@/components/content-elements/table-element/TableRow.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Virtual } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination'
import { useMainStore } from "@/stores/MainStore";
import type { PropType } from "vue";
import type { ITechStackTab } from "@/models/components/tabs/ITechStackTab";
import { ref } from "vue";
import type{ Ref } from "vue";
import type { ITechStackRow } from "@/models/components/tabs/ITechStackRow";
import type {ILabel} from "@/models/components/tabs/ILabel";

const mainStore = useMainStore()

const props = defineProps({
  data: {
    type: Object as PropType<ITechStackTab>,
    required: true
  }
})

// tech Stack Table labels
const labels: Ref<ILabel[]> = ref((props.data && props.data.labels)
    ? props.data.labels
    : {} as ILabel[]
)

// Tech Stack Rows
const techStackRows: Ref<ITechStackRow[]> = ref((props.data && props.data.techStackRow)
    ? props.data.techStackRow
    : {} as ITechStackRow[]
)
</script>

<template>
  <div class="project-tech-stack">
    <TableHeader :labels="labels" />
    <Swiper
        v-if="!mainStore.isDesktop"
        :slides-per-view="1"
        :space-between="15"
        :pagination="{ clickable: true }"
        :modules="[Virtual]"
        :auto-height="true"
        :observer="true"
        virtual
    >
      <SwiperSlide
          v-for="(slide, index) in techStackRows"
          :key="index"
          :virtualIndex="index"
      >
        <TableRow >
          <template #technology>
            <img class="logo" :src="'https://strapi.claes-work.de' + slide.techIcon.url" :alt="slide.techIcon.alternativeText" />
            <span>{{ slide.techTitle }}</span>
          </template>
          <template #usage>
            <li v-for="usage in slide.usageList" :key="usage.id" v-html="usage.li"></li>
          </template>
          <template #description>
            <p>{{ slide.description }}</p>
          </template>
          <template #implemented-by>
            <img
                class="profile-image"
                :src="'https://strapi.claes-work.de' + slide.implementedBy.profileImage.url"
                :alt="slide.implementedBy.profileImage.alternativeText"
            />
            <div class="name-wrapper">
              <div class="github">{{ slide.implementedBy.shortTag }}</div>
              <div class="name">{{ slide.implementedBy.fullName }}</div>
            </div>
          </template>
        </TableRow>
      </SwiperSlide>
    </Swiper>

    <TableRow
        v-if="mainStore.isDesktop"
        v-for="(row, index) in techStackRows"
        :key="index"
    >
      <template #technology>
        <img class="logo" :src="'https://strapi.claes-work.de' + row.techIcon.url" :alt="row.techIcon.alternativeText" />
        <span>{{ row.techTitle }}</span>
      </template>
      <template #usage>
        <li v-for="usage in row.usageList" :key="usage.id" v-html="usage.li"></li>
      </template>
      <template #description>
        <p>{{ row.description }}</p>
      </template>
      <template #implemented-by>
        <img
            class="profile-image"
            :src="'https://strapi.claes-work.de' + row.implementedBy.profileImage.url"
            :alt="row.implementedBy.profileImage.alternativeText"
        />
        <div class="name-wrapper">
          <div class="github">{{ row.implementedBy.shortTag }}</div>
          <div class="name">{{ row.implementedBy.fullName }}</div>
        </div>
      </template>
    </TableRow>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/pages/projects/project-insides/project-tech-stack.scss";
</style>
