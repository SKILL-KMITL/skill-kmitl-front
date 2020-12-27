<template>
  <div class="p-5 d-flex flex-row align-items-center">
    <div class="brand pr-5">
      <div class="brand-dot">
        <div style="background: #F24E1E"></div>
        <div style="background: #1ABCFE"></div>
        <div style="background: #11BC7A"></div>
      </div>
      <div class="brand-title text-white">
        Hybrid Web Recommendation System For Job Seeker
      </div>
      <div class="brand-desc">
        เว็บแอพพลิเคชั่นที่ให้บริการแนะนำตำแหน่งงานตามความเหมาะสมของผู้หางาน ตำแหน่งงานนั้นจะสกัดมาจากเว็บหางานต่าง ๆ
        โดยการสร้างระบบแนะนำจะแบ่งเป็นสองส่วนคือ
        ส่วนของการแนะนำที่จะคำนวนหาความสอดคล้องระหว่างผู้ใช้กับตำแหน่งงานในระบบผ่านการใช้เทคนิค Cosine similarity
        และส่วนของแบ่งกลุ่มสายงานที่ใช้โมเดลการแบ่งกลุ่มผ่านเทคนิค Support Vector Machine เพื่อทำนายกลุ่มสายงาน
        โมเดลจะถูกแบ่งและเทรนจากข้อมูลที่แตกต่างคือ ข้อมูลตำแหน่งงานที่ถูกกสัดมากจากเ ว็บไซต์หางาน
        <span class="h">Indeed</span> และ ข้อมูลโปรไฟล์ผู้ที่สกัดมาจาก
        <span class="h">Linkedin</span>
        ข้อมูลทั้งสองจะถูกจัดการและดำเนินการผ่านโครงสร้างท่อส่งข้อมูลที่จัดการกระบวนการทุกอย่างแบบอัตโนมัติ
        ผ่านตัวจัดการกำหนดการเรียกว่า
        <span class="h">Apache Airflow</span> เมื่อผู้ใช้ใช้งานเว็บไซต์และกรอกข้อมูลส่วนตัว
        ระบบจะแนะนำตำแหน่งงานและสายงานที่เหมาะสมที่สุด โดยอิงจากโปรไฟล์ที่ผู้ใช้นำเข้า
      </div>
    </div>
    <div class="brand-img d-lg-block d-none">
      <img src="@images/brand.png" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.brand-img {
  img {
    width: 20vw;
    max-width: 500px;
    border-bottom-right-radius: 10px;
    padding: 3px;
  }
}

.brand {
  .brand-title {
    font-size: 35px;
    font-weight: bold;
  }

  .brand-desc {
    margin-top: 35px;
    color: #d8d8d8;
    .h {
      color: #1abcfe;
      font-weight: bold;
    }
  }
  .brand-dot {
    display: flex;
    flex-direction: row;
    div {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      margin-right: 15px;
      margin-bottom: 30px;
    }
  }
}
</style>
