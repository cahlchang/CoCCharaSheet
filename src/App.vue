<template>
<div id="box">
    <div id="app">
        <h2>Cthulhu TRPG Charasheet</h2>
        <h3>基本情報</h3>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>test</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3>能力値</h3>
        <div>
            <table>
                <thead>
                    <tr>
                        <template v-for='(param, index) in param_items'>
                            <th :key="index">{{ param }}</th>
                        </template>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <template v-for='(param, index) in param_items'>
                            <td :key=param+index>
                                <div class="cp_ipselect cp_sl04">
                                    <select v-model="selected">
                                        <option v-for='(value,index_value) in param_value_list' :key='index_value'>
                                            {{ value }}
                                        </option>
                                    </select>
                                </div>
                            </td>
                        </template>
                    </tr>
                    <tr>
                        <template v-for='(param, index) in param_items'>
                            <td :key=param+index>
                            </td>
                        </template>
                        </tr>
                        <tr>
                            <template v-for='(param, index) in param_items'>
                                <td :key=param+index>
                                </td>
                            </template>
                        </tr>
                </tbody>
            </table>
            <h3>戦闘技能</h3>
            <h3>探索技能</h3>
            <h3>技能</h3>
        </div>
    </div>
</div>

</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      userName: null,
      userPic: null,
      isSignedIn: null,
      authButtonText: null,
      authFunction: function () {},
      param_items: [
        '',
        'STR',
        'CON',
        'POW',
        'DEX',
        'APP',
        'SIZ',
        'INT',
        'EDU',
        'HP',
        'MP',
        'SAN',
        'IDE',
        '幸運',
        '知識'
      ],
      param_value_list: [
        '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'
      ]
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

table{
  border-collapse: separate;
  border-spacing: 5px;
  margin: 0 auto;
}
td,th{
  padding: 10px;
  text-align: center;
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
</style>
