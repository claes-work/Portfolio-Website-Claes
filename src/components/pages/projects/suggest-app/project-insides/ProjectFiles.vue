<script lang="ts" setup>
import DownloadBoxIcon from "@/components/icons/DownloadBoxIcon.vue";
import LinkBoxIcon from "@/components/icons/LinkBoxIcon.vue";
</script>

<template>
  <div id="project-files">
    <div class="file-wrapper">
      <div class="header">
        <div class="logo figma"></div>
        <span>Figma</span>
      </div>
      <ul>
        <li><DownloadBoxIcon /><a href="#" title="#">Wireframes</a></li>
        <li><DownloadBoxIcon /><a href="#" title="#">Full Design</a></li>
        <li><DownloadBoxIcon /><a href="#" title="#">Graphics</a></li>
      </ul>
    </div>

    <div class="file-wrapper">
      <div class="header">
        <div class="logo github"></div>
        <span>GitHub</span>
      </div>
      <ul>
        <li><LinkBoxIcon /><a href="#" title="#">Frontend Repository</a></li>
        <li><LinkBoxIcon /><a href="#" title="#">Backend Repository</a></li>
      </ul>
    </div>

    <div class="file-wrapper">
      <div class="header">
        <div class="logo webapp"></div>
        <span>Web-App</span>
      </div>
      <ul>
        <li><LinkBoxIcon /><a href="#" title="#">Sign Up Here</a></li>
      </ul>
    </div>

    <div class="file-wrapper">
      <div class="header">
        <div class="logo members"></div>
        <span>Members</span>
      </div>
      <ul>
        <li><LinkBoxIcon /><a href="#" title="#">Sebastian Claes</a></li>
        <li><LinkBoxIcon /><a href="#" title="#">Tobias Hübner</a></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/pages/projects/rebalancing-tool/project-insides/project-files.scss";
</style>
