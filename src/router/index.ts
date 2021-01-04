import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/todolist',
    name: 'TodoList',
    component: () =>
      import(/* webpackChunkName: "TodoList" */ '@/views/TodoList/TodoList.vue')
  },
  {
    path: '/formRender',
    name: 'FormRender',
    component: () =>
      import(
        /* webpackChunkName: "FormRender" */ '@/views/FormRender/FormRender.vue'
      )
  },
  {
    path: '/vueApi',
    name: 'VueAPI',
    component: () =>
      import(/* webpackChunkName: "VueAPI" */ '@/views/VueAPI/VueAPI.vue')
  },
  {
    path: '/table',
    name: 'Table',
    component: () =>
      import(/* webpackChunkName: "Table" */ '@/views/Table/Table.vue')
  },
  {
    path: '/dialog',
    name: 'DialogBox',
    component: () =>
      import(
        /* webpackChunkName: "DialogBox" */ '@/views/DialogBox/DialogBox.vue'
      )
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
