<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Ref } from "vue";
import type { IPureAir } from "@/models/pure-air/IPureAir";
import PureAir from "@/components/pages/websites/pure-air/PureAir.vue";
import AchievementsBanner from "@/components/content-elements/AchievementsBanner.vue";
import DiewellWebsite from "@/components/pages/websites/diewell-website/DiewellWebsite.vue";
import BroadyPictures from "@/components/pages/websites/broady-pictures/BroadyPictures.vue";
import FetchAppSections from "@/services/FetchAppSections";
import { useMainStore } from "@/stores/MainStore";

const mainStore = useMainStore()

// section references
const pureAirSection = ref(null)
const diewellWebsiteSection = ref(null)
const broadyPricturesSection = ref(null)


// Typed data from strapi api
const pureAirData: Ref<IPureAir> = ref({} as IPureAir)

// Fetch strapi data on mounted
onMounted(async () => {
  pureAirData.value = await FetchAppSections.fetchPureAirSection()

  // Set the section offsets after page load
  mainStore.offsets.pureAir = pureAirSection.value.$el.offsetTop
  mainStore.offsets.diewellWebsite = diewellWebsiteSection.value.$el.offsetTop
  mainStore.offsets.broadyPrictures = broadyPricturesSection.value.$el.offsetTop
})
</script>

<template>
  <PureAir ref="pureAirSection"/>
  <AchievementsBanner :style="{ backgroundColor: '#1E90FF' }"/>
  <DiewellWebsite ref="diewellWebsiteSection"/>
  <AchievementsBanner :style="{ backgroundColor: '#0E243F' }"/>
  <BroadyPictures ref="broadyPricturesSection"/>
  <AchievementsBanner :style="{ backgroundColor: '#383224' }"/>
</template>
