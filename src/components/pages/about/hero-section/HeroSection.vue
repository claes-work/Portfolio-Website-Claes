<script lang="ts" setup>

const props = defineProps({
  subHeading: {
    type: String,
    default: "",
  },
  htmlHeading: {
    type: String,
    default: "",
  },
  htmlText: {
    type: String,
    default: "",
  },
})

</script>

<template>
  <section id="hero-section">
   <div class="container">
     <div class="text-wrapper">
       <span class="subheading">{{ props.subHeading }}</span>
       <h1 v-html="props.htmlHeading"></h1>
       <p v-html="htmlText"></p>
     </div>
     <img
         class="hero-image"
         src="@/assets/images/Sebastian_Claes_Hero_Image.png"
         alt="Sebastian Claes Hero Image"
     />
     <slot name="divider-content">

     </slot>
     <div class="hero-background">
       <img
           class="shape"
           src="@/assets/images/Hero_Background_Shape.png"
           alt="Hero Background Shape"
       />
     </div>
   </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/pages/about/hero-section.scss";
</style>
