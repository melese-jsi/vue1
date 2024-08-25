
import eurcardView from '@/components/eurcard.vue'
import usdcardView from '@/components/usdcard.vue'

import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: usdcardView   
  },
  {path:'/usd',
    component:usdcardView,
    name:'usdcard'},
    
    {path:'/eur',
    component:eurcardView,
    name:'eurcard'}

  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
