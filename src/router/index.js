import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import TodoList from '@/components/TodoList'
import TodoAdd from '@/components/TodoAdd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/add',
      name: 'TodoAdd',
      component: TodoAdd
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
