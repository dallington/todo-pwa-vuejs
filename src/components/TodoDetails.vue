<template>
  <div class="TodoDetails">

    <md-toolbar class="md-dense">
      <h2 class="md-title" style="flex: 1">Todo Details</h2>
    </md-toolbar>

    <div class="content">
      <md-input-container>
        <label>Title</label>
        <md-input v-model="item.title"></md-input>
      </md-input-container>
      <md-input-container>
        <label>Description</label>
        <md-textarea v-model="item.description"></md-textarea>
      </md-input-container>
    </div>
    <md-button class="md-raised md-primary" v-on:click="addItem(item)">Add Todo</md-button>

  </div>
</template>

<script>
  import store from '@/store'

  export default {
    name: 'TodoAdd',
    data () {
      return {
        array: [],
        loading: false,
        item: {
          title: '',
          description: ''
        }
      }
    },
    methods: {
      addItem (item) {
        this.loading = true
        this.array = store.state.list
        this.array.push(item)
        store.state.list = this.array
        // loading
        // redirect home
      }
    }
  }
</script>
