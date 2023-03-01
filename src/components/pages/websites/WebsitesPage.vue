<script setup lang="ts">
import { onMounted } from "vue";
import PureAir from "@/components/pages/websites/pure-air/PureAir.vue";
import ThreeGridBanner from "@/components/content-elements/banners/ThreeGridBanner.vue";
import DiewellWebsite from "@/components/pages/websites/diewell-website/DiewellWebsite.vue";
import BroadyPictures from "@/components/pages/websites/broady-pictures/BroadyPictures.vue";
import FetchAppSections from "@/services/FetchAppSections";
import { useMainStore } from "@/stores/MainStore";
import {useStrapiDataStore} from "@/stores/StrapiDataStore";

const mainStore = useMainStore()
const strapiStore = useStrapiDataStore()

// Fetch strapi data on mounted
onMounted(async () => {
  strapiStore.websiteData.pureAir        = await FetchAppSections.fetchPureAirSection()
  strapiStore.websiteData.diewellWebsite = await FetchAppSections.fetchDiewellWebsiteSection()
  strapiStore.websiteData.broadyPictures = await FetchAppSections.fetchBroadyPicturesSection()
})
</script>

<template>
  <PureAir
      :ref="(el) => mainStore.setSectionOffset(el, 'pureAir')"
      :data="strapiStore.websiteData.pureAir"
  />
  <ThreeGridBanner
      :style="{ backgroundColor: '#1E90FF' }"
      :data="strapiStore.websiteData.pureAir.threeGridBanner"
  />
  <DiewellWebsite
      :ref="(el) => mainStore.setSectionOffset(el, 'diewellWebsite')"
      :data="strapiStore.websiteData.diewellWebsite"
  />
  <ThreeGridBanner
      :style="{ backgroundColor: '#0E243F' }"
      :data="strapiStore.websiteData.pureAir.threeGridBanner"
  />
  <BroadyPictures
      :ref="(el) => mainStore.setSectionOffset(el, 'broadyPictures')"
      :data="strapiStore.websiteData.broadyPictures"
  />
  <ThreeGridBanner
      :style="{ backgroundColor: '#383224' }"
      :data="strapiStore.websiteData.pureAir.threeGridBanner"
  />
</template>
