import Vue from 'vue';
import Router from 'vue-router';

import home from '@/views/Home.vue';
import films from '@/views/Films.vue';
import contact from '@/views/Contact.vue';
import engaging from '@/views/Engaging.vue';
import documentary from '@/views/Documentary.vue';
import commercial from '@/views/Commercial.vue';

Vue.use(Router);

const routes = [
  { path: '/', component: home },
  { path: '/narrative', component: films },
  { path: '/contact', component: contact },
  { path: '/engaging', component: engaging },
  { path: '/documentary', component: documentary },
  { path: '/commercial', component: commercial },
];

export default new Router({
  routes,
  mode: 'history',
});
