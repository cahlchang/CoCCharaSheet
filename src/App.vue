<template>
<div id="app">
  <h2>Cthulhu TRPG Charasheet</h2>
  <div>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(param,index) in param_items" :key='index'>
          <td>{{ param }}</td>
          <td>VALUE</td>
          <td><button class="btn btn-danger" v-on:click="deleteRow(index)">削除</button></td>
        </tr>
      </tbody>
    </table>

    <ul id="example-2">
      <li v-for="(item, index) in items" :key='index'>
        {{ index }}
        aa
      </li>
    </ul>
    test
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
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

table{
  width: 100%;
  border-collapse: collapse;
}

table tr *:nth-child(1){
  background: #49c5f0;
}

table tr *:nth-child(2){
  background: #57b3e8;
}

table tr *:nth-child(3){
  background: #649cdf;
}

table tr *:nth-child(4){
  background: #6e87d7;
}

table th,table td{
  color:white;
  border:solid 1px white;
  text-align: center;
  padding: 10px 0;
}
</style>
