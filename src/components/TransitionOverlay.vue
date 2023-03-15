<template>
  <div class="overlay"></div>
</template>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  height: 100vh;
  background-color: #000000;
  z-index: 101000;
  animation-name: page-transition;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}


@keyframes page-transition {
  0% {
    right: 0;
    width: 0;
  }
  25%  {
    width: 100%;
  }
  50%  {
    right: unset;
    left: 0;
    width: 100%;
  }
  100% {
    left: 0;
    width: 0;
  }
}
</style>
