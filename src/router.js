import Vue from 'vue';
import Router from 'vue-router';

import home from '@/views/Home.vue';
import films from '@/views/Films.vue';
import contact from '@/views/Contact.vue';
import engaging from '@/views/Engaging.vue';

Vue.use(Router);

const routes = [
  { path: '/', component: home },
  { path: '/films', component: films },
  { path: '/contact', component: contact },
  { path: '/engaging', component: engaging },
];

export default new Router({
  routes,
  mode: 'history',
});
