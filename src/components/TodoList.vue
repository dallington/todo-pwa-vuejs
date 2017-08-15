<template>
  <div class="TodoList">

    <md-toolbar class="md-dense">
      <h2 class="md-title" style="flex: 1">Todo List</h2>
    </md-toolbar>

    <md-list class="md-double-line md-list-text-container md-dense">
      <md-list-item href="#/about" v-for="item in list">
        <md-icon>check_circle</md-icon>
        <div class="md-list-text-container">
          <span>{{ item }}</span>
          <p>{{ item }}</p>
        </div>
      </md-list-item>
    </md-list>

  </div>
</template>

<script>
//  import store from '@/store'
  import session from '@/services/session'

  export default {
    name: 'TodoList',
    data () {
      return {
        list: []
      }
    },
    created () {
//      console.log(session.getObject('d87694b4-f4f2-fee0-07cf-0a46f55f9ace'))
      console.log(session.getAllObject())
      this.list = session.getAllObject()
    }
  }
</script>

<style>
  .TodoList {
    padding-bottom: 60px;
  }
</style>
