<template>
  <div class="introduct-section">
    <div class="video-wrapper">
      <video autoplay muted loop class="video-content">
        <source :src="require('@/assets/video/cut.mp4')" type="video/mp4" />
      </video>
    </div>
    <div class="header-wrapper">
      <p>KING MONGKUT’S INSTITUTE OF TECHNOLOGY LADKRABANG</p>
      <img src="@/assets/icon/logo.png" class="mr-3" />
      <img src="@/assets/icon/logo_mapping.png" class="mr-3" />
      <img src="@/assets/icon/logo_go.png" class="mr-3 p-1" />
    </div>
    <div class="brand-wrapper">
      <h1>SKILLS MAPPING</h1>
      <h3 class="text-white">INNOVATED IN KMITL</h3>
      <hr />
      <span>
        Dynamic platform of the demand and the supply of skills of the country.
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.introduct-section {
  position: relative;

  video {
    min-height: 100vh;
    width: 100%;
    object-fit: cover;
    filter: brightness(45%);
  }

  .header-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    p {
      color: #f9f9f9;
      margin: 0;
      margin-right: 15px;
      font-size: 13px;
      @include media-breakpoint-down(md) {
        display: none;
      }
    }

    img {
      height: 45px;
      object-fit: cover;
    }
  }

  .brand-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      font-weight: bold;
      color: #fff;
      font-size: 5vw;
      letter-spacing: 3px;

      @include media-breakpoint-down(md) {
        font-size: 30px;
      }
    }

    hr {
      height: 2px;
      width: 200px;
      border-bottom: 5px solid #1c86f2;
    }

    span {
      margin-top: 15px;
      text-align: center;
      display: inline-block;
      color: #e9e9e9;
      font-size: 20px;
      width: 45vw;
      @include media-breakpoint-down(md) {
        width: 100%;
      }
    }
  }
}
</style>
