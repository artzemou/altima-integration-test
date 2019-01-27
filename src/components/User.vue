<template>
  <div>
    <div class="searchBy">
      <label for="">Filter by
        <span @click="toggleFilterByName('byFirstName')">Firstname</span>
        <span @click="toggleFilterByName('byLastName')">LastName</span>
      </label>
      <input type="text" v-model="search">
    </div>

    <table>
      <tr>
        <td>picture</td>
        <td @click="sort('lastname')">lastname</td>
        <td @click="sort('firstname')">firstname</td>
        <td @click="sort('balance')">balance</td>
      </tr>
      <tr v-for="(user, index) in filteredByName" :key="index">
        <td><img alt="" :src="user.picture"/></td>
        <td>{{ user.lastname }}</td>
        <td>{{ user.firstname }}</td>
        <td>{{ user.balance }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
/* eslint-disable */
import fetch from 'cross-fetch';
import MaterialSpinner from '@/components/MaterialSpinner'
import * as moment from 'moment'
moment.locale('fr')

export default {
  data () {
    return {
      data: [],
      currentSort:'lastname',
      currentSortDir:'asc',
      search:'',
      byFirstName: true
    }
  },
  created () {
    (async () => {
      try {
        const res = await fetch(' https://demo0050088.mockable.io/simple/profils', {
          method: 'GET'
        })
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }

        const data = await res.json();
        console.log(data)
        this.data = data

      } catch (err) {
        console.error(err);
      }
    })();
  },
  methods: {
    sort:function(s) {
      //if s == current sort, reverse
      if(s === this.currentSort) {
        this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
      }
      this.currentSort = s;
    },
    toggleFilterByName(name) {
      name === 'byFirstName' ? this.byFirstName = true : this.byFirstName = false
    }
  },
  computed:{
    sortedData:function() {

      return this.data.sort((a,b) => {
        let modifier = 1;
        if(this.currentSortDir === 'desc') modifier = -1;
        if(this.currentSort === 'balance') {
          if(parseFloat(a[this.currentSort]) < parseFloat(b[this.currentSort])) return -1 * modifier;
          if(parseFloat(a[this.currentSort]) > parseFloat(b[this.currentSort])) return 1 * modifier;
          return 0;
        } else {
          if((a[this.currentSort].toLowerCase()) < (b[this.currentSort]).toLowerCase()) return -1 * modifier;
          if((a[this.currentSort].toLowerCase()) > (b[this.currentSort]).toLowerCase()) return 1 * modifier;
          return 0;
        }
      });
    },
    filteredByName() {
      if(this.byFirstName) {
        return this.sortedData.filter(user =>
        (user.firstname.toLowerCase().indexOf(this.search.toLowerCase()) > -1));
      }
      else {
        return this.sortedData.filter(user =>
        (user.lastname.toLowerCase().indexOf(this.search.toLowerCase()) > -1));
      }
    }

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/* eslint-disable */
$transparency: #5b2d89;
$activeTransparency: #51287a;

::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background-color: $transparency;
}
::-webkit-scrollbar-thumb {
  background-color: $transparency;
}
table{
  width: 100%;
  td{
    width: 25%;
    height: 50px;
    vertical-align: middle;
    border: 1px solid #d9d9d9;
  }
}

.searchBy{
  float: right;
  input{
    padding: 1rem;
    background: transparent;
    margin: 1rem;
  }
  span{
    &:hover{
      text-decoration: underline;
    }
  }
}



</style>
