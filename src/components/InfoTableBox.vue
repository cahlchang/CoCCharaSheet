<template>
  <div id="info-table-box-root">
    <div onclick="obj=document.getElementById('open_info').style; obj.display=(obj.display=='none')?'block':'none';">
      <a style="cursor:pointer;"><h3>基本情報</h3></a>
    </div>
    <div id="open_info">
      <div id="info_box">
        <table>
          <tbody>
            <tr>
              <td class="infoBox" colspan="3">
                名前
                <input type="text" size="100" name="name">
              </td>
            </tr>
            <tr>
              <td class="infoBox" colspan="3">
                タグ
                <input type="text" size="100" name="name">
              </td>
            </tr>
            <tr>
              <td>
                職業
                <input class="infoBox" type="text" name="name">
              </td>
              <td>
                年齢
                <input class="infoBox" type="text" name="name">
              </td>
              <td>
                性別
                <input class="infoBox" type="text" name="name">
              </td>
            </tr>
            <tr>
              <td>
                身長
                <input class="infoBox" type="text" name="name">
              </td>
              <td>
                体重
                <input class="infoBox" type="text" name="name">
              </td>
              <td>
                出身
                <input class="infoBox" type="text" name="name">
              </td>
            </tr>
            <tr>
              <td>
                髪の色
                <input class="infoBox" type="text" name="name">
              </td>
              <td>
                瞳の色
                <input class="infoBox" type="text" name="name">
              </td>
              <td>
                肌の色
                <input class="infoBox" type="text" name="name">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'InfoTablebox',
})

</script>

<style>
table{
  border-collapse: separate;
  border-spacing: 3px;
  margin: 0 auto;
}
.infoBox{
  text-align: left;
  white-space: nowrap;
  background: #575148;
}
.input_box_param {
  width:100%;
  height:10px;
  border:1px;
  background-color: #746E62;
  padding:10px 0px;
  font-size: 22px;
  color: #fff;
  text-align: center;
}
.input_box_param input[type="text"] {
  width:100%;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
