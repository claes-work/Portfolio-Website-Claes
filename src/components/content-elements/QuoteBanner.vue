<script lang="ts" setup>
import QuoteIcon from "@/components/icons/QuoteIcon.vue";

const props = defineProps({
  htmlText: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="quote-banner">
    <QuoteIcon />
    <h3 v-html="props.htmlText"></h3>
  </div>
</template>


<style lang="scss">
.quote-banner {
  position: relative;
  transform: translateY(-50%);
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  background: linear-gradient(0deg, rgba(15, 15, 15, 0.6), rgba(15, 15, 15, 0.6)), url("@/assets/images/Quote_Banner_Background_Underlay.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 1px 1px rgba(0,0,0,0.11),
  0 2px 2px rgba(0,0,0,0.11),
  0 4px 4px rgba(0,0,0,0.11),
  0 8px 8px rgba(0,0,0,0.11),
  0 16px 16px rgba(0,0,0,0.11),
  0 32px 32px rgba(0,0,0,0.11);
  border-radius: 2px;
  padding: 6px 0;

  h3 {
    max-width: 760px;
    margin: 0 auto;
    text-align: center;
    padding: 10px 8px;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: 0.4px;
    font-style: italic;
  }

  .quote-icon {
    display: none;
  }
}


@media only screen and (min-width: 768px) {
  .quote-banner {
    z-index: 10;

    h3 {
      padding: 18px 8px;
      font-size: 28px;
    }
  }
}

@media only screen and (min-width: 991px) {
  .quote-banner .quote-icon {
    display: block;
    position: absolute;
    top: -15px;
    left: 28px;
    width: 50px;
    height: 50px;
    fill: #525252;
  }
}

@media only screen and (min-width: 1280px) {
  .quote-banner .quote-icon {
    width: 65px;
    height: 65px;
    top: -18px;
    left: 28px;
  }
}

</style>
