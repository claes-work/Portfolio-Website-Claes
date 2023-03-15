<script setup lang="ts">
import PureAir from "@/components/pages/websites/pure-air/PureAir.vue";
import ThreeGridBanner from "@/components/content-elements/banners/ThreeGridBanner.vue";
import DiewellWebsite from "@/components/pages/websites/diewell-website/DiewellWebsite.vue";
import BroadyPictures from "@/components/pages/websites/broady-pictures/BroadyPictures.vue";
import { useMainStore } from "@/stores/MainStore";
import {useStrapiDataStore} from "@/stores/StrapiDataStore";

const mainStore = useMainStore()
const strapiStore = useStrapiDataStore()
</script>

<template>
  <div id="website-page">

    <ThreeGridBanner
        :style="{ backgroundColor: '#1E90FF' }"
        :data="strapiStore.websiteData.pureAir.threeGridBanner"
    />
    <DiewellWebsite
        :ref="async (el) => await mainStore.setSectionOffset(el, 'diewellWebsite')"
        :data="strapiStore.websiteData.diewellWebsite"
    />
    <BroadyPictures
        :ref="(el) => mainStore.setSectionOffset(el, 'broadyPictures')"
        :data="strapiStore.websiteData.broadyPictures"
    />
  </div>
</template>
