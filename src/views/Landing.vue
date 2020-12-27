<template>
  <div class="landing-container">
    <div class="introduct-sectio">
      <Introduct />
      <About />
      <CenturySkill />
      <Skill />
    </div>
  </div>
</template>

<script type="ts">
import Introduct from '@components/Section/Introduct';
import About from '@components/Section/About';
import CenturySkill from '@components/Section/CenturySkill';
import Skill from '@components/Section/Skill';
export default {
  components: {
    Introduct,
    About,
    CenturySkill,
    Skill
  }
};
</script>

<style lang="scss" scoped></style>
