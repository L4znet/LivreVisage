import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserPosts from '../views/UserPosts.vue';
import AllUsers from '../views/AllUsers.vue';
import AddUser from '../views/AddUser.vue';

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
  },
  {
    path:'/users/',
    component: AllUsers,
    name:'users'
  },

  {
    path:'/users/add',
    component: AddUser,
    name:'user-add'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
