<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { useMainStore } from "@/stores/MainStore";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon.vue";

const mainStore = useMainStore()

</script>

<template>
  <nav id="desktop-navbar" :class="mainStore.themeClass">
    <div class="container">
      <h2>Claes</h2>
      <ul>
        <li>
          <div
              :class="{active : mainStore.openNavMenu}"
              class="sub-link"
              @click="mainStore.openNavMenu = !mainStore.openNavMenu"
          >
            <span>PROJECTS</span>
            <ArrowDownIcon />
          </div>
          <div class="sub-link-content" v-show="mainStore.openNavMenu">
              <RouterLink class="nested-link" :to="{ name: 'projects' }">APPS</RouterLink>
              <RouterLink class="nested-link" :to="{ name: 'websites' }">WEBSITES</RouterLink>
          </div>
        </li>
        <li><RouterLink :to="{ name: 'about' }" >ABOUT ME</RouterLink></li>
        <!--<li><RouterLink :to="{ name: 'blog' }" >BLOG</RouterLink></li>-->
        <li>
          <a class="contact-btn" href="mailto: s.claes.work@gmail.com">CONTACT</a>
        </li>
        <li @click="mainStore.changeLocale('en')">en</li>
        <li @click="mainStore.changeLocale('de')">de</li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
@import "@/assets/scss/content-elements/navbar/desktop-navbar.scss";
</style>
