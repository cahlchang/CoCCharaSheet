<template>
<div id="box">
    <div id="app">
        <h2>Cthulhu TRPG Charasheet ver 6</h2>

        <info-table-box></info-table-box>
        <param-table-box></param-table-box>
        <h3>戦闘技能</h3>
        <h3>探索技能</h3>
        <h3>技能</h3>
    </div>
</div>

</template>

<script>
import ParamTableBox from '@/components/ParamTableBox.vue'
import InfoTableBox from '@/components/InfoTableBox.vue'

export default {
  name: 'App',
  components: { ParamTableBox, InfoTableBox },
  data () {
    return {
      userName: null,
      userPic: null,
      isSignedIn: null,
      authButtonText: null,
      authFunction: function () {}
    }
  }
}
</script>

<style>
body {
     background-color: #241C2B;
}

#box {
}

#app {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}
</style>
