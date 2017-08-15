<template>
  <div class="About">

    <md-toolbar class="md-dense">
      <h2 class="md-title" style="flex: 1">About</h2>
    </md-toolbar>

    <div class="content text-center">
      <p>This project example PWA with VueJS is Open Source.</p>
      <md-button href="http://github.com/odirleiborgert/todo-pwa-vuejs" class="md-raised md-primary" target="_blank">odirleiborgert/todo-pwa-buejs</md-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<style>
  .About .content p {
    font-size: 18px;
    line-height: 26px;
  }
</style>
