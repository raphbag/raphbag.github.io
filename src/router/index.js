import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjetView from '@/views/ProjectView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projets',
      name: 'projets',
      component: ProjetView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFoundView,
    }
  ],
})

export default router
