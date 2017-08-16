<template>
  <div class="TodoDetails">

    <md-toolbar class="md-dense">
      <h2 class="md-title" style="flex: 1">Todo Details</h2>
    </md-toolbar>

    <div class="content">

      <strong>{{ item.title }}</strong>
      <p>{{ item.description }}</p>

      <br>

      <md-button class="md-raised md-accent md-block" v-on:click="removeItem()">Remove Item</md-button>
    </div>

  </div>
</template>

<script>
  import storage from '@/services/storage'

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
    created () {
      this.item = storage.getObject(this.$route.params.id)
    },
    methods: {
      removeItem () {
        storage.remove(this.$route.params.id)
        this.$router.push({name: 'TodoList'})
      }
    }
  }
</script>
