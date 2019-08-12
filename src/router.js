import Vue from 'vue';
import Router from 'vue-router';

import home from '@/views/Home.vue';
import about from '@/views/About.vue';
import contact from '@/views/Contact.vue';
import engaging from '@/views/Engaging.vue';

Vue.use(Router);

const routes = [
  { path: '/', component: home },
  { path: '/about', component: about },
  { path: '/contact', component: contact },
  { path: '/engaging', component: engaging },
];

export default new Router({
  routes,
  mode: 'history',
});
