<template>
  <div id="param-table-box-root">
    <div onclick="obj=document.getElementById('open_param').style; obj.display=(obj.display=='none')?'block':'none';">
      <a style="cursor:pointer;"><h3>能力値</h3></a>
    </div>

    <div id="open_param">
      <table>
        <thead>
          <tr>
            <template v-for="(param, index) in param_items">
              <th :key="index">
                {{ param.name }}
              </th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr>
            <template v-for="(param, index) in param_items">
              <td v-if="param.type==0" :key="param+index">
                能力値
              </td>
              <td v-if="param.type==1 || param.type==2 || param.type==3" :key="param+index">
                <div class="cp_ipselect cp_sl04">
                  <select v-if="param.type==1" v-model="lst_param[param.name]" value="0">
                    <option v-for="(value,index_value) in param_values_3d6" :key="index_value">
                      {{ parseInt(value) }}
                    </option>
                  </select>
                  <select v-if="param.type==2" v-model="lst_param[param.name]">
                    <option v-for="(value,index_value) in param_values_2d6_plus_6" :key="index_value">
                      {{ parseInt(value) }}
                    </option>
                  </select>
                  <select v-if="param.type==3" v-model="lst_param[param.name]">
                    <option v-for="(value,index_value) in param_values_3d6_plus_3" :key="index_value">
                      {{ parseInt(value) }}
                    </option>
                  </select>
                </div>
              </td>
              <td v-if="param.type==4 && param.name=='HP'" :key="param+index">
                {{ param_hp() }}
              </td>
              <td v-if="param.type==4 && param.name=='MP'" :key="param+index">
                {{ param_mp() }}
              </td>
              <td v-if="param.type==4 && param.name=='SAN'" :key="param+index">
                {{ param_san() }}
              </td>
              <td v-if="param.type==4 && param.name=='アイデア'" :key="param+index">
                {{ param_idea() }}
              </td>
              <td v-if="param.type==4 && param.name=='幸運'" :key="param+index">
                {{ param_luck() }}
              </td>
              <td v-if="param.type==4 && param.name=='知識'" :key="param+index">
                {{ param_knowledge() }}
              </td>
            </template>
          </tr>
          <tr>
            <template v-for="(param, index) in param_items">
              <td v-if="param.type==0" :key="param+index">
                増加分
              </td>
              <td v-if="param.type==1 || param.type==2 || param.type==3 || param.type==4" :key="param+index">
                <input v-model="lst_added[param.name]" type="text" name="name" maxlength="2" class="input_box_param">
              </td>
            </template>
          </tr>
          <tr>
            <template v-for="(param, index) in param_items">
              <td v-if="param.type==0" :key="param+index">
                一時的
              </td>
              <td v-if="param.type==1 || param.type==2 || param.type==3 || param.type==4" :key="param+index">
                <input v-model="lst_spec[param.name]" type="text" name="name" maxlength="3" class="input_box_param">
              </td>
            </template>
          </tr>
          <tr>
            <template v-for="(param, index) in param_items">
              <td v-if="param.type==0" :key="param+index">
                現在値
              </td>
              <td v-if="param.type==1 || param.type==2 || param.type==3" :key="param+index">
                {{ current_params(param.name) }}
              </td>
              <td v-if="param.name==='HP'" :key="param+index">
                {{ current_status(param.name, param_hp()) }}
              </td>
              <td v-if="param.name=='MP'" :key="param+index">
                {{ current_status(param.name, param_mp()) }}
              </td>
              <td v-if="param.name=='SAN'" :key="param+index">
                {{ current_status(param.name, param_san()) }}
              </td>
              <td v-if="param.name=='アイデア'" :key="param+index">
                {{ current_status(param.name, param_idea()) }}
              </td>
              <td v-if="param.name=='幸運'" :key="param+index">
                {{ current_status(param.name, param_luck()) }}
              </td>
              <td v-if="param.name=='知識'" :key="param+index">
                {{ current_status(param.name, param_knowledge()) }}
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ParamTablebox',
  data () {
    return {
      lst_param: [],
      lst_added: [],
      lst_spec: [],
      param_items: [
        { name: '能力値', type: 0 },
        { name: 'STR', type: 1 },
        { name: 'CON', type: 1 },
        { name: 'POW', type: 1 },
        { name: 'DEX', type: 1 },
        { name: 'APP', type: 1 },
        { name: 'SIZ', type: 1 },
        { name: 'INT', type: 2 },
        { name: 'EDU', type: 3 },
        { name: 'HP', type: 4 },
        { name: 'MP', type: 4 },
        { name: 'SAN', type: 4 },
        { name: 'アイデア', type: 4 },
        { name: '幸運', type: 4 },
        { name: '知識', type: 4 }
      ],
      param_values_3d6: [
        0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18
      ],
      param_values_2d6_plus_6: [
        0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18
      ],
      param_values_3d6_plus_3: [
        0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21
      ]
    }
  },
  methods: {
    param_hp () {
      const con = isNaN(this.lst_param.CON) ? 0 : parseInt(this.lst_param.CON)
      const siz = isNaN(this.lst_param.SIZ) ? 0 : parseInt(this.lst_param.SIZ)
      return Math.ceil((con + siz) / 2)
    },
    param_mp () {
      const pow = isNaN(this.lst_param.POW) ? 0 : parseInt(this.lst_param.POW)
      return pow
    },
    param_san () {
      const pow = isNaN(this.lst_param.POW) ? 0 : parseInt(this.lst_param.POW)
      return pow * 5
    },
    param_idea () {
      const int = isNaN(this.lst_param.INT) ? 0 : parseInt(this.lst_param.INT)
      return int * 5
    },
    param_luck () {
      const pow = isNaN(this.lst_param.POW) ? 0 : parseInt(this.lst_param.POW)
      return pow * 5
    },
    param_knowledge () {
      const edu = isNaN(this.lst_param.EDU) ? 0 : parseInt(this.lst_param.EDU)
      return edu * 5
    },
    current_params (event) {
      const initParam = isNaN(this.lst_param[event]) ? 0 : parseInt(this.lst_param[event])
      const addedParam = isNaN(this.lst_added[event]) ? 0 : parseInt(this.lst_added[event])
      const specParam = isNaN(this.lst_spec[event]) ? 0 : parseInt(this.lst_spec[event])
      return initParam + addedParam + specParam
    },
    current_status (event, initStatus) {
      const initStatusCalc = isNaN(initStatus) ? 0 : parseInt(initStatus)
      const addedStatus = isNaN(this.lst_added[event]) ? 0 : parseInt(this.lst_added[event])
      const specStatus = isNaN(this.lst_spec[event]) ? 0 : parseInt(this.lst_spec[event])
      return initStatusCalc + addedStatus + specStatus
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
td,th{
  text-align: center;
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
