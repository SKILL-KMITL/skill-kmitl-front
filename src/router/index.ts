import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    components: {
      body: () => import('@components/Body.vue')
    },
    children: [
      {
        path: '/close',
        name: 'Close',
        component: () => import('@views/Close.vue')
      },
      {
        path: '/',
        alias: '/landing',
        name: 'Landing',
        component: () => import('@views/Landing.vue'),
        meta: {
          title: 'Job Recommendation'
        }
      },
      {
        path: '*',
        alias: '404',
        name: '404',
        component: () => import('@views/404.vue'),
        meta: {
          title: '404 NotFound'
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
