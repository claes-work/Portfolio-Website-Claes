<script lang="ts" setup>
import TableHeader from "@/components/tab-view/tech-stack-tab/TableHeader.vue";
import TableRow from "@/components/tab-view/tech-stack-tab/TableRow.vue";
import type { PropType } from "vue";
import type { TechData } from "@/models/TechData";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Virtual } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination'

const props = defineProps({
  sliderData: {
    type: Object as PropType<TechData[]>,
    required: true,
  }
})

console.log(props.sliderData)
</script>

<template>
  <div id="tech-stack-tab">
    <TableHeader />
    <Swiper
        :slides-per-view="1"
        :space-between="15"
        :pagination="{ clickable: true }"
        :modules="[Virtual]"
        :auto-height="true"
        :observer="true"
        virtual
    >
      <SwiperSlide
          v-for="(slide, index) in props.sliderData"
          :key="index"
          :virtualIndex="index"
      >
        <TableRow >
          <template #technology>
            <div class="logo" :style="{ backgroundImage: slide.icon }" ></div>
            <span>{{ slide.title }}</span>
          </template>
          <template #usage>
            <li v-for="(li, index) in slide.usageList" :key="index" v-html="li"></li>
          </template>
          <template #description>
            <p>{{ slide.description }}</p>
          </template>
          <template #implemented-by>
            <div
                class="profile-image"
            ></div>
            <div class="name-wrapper">
              <div class="github">{{ slide.implementedBy.tag }}</div>
              <div class="name">{{ slide.implementedBy.fullName }}</div>
            </div>
          </template>
        </TableRow>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/tab-view/tech-stack-tab.scss";
</style>
