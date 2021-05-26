import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserPosts from '../components/UserPosts.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:id', 
    component: UserPosts, 
    name: 'user-posts'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
