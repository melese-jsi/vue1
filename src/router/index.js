import AddisVue from '@/components/AddisVue.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },
  {path:'/addis',
    name:'addis',
    component: AddisVue
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
