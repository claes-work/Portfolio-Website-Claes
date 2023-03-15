<script setup lang="ts">
import HeroSection from "@/components/pages/about/hero-section/HeroSection.vue";
import TimeLine from "@/components/pages/about/time-line-section/TimelineSection.vue";
import PersonalTechStackSection from "@/components/pages/about/personal-tech-stack-section/PersonalTechStackSection.vue";
import QuoteBanner from "@/components/content-elements/banners/QuoteBanner.vue";
</script>

<template>
  <div id="about-page">
    <HeroSection />
    <QuoteBanner />
    <PersonalTechStackSection />
    <TimeLine />
  </div>
</template>
