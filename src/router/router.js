import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/index'),
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      layout: "auth",
    },
    component: () => import('../views/register'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: "auth",
    },
    component: () => import('../views/login'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/profile'),
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../views/logout'),
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
