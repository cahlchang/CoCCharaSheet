<template>
  <div id="box">
    <div id="app">
      <h2>Cthulhu TRPG Charasheet ver 6</h2>

      <InfoTableBox />
      <ParamTableBox />
      <SkillTableBox />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import InfoTableBox from '@/components/InfoTableBox.vue'
import ParamTableBox from '@/components/ParamTableBox.vue'
import SkillTableBox from '@/components/SkillTableBox.vue'

export default Vue.extend({
  components: {
    InfoTableBox,
    ParamTableBox,
    SkillTableBox,
  },
})
</script>
