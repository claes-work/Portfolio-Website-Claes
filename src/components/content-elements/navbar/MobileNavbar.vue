<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from "vue";

const isActive: Ref<boolean> = ref(false)
</script>

<template>
  <nav id="mobile-navbar">
    <div class="container">
      <h2>Claes</h2>

      <svg class="ham hamRotate ham1" viewBox="0 0 100 100" width="80" :class="{ active: isActive }" @click="isActive = !isActive">
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

    <div class="mobile-nav-menu" :class="{ active: isActive }">
      <ul>
        <li><RouterLink :to="{ name: 'projects' }">PROJECTS</RouterLink></li>
        <li><RouterLink :to="{ name: 'about' }" >ABOUT ME</RouterLink></li>
        <li><a class="contact-btn" href="mailto: s.claes.work@gmail.com">CONTACT</a></li>
      </ul>
    </div>
  </nav>
</template>


<style lang="scss">
@import "@/assets/scss/content-elements/navbar/mobile-navbar.scss";
</style>