<script lang="ts" setup>
import { computed, inject, onMounted } from "vue";
import type { ComputedRef } from "vue";
import FetchAppSections from "@/services/FetchAppSections";
import { useStrapiDataStore } from "@/stores/StrapiDataStore";
import type { IFooter } from "@/models/components/footer/IFooter";
import type {IFooterLink} from "@/models/components/footer/IFooterLink";

const urlPrefix = inject('URL_PATH')

const strapiStore = useStrapiDataStore()

// Fetch strapi data on mounted
onMounted(async () => {
  strapiStore.footerData = await FetchAppSections.fetchFooterData()
})

// get the footer data from the store
const footerData:ComputedRef<IFooter> = computed(() => {
  return strapiStore.footerData
})
</script>

<template>
  <footer>
    <div class="container columns">
      <div
          v-for="(column, index) in footerData.columns"
          v-show="column.__component === 'footer.text-column'"
          :key="column.id"
          class="column"
          :class="'column-' + index"
      >
        <h4 class="heading">{{ column.heading }}</h4>
        <p>{{ column.text }}</p>
      </div>


      <div
          v-for="(column, index) in footerData.columns"
          v-show="column.__component === 'footer.link-column'"
          :key="column.id"
          class="column"
          :class="'column-' + index"
      >
        <h4 class="subheading">{{ column.heading }}</h4>
        <ul>

          <li
              v-show="column.links"
              v-for="link in column.links"
              :key="link.id"
          >
            <img
                class="link-icon"
                v-show="(link.icon)"
                :src="(link.icon) ? urlPrefix + link.icon.url : ''"
                :alt="(link.icon) ? link.icon.alternativeText : 'Link Icon'"
            />
            <a :href="link.link" :title="link.titleTag" :target="link.openNewTab ? '_blank' : ''">{{ link.text }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright-wrapper">
      <div class="container">
        <p class="copyright">Copyright © {{ new Date().getFullYear() }} <span>{{ footerData.copyrightHolder }}</span> All Rights Reserved.</p>
        <p class="design-by">Design by: <span>{{ footerData.designedBy }}</span></p>
      </div>
    </div>
  </footer>
</template>


<style lang="scss">
@import "@/assets/scss/content-elements/footer.scss";
</style>
