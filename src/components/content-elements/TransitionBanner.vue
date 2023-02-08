<script lang="ts" setup>
const props = defineProps({
  htmlText: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="transition-banner">
    <h3 v-html="props.htmlText"></h3>
  </div>
</template>


<style lang="scss">
.transition-banner {
  position: relative;
  transform: translateY(-50%);
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  background-color: $bc-dark-1;


  h3 {
    text-align: center;
    padding: 10px 8px;
    font-size: 22px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: 0.4px;
  }
}

@media only screen and (min-width: 768px) {
  .transition-banner {
    z-index: 10;

    h3 {
      padding: 18px 8px;
    }
  }
}

@media only screen and (min-width: 768px) {
  .transition-banner h3 {
    font-size: 28px;
    line-height: 1.4;
  }
}
</style>
