<template>
  <div class="TodoAdd">

    <md-toolbar class="md-dense">
      <h2 class="md-title" style="flex: 1">Todo Add</h2>
    </md-toolbar>

    <div class="loading" v-if="loading">
      <md-spinner :md-size="30" :md-stroke="1" md-indeterminate></md-spinner>
    </div>

    <div class="content" v-if="!loading">
      <md-input-container>
        <label>Title</label>
        <md-input v-model="item.title"></md-input>
      </md-input-container>
      <md-input-container>
        <label>Description</label>
        <md-textarea v-model="item.description"></md-textarea>
      </md-input-container>
      <md-button class="md-raised md-primary md-block" v-on:click="addItem(item)" :disabled="!item.title || !item.description">Add Todo</md-button>
    </div>

  </div>
</template>

<script>
  import store from '@/store'
  import session from '@/services/session'

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
        session.setObject(this.guid(), item)
        setTimeout(() => {
          this.$router.push({name: 'TodoList'})
        }, 400)
      },
      guid () {
        function s4 () {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1)
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
      }
    }
  }
</script>
