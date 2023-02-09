<script setup lang="ts">
import HeroSection from "@/components/pages/about/hero-section/HeroSection.vue";
import TimeLine from "@/components/pages/about/time-line-section/TimelineSection.vue";
import PersonalTechStackSection from "@/components/pages/about/personal-tech-stack-section/PersonalTechStackSection.vue";
import type { TimelineRow } from "@/models/TimelineRow";
import TransitionBanner from "@/components/content-elements/QuoteBanner.vue";

const timelineData: TimelineRow[] = [
  {
    year:  '06/2018',
    title: 'The beginning',
    text:  'My journey into software engineering started when a friend asked me to design an app. We rearranged his small apartment to create a workspace and spent every weekend working on it. As he was fully occupied with the backend development, I taught myself modern web technologies to bring my designs to life. It was then that I realized my passion for software engineering. Although the app wasn\'t a success, it laid the foundation for my career as a Frontend-Developer.',
  },
  {
    year:  '06/2019',
    title: 'Founded Claes & Huebner GbR',
    text:  'With the gained knowledge and experience, I took my first professional steps as a web developer by founding Claes & Huebner GbR. Through various projects, I was able to expand my programming skills and broaden my general knowledge in project management. This gave me the opportunity to work on challenging and diverse projects, further fueling my passion for software engineering.',
  },
  {
    year:  '09/2022',
    title: 'Computer Scientist in Application Development',
    text:  'To further solidify my skills, I started an apprenticeship as a computer scientist in application development, using my prior experience to secure a exemption from vocational school. I was able to complete the apprenticeship in just one and a half years while working full-time at the company. During this time, I worked as a PHP backend developer, gaining a deep understanding of the business processes of a larger company while expanding my knowledge in a practical way. I was allowed to continued operating in my own company during this period.',
  }
]
</script>

<template>
  <HeroSection
    sub-heading="Since 2018"
    html-heading="Creative <br><span>Frontend-Developer</span>"
    html-text="Hi, I'm Sebastian a passionated Frontend Developer from Germany. <span>I am currently seeking a full remote position</span> as a Vue Developer. I have experience and skills in building responsive, user-friendly and high-performance web applications."
  />
  <TransitionBanner html-text="My mission is to <span>empower the Digital World</span> through Innovative <span>Web-Design</span> and <span>Development</span>" />
  <PersonalTechStackSection />
  <TimeLine :timeline-data="timelineData" />
</template>
