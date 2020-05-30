<template>
  <div id="skill-table-box-root">
    <div onclick="obj=document.getElementById('open_skill').style; obj.display=(obj.display=='none')?'block':'none';">
      <a style="cursor:pointer;"><h3>技能情報</h3></a>
    </div>

    <div id="open_skill">
      <div id="skill_box">
        <div id="skill_basic_info">
          <table>
            <thead>
              <th>現在値</th>
              <th>補正値</th>
            </thead>
            <tbody>
              <tr>
                <td class="skillBox" colspan="1">
                  職業P
                  <input type="text" size="6" name="name">
                </td>
                <td>
                  <input type="text" size="6" name="name">
                </td>
              </tr>
              <tr>
                <td class="skillBox" colspan="1">
                  興味P
                  <input type="text" size="6" name="name">
                </td>
                <td>
                  <input type="text" size="6" name="name">
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />

        <table>
          <thead>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skillTablebox',
  methods: {
  },
  data () {
    return {
      battle_skills: [{name: "回避"},
                      "キック",
                      "組み付き",
                      "こぶし（パンチ）",
                      "頭突き",
                      "投擲",
                      "マーシャルアーツ",
                      "拳銃",
                      "サブマシンガン",
                      "ショットガン",
                      "マシンガン",
                      "ライフル"],
      explore_skills: [],
      action_skills: [],
      nego_skills: [],
      knowledge_skills: []
    }
  }
}

</script>

<style>
table{
  border-collapse: separate;
  border-spacing: 3px;
  margin: 0 auto;
}
.skillBox{
  text-align: left;
  white-space: nowrap;
  background: #575148;
}
th:first-of-type,
td:first-of-type{
  background: #423845;
}

.cp_ipselect {
 overflow: hidden;
 text-align: center;
}
.cp_ipselect select {
 width: 100%;
 padding-right: 1em;
 cursor: pointer;
 text-indent: 0.01px;
 text-overflow: ellipsis;
 border: none;
 outline: none;
 background: transparent;
 background-image: none;
 box-shadow: none;
 -webkit-appearance: none;
 appearance: none;
}
.cp_ipselect select::-ms-expand {
 display: none;
}
.cp_ipselect.cp_sl04 {
 position: relative;
 border-radius: 1px;
 border: 1px solid #000000;
 border-radius: 4px;
 background: #ffffff;
}
.cp_ipselect.cp_sl04::before {
 position: absolute;
 top: 0.8em;
 right: 0.8em;
 width: 0;
 height: 0;
 padding: 0;
 content: '';
 border-left: 6px solid transparent;
 border-right: 6px solid transparent;
 border-top: 6px solid #000;
 pointer-events: none;
}
.cp_ipselect.cp_sl04 select {
 padding: 8px 28px 8px 8px;
 color: #000;
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
