<script lang="ts" setup>
import TableHeader from "@/components/content-elements/table-element/TableHeader.vue";
import TableRow from "@/components/content-elements/table-element/TableRow.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Virtual } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination'
import { techStackData } from "@/data/TechStackData"
import { useMainStore } from "@/stores/MainStore";

const mainStore = useMainStore()
</script>

<template>
  <div id="project-tech-stack">
    <TableHeader />
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
          v-for="(slide, index) in techStackData"
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

    <TableRow
        v-if="mainStore.isDesktop"
        v-for="(row, index) in techStackData"
        :key="index"
    >
      <template #technology>
        <div class="logo" :style="{ backgroundImage: row.icon }" ></div>
        <span>{{ row.title }}</span>
      </template>
      <template #usage>
        <li v-for="(li, index) in row.usageList" :key="index" v-html="li"></li>
      </template>
      <template #description>
        <p>{{ row.description }}</p>
      </template>
      <template #implemented-by>
        <div
            class="profile-image"
        ></div>
        <div class="name-wrapper">
          <div class="github">{{ row.implementedBy.tag }}</div>
          <div class="name">{{ row.implementedBy.fullName }}</div>
        </div>
      </template>
    </TableRow>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/tab-view/project-tech-stack.scss";
</style>
