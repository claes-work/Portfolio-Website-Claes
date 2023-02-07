<script setup lang="ts">
import HeroSection from "@/components/pages/about/hero-section/HeroSection.vue";
import TimeLine from "@/components/pages/about/time-line-section/TimelineSection.vue";
import PersonalTechStackSection from "@/components/pages/about/personal-tech-stack-section/PersonalTechStackSection.vue";
import type { TimelineRow } from "@/models/TimelineRow";

const timelineData: TimelineRow[] = [
  {
    year:  '06/2018',
    title: 'The beginning',
    text:  'My journey into software engineering started when a friend asked me to design an app. We rearranged his small apartment to create a workspace and spent every weekend working on it. As he was fully occupied with the backend development, I taught myself modern web technologies to bring my designs to life. It was then that I realized my passion for software engineering. Although the app wasn\'t a success, it laid the foundation for my career as a Frontend-Developer.',
  },
  {
    year:  '06/2019',
    title: 'Founded Claes & Huebner GbR',
    text:  'Ornare aenean euismod elementum nisi quis eleifend quam. Nulla pharetra diam sit amet. Vitae justo eget magna fermentum iaculis eu non.',
  },
  {
    year:  '09/2022',
    title: 'The beginning',
    text:  'Ornare aenean euismod elementum nisi quis eleifend quam. Nulla pharetra diam sit amet. Vitae justo eget magna fermentum iaculis eu non.',
  }
]
</script>

<template>
  <HeroSection
    sub-heading="Co-Founder"
    html-heading="Creative <br><span>Frontend-Developer</span>"
    html-text="Hi, I'm Sebastian a passionated Frontend Developer from Germany. <span>I am currently seeking a full remote position</span> as a Vue Developer. I have experience and skills in building responsive, user-friendly and high-performance web applications."
  />
  <PersonalTechStackSection />
  <TimeLine :timeline-data="timelineData" />
</template>
