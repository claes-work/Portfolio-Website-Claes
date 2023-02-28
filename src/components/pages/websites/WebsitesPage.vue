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

const mainStore = useMainStore()

// section references
const refs = {
  pureAir: ref(null),
  diewellWebsite: ref(null),
  broadyPictures: ref(null)
}

// Typed data from strapi api
const pureAirData: Ref<IPureAir> = ref({} as IPureAir)

// Fetch strapi data on mounted
onMounted(async () => {
  pureAirData.value = await FetchAppSections.fetchPureAirSection()
})
</script>



<template>
  <PureAir :ref="(el) => mainStore.setSectionOffset(el, 'pureAir')" />
  <AchievementsBanner :style="{ backgroundColor: '#1E90FF' }"/>
  <DiewellWebsite :ref="(el) => mainStore.setSectionOffset(el, 'diewellWebsite')" />
  <AchievementsBanner :style="{ backgroundColor: '#0E243F' }"/>
  <BroadyPictures :ref="(el) => mainStore.setSectionOffset(el, 'diewellWebsite')" />
  <AchievementsBanner :style="{ backgroundColor: '#383224' }"/>
</template>
