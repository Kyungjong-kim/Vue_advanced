import { createRouter, createWebHistory } from 'vue-router';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import NewsView from '../views/NewsView.vue';
import CreateListView from '../views/CreateListView.js';
import store from '../store/index.js';
const routes = [
  {
    path: '/',
    redirect: '/news',
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView, // 믹스인테스트
    beforeEnter: (to, from, next) => {
      store.dispatch('START_SPINNER');
      store
        .dispatch('FETCH_LIST', to.name)
        .then(() => {
          console.log('fetched');
          //store.dispatch('END_SPINNER');
          next();
        })
        .catch((error) => console.log(error));
    }
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
