import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/home/index.vue';
import Rules from './components/rules/index.vue';
import Instruction from './components/instruction/index.vue';
import Agreement from './pages/agreement/index.vue';

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Home
      },
      {
      	path: '/rules',
      	component: Rules
      },
      {
      	path: '/instruction',
      	component: Instruction
      },
      {
      	path: '/agreement',
      	component: Agreement
      }
    ]
  })
}