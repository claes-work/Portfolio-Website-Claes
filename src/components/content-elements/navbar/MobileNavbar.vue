<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from "vue";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon.vue";
import { useMainStore } from "@/stores/MainStore";
import {useStrapiDataStore} from "@/stores/StrapiDataStore";
import { AllLocales } from "@/models/AllLocales";
import type { AllLocales as AllLocalesType } from "@/models/AllLocales";

const mainStore = useMainStore();
const strapiStore = useStrapiDataStore()

const activeSubNav: Ref<boolean> = ref(false)

function checkLocale(locale: AllLocalesType) {
  return locale === strapiStore.activeLocale
}

</script>

<template>
  <nav id="mobile-navbar" :class="mainStore.themeClass">
    <div class="container">
      <h2>Claes</h2>

      <svg class="ham hamRotate ham1" viewBox="0 0 100 100" width="80" :class="{ active: mainStore.openNavMenu }" @click="mainStore.openNavMenu = !mainStore.openNavMenu">
        <path
            class="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
        <path
            class="line middle"
            d="m 30,50 h 40" />
        <path
            class="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
      </svg>
    </div>

    <div class="mobile-nav-menu" :class="{ active: mainStore.openNavMenu }">
      <ul>
        <li :class="{ open : activeSubNav }">
          <div class="sub-link" @click="activeSubNav = !activeSubNav">
            <span>PROJECTS</span>
            <ArrowDownIcon />
          </div>
          <div class="sub-link-content">
            <RouterLink :to="{ name: 'projects' }">APPS</RouterLink>
            <RouterLink :to="{ name: 'websites' }">WEBSITES</RouterLink>
          </div>
        </li>
        <li><RouterLink :to="{ name: 'about' }" >ABOUT ME</RouterLink></li>
    <!--<li><RouterLink :to="{ name: 'blog' }" >BLOG</RouterLink></li>-->
        <li><a class="contact-btn" href="mailto: s.claes.work@gmail.com">CONTACT</a></li>
        <li class="flag-wrapper">
          <div :class="{ active : checkLocale(AllLocales.EN)}" class="flag en" @click="strapiStore.changeLocale(AllLocales.EN)"></div>
          <div :class="{ active :  checkLocale(AllLocales.DE)}" class="flag de" @click="strapiStore.changeLocale(AllLocales.DE)"></div>
        </li>
      </ul>
    </div>
  </nav>
</template>


<style lang="scss">
@import "@/assets/scss/content-elements/navbar/mobile-navbar.scss";
</style>
