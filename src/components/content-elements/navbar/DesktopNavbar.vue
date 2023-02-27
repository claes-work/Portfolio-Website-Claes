<script lang="ts" setup>
import { RouterLink } from "vue-router";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon.vue";
import { useStrapiDataStore } from "@/stores/StrapiDataStore";
import type { AllLocales as AllLocalesType } from "@/models/AllLocales";
import { AllLocales } from "@/models/AllLocales";
import { useMainStore } from "@/stores/MainStore";
import {computed, onMounted} from "vue";
import FetchAppSections from "@/services/FetchAppSections";
import type {ILink} from "@/models/tabs/ILink";
import type {INavLink} from "@/models/components/navbar/INavLink";

const mainStore = useMainStore()
const strapiStore = useStrapiDataStore()

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
  <nav id="desktop-navbar" :class="mainStore.themeClass">
    <div class="container">
      <h2>Claes</h2>
      <ul>
        <li class="flag-wrapper">
          <div :class="{ active : checkLocale(AllLocales.EN)}" class="flag en" @click="strapiStore.changeLocale(AllLocales.EN)"></div>
          <div :class="{ active :  checkLocale(AllLocales.DE)}" class="flag de" @click="strapiStore.changeLocale(AllLocales.DE)"></div>
        </li>

        <li
            v-for="link in strapiStore.navBarData.navLinks"
            :key="link.id"
            v-show="!link.reference"
        >
          <div
              :class="{active : mainStore.openNavMenu}"
              class="sub-link"
              @click="mainStore.openNavMenu = !mainStore.openNavMenu"
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
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
@import "@/assets/scss/content-elements/navbar/desktop-navbar.scss";
</style>
