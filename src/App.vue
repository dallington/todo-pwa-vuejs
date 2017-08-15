<template>
  <div id="TodoApp">

    <router-view></router-view>

    <md-bottom-bar md-shift class="bottom-bar-fixed">
      <md-bottom-bar-item md-icon="info" @click="goTo('About')">About</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="view_list" @click="goTo('TodoList')">Todo List</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="note_add" @click="goTo('TodoAdd')">Todo Add</md-bottom-bar-item>
    </md-bottom-bar>

  </div>
</template>

<script>
  export default {
    name: 'TodoApp',
    methods: {
      goTo (page) {
        this.$router.push({ name: page })
      }
    }
  }
</script>

<style>
  .bottom-bar-fixed {
    position: fixed;
    bottom: 0;
    z-index: 400;
  }
</style>
