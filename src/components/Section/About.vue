<template>
  <div class="about-section">
    <div class="container">
      <div class="title">
        <span>What is skill mapping?</span>
      </div>
      <div class="desc">
        <span
          >การแสดงทักษะที่จำในแต่ละหลักสูตร เปรียบเทียบกับทักษะที่มีอยู่ของนักศึกษาทั่วทั้งมหาวิทยาลัย
          การเปรียบเทียบนี้ช่วยให้สามารถระบุและแก้ไขช่องว่างของปัญหา
          และข้อบกพร่องของทักษะที่จำเป็นต้องมีในหลักสูตรได้</span
        >
      </div>
    </div>
    <div class="bg-image">
      <img src="@images/section1.png" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about-section {
  padding: 30px;
  min-height: 65vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    position: relative;
    z-index: 1;
  }

  .title {
    text-align: center;
    span {
      font-weight: bold;
      font-size: 3vw;
      border-bottom: 3px solid #1c86f2;
      @include media-breakpoint-down(md) {
        font-size: 20px;
      }
    }
  }

  .desc {
    margin-top: 30px;
    text-align: center;
    span {
      display: inline-block;
      width: 45vw;
      font-size: 20px;

      @include media-breakpoint-down(md) {
        font-size: 17px;
        width: 100%;
      }
    }
  }

  .bg-image {
    position: absolute;
    bottom: 0;
    left: -15vw;
    img {
      width: 50vw;
      opacity: 0.3;
      @include media-breakpoint-down(md) {
        width: 100vw;
        opacity: 0.2;
      }
    }
  }
}
</style>
