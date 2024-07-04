import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from '../views/Acceuil.vue'
import FormComponent from "../Components/FormComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Acceuil',
      component: Acceuil
    },
    {
      path:'/About',
      name: 'FormComponent',
      component:FormComponent
    }
  ]
})

export default router
