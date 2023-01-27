<script lang="ts" setup>
import TableHeader from "@/components/tab-view/tech-stack-tab/TableHeader.vue";
import TableRow from "@/components/tab-view/tech-stack-tab/TableRow.vue";
import FigmaIcon from "@/components/icons/FigmaIcon.vue";
</script>

<template>
  <div id="tech-stack-tab">
    <TableHeader />

    <TableRow >
      <template #technology>
        <span class="heading">1. Technology:</span>
        <div class="column technology">
          <FigmaIcon />
          <span class="logo-name">Figma</span>
        </div>
      </template>

      <template #usage>
          <span class="heading">used for:</span>
          <ul class="column usage">
            <li>Wireframes</li>
            <li>Full Design</li>
          </ul>
      </template>

      <template #description>
        <span class="heading">Description:</span>
        <div class="column">

        </div>
      </template>

      <template #implemented-by>
        <span class="heading">Implemented by:</span>
        <div class="column">

        </div>
      </template>
    </TableRow>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/tab-view/tech-stack-tab.scss";
</style>
