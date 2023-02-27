<script lang="ts" setup>
import {onMounted, ref} from "vue";
import type { Ref } from "vue";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon.vue";
import { useMainStore } from "@/stores/MainStore";
import {useStrapiDataStore} from "@/stores/StrapiDataStore";
import { AllLocales } from "@/models/AllLocales";
import type { AllLocales as AllLocalesType } from "@/models/AllLocales";
import FetchAppSections from "@/services/FetchAppSections";

const mainStore = useMainStore();
const strapiStore = useStrapiDataStore()

const activeSubNav: Ref<boolean> = ref(false)

// Bool to check if active class should be rendered
function checkLocale(locale: AllLocalesType) {
  return locale === strapiStore.activeLocale
}

// Fetch strapi data on mounted
onMounted(async () => {
  strapiStore.navBarData = await FetchAppSections.fetchNavbarData()
})
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




        <li
            v-for="link in strapiStore.navBarData.navLinks"
            :key="link.id"
            v-show="!link.reference"
            :class="{ open : activeSubNav }"
        >
          <div
              class="sub-link"
              @click="activeSubNav = !activeSubNav"
          >
            <span>{{ link.title }}</span>
            <ArrowDownIcon />
          </div>
          <div class="sub-link-content" v-show="mainStore.openNavMenu">
            <RouterLink
                v-for="sublink in link.subLink"
                :key="sublink.id"
                class="nested-link"
                :to="{ name: sublink.reference }"
            >
              {{ sublink.subLink }}
            </RouterLink>
          </div>
        </li>




        <li
            v-for="link in strapiStore.navBarData.navLinks"
            :key="link.id"
            v-show="link.reference"
        >
          <RouterLink :to="{ name: link.reference }" >{{ link.title }}</RouterLink>
        </li>

        <li>
          <a
              v-for="button in strapiStore.navBarData.button"
              :key="button.id"
              class="contact-btn"
              :href="button.link"
              :title="button.titleAttr"
              :target="button.openInNewTab ? '_blank' : ''"
          >{{ button.text }}</a>
        </li>

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
