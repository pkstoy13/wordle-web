import MainMenu from '@/components/MainMenu.vue'
import PlayPage from '@/components/PlayPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'main-menu', component: MainMenu },
    { path: '/play', name: 'play-page', component: PlayPage },
  ],
})

export default router
