<script lang="ts" setup>
import FeaturesIcon from "@/components/icons/FeaturesIcon.vue";
import TechStackIcon from "@/components/icons/TechStackIcon.vue";
import ProjectIdeaIcon from "@/components/icons/ProjectIdeaIcon.vue";
import FileIcon from "@/components/icons/FileIcon.vue";
</script>

<template>
  <div class="tab-container">
    <div class="tab-button active">
      <FeaturesIcon />
      <span>Features</span>
    </div>
    <div class="tab-button">
      <TechStackIcon />
      <span>TechStack</span>
    </div>
    <div class="tab-button">
      <ProjectIdeaIcon />
      <span>Project Idea</span>
    </div>
    <div class="tab-button">
      <FileIcon />
      <span>Files & Links</span>
    </div>
  </div>
</template>
