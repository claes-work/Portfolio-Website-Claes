<script lang="ts" setup>
import { RouterLink } from "vue-router";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon.vue";
import { useStrapiDataStore } from "@/stores/StrapiDataStore";
import { AllLocales } from "@/models/AllLocales";
import type { AllLocales as AllLocalesType } from "@/models/AllLocales";
import { useMainStore } from "@/stores/MainStore";

const mainStore = useMainStore()
const strapiStore = useStrapiDataStore()

function checkLocale(locale: AllLocalesType) {
  return locale === strapiStore.activeLocale
}

</script>

<template>
  <nav id="desktop-navbar" :class="mainStore.themeClass">
    <div class="container">
      <h2>Claes</h2>
      <ul>
        <li class="flag-wrapper">
          <div :class="{ active : checkLocale(AllLocales.EN)}" class="flag en" @click="strapiStore.changeLocale(AllLocales.EN)"></div>
          <div :class="{ active :  checkLocale(AllLocales.DE)}" class="flag de" @click="strapiStore.changeLocale(AllLocales.DE)"></div>
        </li>
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
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
@import "@/assets/scss/content-elements/navbar/desktop-navbar.scss";
</style>
