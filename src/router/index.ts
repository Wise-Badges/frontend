import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/viewbadges',
    name: 'ViewBadges',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewBadges.vue'),
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import(/* webpackChunkName: "about" */ '../views/Community.vue'),
  },
  {
    path: '/community/:badgeId',
    name: 'Community',
    component: () => import(/* webpackChunkName: "about" */ '../views/Community.vue'),
  },
  {
    path: '/receiver/:id',
    name: 'Receiver',
    component: () => import(/* webpackChunkName: "about" */ '../views/Receiver.vue'),
  },
  {
    path: '/receiver/:id/:receiver',
    name: 'Message',
    component: () => import(/* webpackChunkName: "about" */ '../views/Message.vue'),
  },
  {
    path: '/receiver/:id/:receiver/:message',
    name: 'Done',
    component: () => import(/* webpackChunkName: "about" */ '../views/Done.vue'),
  },
  {
    path: '/detail/:assertionId',
    name: 'Detail',
    component: () => import('../views/Detail.vue'),
  },
  {
    // matches everything else
    path: '*',
    name: 'notFound',
    component: () => import('../views/NotFound.vue'),
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

export default router;
