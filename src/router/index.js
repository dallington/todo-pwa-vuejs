import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import TodoList from '@/components/TodoList'
import TodoAdd from '@/components/TodoAdd'
import TodoDetails from '@/components/TodoDetails'

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
      path: '/details/:id',
      name: 'TodoDetails',
      component: TodoDetails
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
