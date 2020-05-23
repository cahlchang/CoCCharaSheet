<template>
<div id="param-table-box-root">
    <div onclick="obj=document.getElementById('open_param').style; obj.display=(obj.display=='none')?'block':'none';">
        <a style="cursor:pointer;"><h3>能力値</h3></a>
    </div>

    <div id="open_param">
        <table>
            <thead>
                <tr>
                    <template v-for='(param, index) in param_items'>
                        <th :key="index">{{ param.name }}</th>
                    </template>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <template v-for='(param, index) in param_items'>
                        <td :key=param+index v-if='param.type==0'>能力値</td>
                        <td :key=param+index v-if='param.type==1 || param.type==2 || param.type==3'>
                            <div class="cp_ipselect cp_sl04">
                                <select v-model="selected">
                                    <option v-for='(value,index_value) in param_value_list_type_1' :key='index_value' v-if='param.type==1'>
                                        {{ value }}
                                    </option>
                                    <option v-for='(value,index_value) in param_value_list_type_2' :key='index_value' v-if='param.type==2'>
                                        {{ value }}
                                    </option>
                                    <option v-for='(value,index_value) in param_value_list_type_3' :key='index_value' v-if='param.type==3'>
                                        {{ value }}
                                    </option>
                                </select>
                            </div>
                        </td>
                    </template>
                </tr>
                <tr>
                    <template v-for='(param, index) in param_items'>
                        <td :key=param+index  v-if='param.type==0'>増加分
                        </td>
                        <td :key=param+index  v-if='param.type==1 || param.type==2 || param.type==3 || param.type==4'>
                            <input type="text" name="name" maxlength="2" class="input_box_param"/>
                        </td>
                    </template>
                </tr>
                <tr>
                    <template v-for='(param, index) in param_items'>
                        <td :key=param+index  v-if='param.type==0'>一時的
                        </td>
                        <td :key=param+index  v-if='param.type==1 || param.type==2 || param.type==3 || param.type==4'>
                            <input type="text" name="name" maxlength="2" class="input_box_param"/>
                        </td>
                    </template>
                </tr>
                <tr>
                    <template v-for='(param, index) in param_items'>
                        <td :key=param+index  v-if='param.type==0'>現在値
                        </td>
                        <td :key=param+index  v-if='param.type==1 || param.type==2 || param.type==3'>
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
  name: 'paramTablebox',
  data () {
    return {
      param_items: [
        {'name': '　能力値　', 'type': 0},
        {'name': 'STR', 'type': 1},
        {'name': 'CON', 'type': 1},
        {'name': 'POW', 'type': 1},
        {'name': 'DEX', 'type': 1},
        {'name': 'APP', 'type': 1},
        {'name': 'SIZ', 'type': 1},
        {'name': 'INT', 'type': 2},
        {'name': 'EDU', 'type': 3},
        {'name': 'HP', 'type': 4},
        {'name': 'MP', 'type': 4},
        {'name': 'SAN', 'type': 4},
        {'name': 'IDE', 'type': 4},
        {'name': '幸運', 'type': 4},
        {'name': '知識', 'type': 4}
      ],
      param_value_list_type_1: [
        '', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'
      ],
      param_value_list_type_2: [
        '', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'
      ],
      param_value_list_type_3: [
        '', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'
      ]
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
}
th:first-of-type,
td:first-of-type{
  background: #423845;
}
th,
td{
  background: #575148;
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
 text-align: center;
 font-size: 18px;
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
 border: 2px solid #000000;
 border-radius: 10px;
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
