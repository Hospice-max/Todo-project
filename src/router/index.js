import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from '../views/Acceuil.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Acceuil',
      component: Acceuil
    },
  ]
})

export default router
