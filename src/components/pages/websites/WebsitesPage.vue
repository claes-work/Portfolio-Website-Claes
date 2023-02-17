<script setup lang="ts">
import PureAir from "@/components/pages/websites/pure-air/PureAir.vue";
import AchievementsBanner from "@/components/content-elements/AchievementsBanner.vue";
import DiewellWebsite from "@/components/pages/websites/diewell-website/DiewellWebsite.vue";
import BroadyPictures from "@/components/pages/websites/broady-pictures/BroadyPictures.vue";
</script>

<template>
  <PureAir />
  <AchievementsBanner :style="{ backgroundColor: '#1E90FF' }"/>
  <DiewellWebsite />
  <AchievementsBanner :style="{ backgroundColor: '#0E243F' }"/>
  <BroadyPictures />
  <AchievementsBanner :style="{ backgroundColor: '#383224' }"/>
</template>
