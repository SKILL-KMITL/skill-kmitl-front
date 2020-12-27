<template>
  <div class="century-section">
    <div class="container">
      <div class="title">
        <span>21st century skills</span>
      </div>
      <div class="sub-title text-center mt-2">
        เด็กยุคใหม่ต้องมีทักษะในศตวรรษที่ 21
      </div>

      <div class="desc">
        <div class="title text-primary mt-5 mb-4">
          3R Hard Skills
        </div>
        <div class="content">
          <div><b>Reading</b>: อ่านออก อ่านจับใจความได้ มีนิสัยรักการอ่าน</div>
          <div><b>(W)Riting</b>: เขียนได้ สามารถสื่อสารให้คนอื่นเข้าใจ สรุปในความสำคัญได้</div>
          <div><b>(A)Rithemetics</b> : คิดเลขเป็น มีทักษะในการคิดแบบนามธรรม</div>
        </div>
      </div>

      <div class="desc">
        <div class="title text-primary mt-5 mb-4">
          8C Soft Skills
        </div>
        <div class="content">
          <div>
            <b>Critical Thinking and Problem Solving</b> : ทักษะด้านการคิดอย่างมีวิจารณญาณ และทักษะในการแก้ปัญหา
          </div>
          <div><b>Creativity and Innovation</b> : ทักษะด้านการสร้างสรรค์ และนวัตกรรม</div>
          <div><b>Cross-cultural</b> : ทักษะด้านความเข้าใจความต่างวัฒนธรรม ต่างกระบวนทัศน์</div>
          <div><b>Collaboration, Teamwork and Leadership</b> : ทักษะด้านความร่วมมือ การทำงานเป็นทีม และภาวะผู้นำ</div>
          <div>
            <b>Communications, Information, and Media Literacy</b> : ทักษะด้านการสื่อสารสารสนเทศ และรู้เท่าทันสื่อ
          </div>
          <div><b>Computing and ICT Literacy</b> : ทักษะด้านคอมพิวเตอร์ และเทคโนโลยีสารสนเทศและการสื่อสาร</div>
          <div><b>Career and Learning Skills</b> : ทักษะอาชีพ และทักษะการเรียนรู้</div>
          <div><b>Compassion</b> : มีความเมตตากรุณา มีคุณธรรม และระเบียบวินัย</div>
        </div>
      </div>
    </div>
    <div class="bg-image">
      <img src="@images/section2.png" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.century-section {
  padding: 30px;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 25px 1px rgba($color: #121d2f, $alpha: 0.15);

  .container {
    position: relative;
    z-index: 1;
    @include media-breakpoint-down(md) {
      padding-bottom: 20vh;
    }
  }

  .title {
    text-align: left;

    @include media-breakpoint-down(md) {
      text-align: center;
    }

    span {
      font-weight: bold;
      font-size: 3vw;
      border-bottom: 3px solid #1c86f2;
      @include media-breakpoint-down(md) {
        font-size: 25px;
      }
    }
  }

  .sub-title {
    font-size: 20px;
    @include media-breakpoint-down(md) {
      font-size: 15px;
    }
  }

  .desc {
    .content {
      > div {
        margin-top: 15px;
      }
    }
  }

  .bg-image {
    position: absolute;
    bottom: 0;
    right: 0;
    img {
      width: 50vw;
      opacity: 0.3;
      @include media-breakpoint-down(md) {
        width: 100%;
        opacity: 0.2;
      }
    }
  }
}
</style>
