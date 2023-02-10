<script lang="ts" setup>

import LocationIcon from "@/components/icons/footer/LocationIcon.vue";
import PhoneIcon from "@/components/icons/footer/PhoneIcon.vue";
import EmailIcon from "@/components/icons/footer/EmailIcon.vue";
</script>

<template>
  <footer>
    <div class="container columns">
      <div class="column col-1">
        <h4 class="heading">Claes & Huebner GbR</h4>
        <p>Thank you for visiting our website! We appreciate your interest and hope you found what you were looking for. If there is anything more we can assist with, please don't hesitate to reach out. Your support means a lot to us. Thank you again for stopping by!</p>
        <div class="sozial-media-wrapper">

        </div>
      </div>
      <div class="column col-2">
        <h4 class="subheading">ProjectFolderPaths</h4>
        <ul>
          <li><a href="#" title="Portfolio Rebalancing Tool">Portfolio Rebalancing Tool</a></li>
          <li><a href="#" title="Suggest App">Suggest App</a></li>
          <li><a href="#" title="Pure Air Antiviral UV">Pure Air Antiviral UV</a></li>
          <li><a href="#" title="Bauunternehmen Ralf Diewell">Bauunternehmen Ralf Diewell</a></li>
          <li><a href="#" title="Broady Pictures">Broady Pictures</a></li>
        </ul>
      </div>
      <div class="column col-3">
        <h4 class="subheading">Members</h4>
        <ul>
          <li><a href="https://www.linkedin.com/in/sebastian-claes-a85a92220/" title="linkedin/sebastian-claes"><span>Co-Founder</span> Sebastian Claes</a></li>
          <li><a href="https://www.linkedin.com/in/tobias-h%C3%BCbner-b19ba416a/" title="linkedin/tobias-hübner"><span>Co-Founder</span> Tobias Hübner</a></li>
          <li><a href="#" title="linkedin/maik-irgendwas"><span>Backend-Dev</span> Maik Kampmeier</a></li>
          <li><a href="#" title="linkedin/marc-klose"><span>Intern</span> Marc Klose</a></li>
        </ul>
      </div>
      <div class="column col-4">
        <h4 class="subheading">Contact</h4>
        <ul>
          <li><LocationIcon /> Martin-Riesenburger-Straße 42, 12627 Berlin</li>
          <li><PhoneIcon /> <a href="tel:+4917661475965" title="Call Now">+49 176 614 759 65</a></li>
          <li><EmailIcon /> <a href="mailto:s.claes.work@gmail.com" title="Message Us">s.claes.work@gmail.com</a></li>
        </ul>
      </div>
    </div>
    <div class="copyright-wrapper">
      <div class="container">
        <p class="copyright">left: Copyright © 2023 <span>Claes & Huebner GbR</span> All Rights Reserved.</p>
        <p class="design-by">Design by: <span>Sebastian Claes</span></p>
      </div>
    </div>
  </footer>
</template>


<style lang="scss">
@import "@/assets/scss/content-elements/footer.scss";
</style>
