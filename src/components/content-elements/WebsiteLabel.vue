<script lang="ts" setup>
const props = defineProps({
  color: {
    type: String,
    default: '#53FDCA'
  },
  logoClass: {
    type: String,
    required: true
  }
})
</script>

<template>
  <svg class="website-label" viewBox="0 0 221 89" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path :class="logoClass" :fill="color" d="M0 0H221V89L110.5 66.4366L0 89V0Z" />
  </svg>
</template>

<style lang="scss" scoped>
.website-label {
  position: absolute;
  top: 0;
  left: 0;
}

@media only screen and (min-width: 768px) {
  .website-label path.pure-air {
    background-image: url("@/assets/images/WordPress_Logo_Standard_White.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
