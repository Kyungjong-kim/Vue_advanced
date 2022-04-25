import { createRouter, createWebHistory } from 'vue-router';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import NewsView from '../views/NewsView.vue';
import CreateListView from '../views/CreateListView.js';

const routes = [
  {
    path: '/',
    redirect: '/news',
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView, // 믹스인테스트
  },
  {
    path: '/ask',
    name: 'ask',
    component: CreateListView('AskView'),
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: CreateListView('JobsView'),
  },
  {
    path: '/item/:id',
    component: ItemView,
  },
  {
    path: '/user/:id',
    component: UserView,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
