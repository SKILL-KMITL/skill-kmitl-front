<template>
  <div class="header-container">
    <div class="py-4 container-xl">
      <div class="d-flex flex-row align-items-center">
        <img v-lazy="require('@images/logo.png')" class="mr-3" />
        <div class="d-flex flex-column">
          <div class="title font-weight-bold">
            Faculty of Information Technology
          </div>
          <div class="text-muted subtitle">
            King Mongkut's Institute of Technology Ladkrabang
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import env from '@/environment';
import Store, { userStore } from '@/store';

export default {
  name: 'Header'
};
</script>

<style lang="scss" scoped>
.header-container {
  height: 70px;

  img {
    width: 40px;
  }

  .title {
    font-size: 13px;
  }

  .subtitle {
    font-size: 10px;
  }

  .link {
    cursor: pointer;
    transition: 0.3s ease-out;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
