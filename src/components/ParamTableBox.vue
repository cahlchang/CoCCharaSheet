<template>
  <div id="param-table-box-root">
    <h3>
      <a href="#" @click="hidden = !hidden">
        能力値
      </a>
    </h3>

    <table :class="{ '--hidden': hidden }">
      <thead>
        <tr>
          <th />
          <th v-for="(label, index) in abilityTypes" :key="index">
            {{ label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="row-name">
            能力値
          </td>
          <td v-for="(key, index) in abilityTypes" :key="index">
            <v-select
              :label="'STR'"
              :value="baseAbility(key)"
              :items="[0, 2, 3]"
              solo
            />
          </td>
          <!-- <td v-for=>
              <v-select />
            </td> -->
          <!-- <template v-for="(param, index) in param_items">
              <td v-if="param.type==0" :key="param+index">
                能力値
              </td>
              <td v-if="param.type==1 || param.type==2 || param.type==3" :key="param+index">
                <div class="cp_ipselect cp_sl04">
                  <select v-if="param.type==1" v-model="lstParam[param.name]" value="0">
                    <option v-for="(value,index_value) in param_values_3d6" :key="index_value">
                      {{ parseInt(value) }}
                    </option>
                  </select>
                  <select v-if="param.type==2" v-model="lstParam[param.name]">
                    <option v-for="(value,index_value) in param_values_2d6_plus_6" :key="index_value">
                      {{ parseInt(value) }}
                    </option>
                  </select>
                  <select v-if="param.type==3" v-model="lstParam[param.name]">
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
            </template> -->
        </tr>
        <tr>
          <td class="row-name">
            一時的
          </td>
          <!-- <template v-for="(param, index) in param_items"> -->
          <!-- <td v-if="param.type==1 || param.type==2 || param.type==3 || param.type==4" :key="param+index">
                <input v-model="lst_spec[param.name]" type="text" name="name" maxlength="3" class="input_box_param">
              </td> -->
          <!-- </template> -->
        </tr>
        <tr>
          <td class="row-name">
            現在値
          </td>
          <!-- <template v-for="(param, index) in param_items">
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
            </template> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { AbilityTypes, Abilities } from '../utils/charasheet/ability'
// import { Dice2D6 } from '~/utils/dice'

export default Vue.extend({
  name: 'ParamTablebox',
  data() {
    return {
      hidden: false,
      abilityTypes: Object.values(AbilityTypes),
      columnLabels: [
        ...Object.values(AbilityTypes),
        'HP', 'MP', 'SAN',
        'アイデア', '幸運', '知識',
      ],
      baseAbilities: { ...new Abilities() } as {[x: string]: number},
      temporaryAbilities: new Abilities(),
    }
  },
  computed: {
    baseAbility() {
      return (key: AbilityTypes) => this.baseAbilities[key.toLowerCase()]
    },
  },
  methods: {
  },
})
</script>

<style lang="scss" scoped>
  .--hidden {
    display: none;
  }
</style>

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
