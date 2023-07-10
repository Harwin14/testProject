import { createRouter , createWebHistory} from 'vue-router'

import Dashboard from '../pages/Dashboard.vue'
import Login from'../pages/Login.vue'
import Home from '../pages/Home.vue'
import Profile from '../pages/Profile.vue'
import Signup from '../pages/Signup.vue'
const routes = [
    {
      path: '/',
      name:'Dashboard',
      component: Dashboard,
      // children: [
      //   {
      //     path: '',
      //     component: AdminDashboard
      //   }
      // ]
    },
    {
      path: '/home',
      name:'Home',
      component: Home,
    },
    {
      path: '/profile',
      name:'Profile',
      component: Profile,
    },
    {
      path: '/login',
      name:'Login',
      component: Login,
    },
    {
      path: '/signup',
      name:'Signup',
      component: Signup,
    }
  ]



const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router