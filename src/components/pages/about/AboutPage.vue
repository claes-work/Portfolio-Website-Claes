<script setup lang="ts">
import HeroSection from "@/components/pages/about/hero-section/HeroSection.vue";
import TimeLine from "@/components/pages/about/time-line-section/TimelineSection.vue";
import PersonalTechStackSection from "@/components/pages/about/personal-tech-stack-section/PersonalTechStackSection.vue";
import QuoteBanner from "@/components/content-elements/banners/QuoteBanner.vue";
import { useStrapiDataStore } from "@/stores/StrapiDataStore";
import { onMounted } from "vue";
import FetchAppSections from "@/services/FetchAppSections";

const strapiStore = useStrapiDataStore()

// Fetch strapi data on mounted
onMounted(async () => {
  strapiStore.aboutData = await FetchAppSections.fetchAboutPage()
})

</script>

<template>
  <HeroSection />
  <QuoteBanner />
  <PersonalTechStackSection />
  <TimeLine />
</template>
