<template>
  <div class="TodoList">

    <md-toolbar class="md-dense">
      <h2 class="md-title" style="flex: 1">Todo List</h2>
    </md-toolbar>

    <md-list class="md-double-line md-list-text-container md-dense">
      <md-list-item v-for="item in list">
        <router-link :to="{ name: 'TodoDetails',params: { id: item.id } }">
          <md-icon>check_circle</md-icon>
          <div class="md-list-text-container">
            <span>{{ item.title }}</span>
            <p>{{ item.description }}</p>
          </div>
        </router-link>
      </md-list-item>
    </md-list>

  </div>
</template>

<script>
  import storage from '@/services/storage'

  export default {
    name: 'TodoList',
    data () {
      return {
        list: []
      }
    },
    created () {
      this.list = storage.getAllObject()
    }
  }
</script>

<style>
  .TodoList {
    padding-bottom: 60px;
  }
</style>
