<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import type { Ref } from "vue";
import type { IPureAir } from "@/models/websites/pure-air/IPureAir";
import PureAir from "@/components/pages/websites/pure-air/PureAir.vue";
import AchievementsBanner from "@/components/content-elements/AchievementsBanner.vue";
import DiewellWebsite from "@/components/pages/websites/diewell-website/DiewellWebsite.vue";
import BroadyPictures from "@/components/pages/websites/broady-pictures/BroadyPictures.vue";
import FetchAppSections from "@/services/FetchAppSections";
import { useMainStore } from "@/stores/MainStore";
import type {IDiewellWebsite} from "@/models/websites/diewell-website/IDiewellWebsite";
import type {IBroadyPictures} from "@/models/websites/broady-pictures/IBroadyPictures";
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
  <AchievementsBanner :style="{ backgroundColor: '#1E90FF' }"/>
  <DiewellWebsite
      :ref="(el) => mainStore.setSectionOffset(el, 'diewellWebsite')"
      :data="strapiStore.websiteData.diewellWebsite"
  />
  <AchievementsBanner :style="{ backgroundColor: '#0E243F' }"/>
  <BroadyPictures
      :ref="(el) => mainStore.setSectionOffset(el, 'broadyPictures')"
      :data="strapiStore.websiteData.broadyPictures"
  />
  <AchievementsBanner :style="{ backgroundColor: '#383224' }"/>
</template>
