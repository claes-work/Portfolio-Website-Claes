<script lang="ts" setup>
import { RouterLink } from "vue-router";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon.vue";
import { useMainStore } from "@/stores/MainStore";

const mainStore = useMainStore()
</script>

<template>
  <nav id="desktop-navbar">
    <div class="container">
      <h2 ref="heading">Claes</h2>
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
        <li><RouterLink :to="{ name: 'blog' }" >BLOG</RouterLink></li>
        <li><a class="contact-btn" href="mailto: s.claes.work@gmail.com">CONTACT</a></li>
      </ul>
    </div>
  </nav>
</template>


<style lang="scss">
@import "@/assets/scss/content-elements/navbar/desktop-navbar.scss";

</style>
