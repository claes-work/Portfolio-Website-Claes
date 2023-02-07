<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav id="desktop-navbar">
    <div class="container">
      <h2>Claes & Huebner GbR</h2>
      <ul>
        <li><RouterLink :to="{ name: 'home' }" >OUR PROJECTS</RouterLink></li>
        <li><RouterLink :to="{ name: 'projects' }">OUR CLIENTS</RouterLink></li>
        <li><RouterLink :to="{ name: 'about' }" >ABOUT US</RouterLink></li>
        <li><a class="contact-btn" href="mailto: s.claes.work@gmail.com">CONTACT</a></li>
      </ul>
    </div>
  </nav>
</template>


<style lang="scss">
@import "@/assets/scss/desktop-navbar.scss";
</style>
