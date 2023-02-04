<script lang="ts" setup>
import TableHeader from "@/components/tab-view/tech-stack-tab/TableHeader.vue";
import TableRow from "@/components/tab-view/tech-stack-tab/TableRow.vue";
import FigmaIcon from "@/components/icons/FigmaIcon.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination'

// define your modules list here
const modules = [Pagination, Navigation]
</script>

<template>
  <div id="tech-stack-tab">
    <TableHeader />

    <Swiper
      :slides-per-view="1"
      :space-between="15"
      :pagination="{ clickable: true }"
      :modules="[modules]"
    >
      <SwiperSlide>
        <TableRow >
          <template #technology>
            <FigmaIcon />
            <span>Figma</span>
          </template>
          <template #usage>
            <li>Wireframes</li>
            <li>Full Design</li>
          </template>
          <template #description>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </template>
          <template #implemented-by>
            <div class="profile-image"></div>
            <div class="name-wrapper">
              <div class="github">@claes-work</div>
              <div class="name">Sebastian Claes</div>
            </div>
          </template>
        </TableRow>
      </SwiperSlide>
      <SwiperSlide>
        <TableRow >
          <template #technology>
            <FigmaIcon />
            <span>Figma</span>
          </template>
          <template #usage>
            <li>Wireframes</li>
            <li>Full Design</li>
          </template>
          <template #description>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </template>
          <template #implemented-by>
            <div class="profile-image"></div>
            <div class="name-wrapper">
              <div class="github">@claes-work</div>
              <div class="name">Sebastian Claes</div>
            </div>
          </template>
        </TableRow>
      </SwiperSlide>
      <SwiperSlide>
        <TableRow >
          <template #technology>
            <FigmaIcon />
            <span>Figma</span>
          </template>
          <template #usage>
            <li>Wireframes</li>
            <li>Full Design</li>
          </template>
          <template #description>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </template>
          <template #implemented-by>
            <div class="profile-image"></div>
            <div class="name-wrapper">
              <div class="github">@claes-work</div>
              <div class="name">Sebastian Claes</div>
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
