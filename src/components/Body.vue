<template>
  <div class="body-container-lg bg-white">
    <!-- <Header /> -->
    <router-view class="position-relative" style="z-index: 1" />
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.body-container {
  min-height: 100vh;
  position: relative;

  img {
    position: absolute;
    bottom: 0;
  }
}
</style>
