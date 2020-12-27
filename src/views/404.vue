<template>
  <div class="404-container mt-2 mt-md-5">
    <div class="container">
      <div class="bg-white rounded p-5 text-center">
        <div class="title">
          <span class="display-3 font-weight-bold text-primary">404</span>
        </div>
        <div class="title mt-0">
          NOT FOUND
        </div>
        <router-link
          :to="{ path: '/' }"
          class="subtitle mt-3 d-inline-block font-weight-light border-bottom"
          style="font-size: 14px;"
        >
          กลับไปหน้าแรก
        </router-link>
      </div>
    </div>
  </div>
</template>
