<script lang="ts" setup>

import LocationIcon from "@/components/icons/footer/LocationIcon.vue";
import PhoneIcon from "@/components/icons/footer/PhoneIcon.vue";
import EmailIcon from "@/components/icons/footer/EmailIcon.vue";
import GitHubIcon from "@/components/icons/footer/GitHubIcon.vue";
import LinkedInIcon from "@/components/icons/footer/LinkedInIcon.vue";
import XingIcon from "@/components/icons/footer/XingIcon.vue";
</script>

<template>
  <footer>
    <div class="container columns">
      <div class="column col-1">
        <h4 class="heading">Sebastian Claes</h4>
        <p>Thank you for visiting my website! I appreciate your interest and hope you found what you were looking for. If there is anything more I can assist with, please don't hesitate to reach out. Your support means a lot to me. Thank you again for stopping by!</p>
        <div class="sozial-media-wrapper">

        </div>
      </div>
      <div class="column col-2">
        <h4 class="subheading">Projects</h4>
        <ul>
          <li><a href="#" title="Portfolio Rebalancing Tool">Portfolio Rebalancing Tool</a></li>
          <li><a href="#" title="Suggest App">Suggest App</a></li>
          <li><a href="#" title="Pure Air Antiviral UV">Pure Air Antiviral UV</a></li>
          <li><a href="#" title="Bauunternehmen Ralf Diewell">Bauunternehmen Ralf Diewell</a></li>
          <li><a href="#" title="Broady Pictures">Broady Pictures</a></li>
        </ul>
      </div>
      <div class="column col-3">
        <h4 class="subheading">Social Media</h4>
        <ul>
          <li><GitHubIcon /> <a href="https://www.linkedin.com/in/sebastian-claes-a85a92220/" title="linkedin/sebastian-claes">GitHub</a></li>
          <li><LinkedInIcon /> <a href="https://www.linkedin.com/in/tobias-h%C3%BCbner-b19ba416a/" title="linkedin/tobias-hübner">LinkedIn</a></li>
          <li><XingIcon /> <a href="#" title="linkedin/maik-irgendwas">XING</a></li>
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
        <p class="copyright">Copyright © 2023 <span>Sebastian Claes</span> All Rights Reserved.</p>
        <p class="design-by">Design by: <span>Sebastian Claes</span></p>
      </div>
    </div>
  </footer>
</template>


<style lang="scss">
@import "@/assets/scss/content-elements/footer.scss";
</style>
