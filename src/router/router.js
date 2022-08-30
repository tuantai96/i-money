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
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
