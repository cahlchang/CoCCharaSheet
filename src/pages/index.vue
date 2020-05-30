<template>
  <div id="box">
    <div id="app">
      <h2>Cthulhu TRPG Charasheet ver 6</h2>

      <info-table-box />
      <param-table-box />
      <skill-table-box />
    </div>
  </div>
</template>

<script>
import InfoTableBox from '@/components/InfoTableBox.vue'
import ParamTableBox from '@/components/ParamTableBox.vue'
import SkillTableBox from '@/components/SkillTableBox.vue'

export default {
  components: {
    InfoTableBox,
    ParamTableBox,
    SkillTableBox
  }
}
</script>
