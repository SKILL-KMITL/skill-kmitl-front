// import { RouteRecord  } from 'vue-router';
import { RouteRecord } from 'vue-router';
import Vue from 'vue';
import env from '../environment';
import { AxiosResponse } from 'axios';
import { userStore } from '@/store';

export function titleMiddleware(router: any) {
  router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
  });
}

export function authMiddleware(router: any) {
  router.beforeEach(async (to: any, from: any, next: any) => {
    if (
      // case student or above require
      to.matched.some((record: RouteRecord) => record.meta.requiresAuth >= 1)
    ) {
      // verify token
      await Vue.prototype.$axios
        .post(`${env.BACK_URI}/auth`)

        // verify successed
        .then(async (resp: AxiosResponse) => {
          const user = {
            apply_id: resp.data.DATA.apply_id,
            permission: resp.data.DATA.permission
          };
          await userStore.UPDATE_USER(user);
          const userData: any = await userStore.CALL_USER_DATA();

          const userInfo = {
            apply_id: userData.apply_id,
            mobile: userData.mobile,
            name: `${userData.prename}${userData.name} ${userData.surname}`
          };
        })

        // verify failed
        .catch((err) => {
          // redirect to login page
          next({ name: 'SLogin' });
        });
    } else if (to.matched.some((record: RouteRecord) => record.meta.requiresAuth <= 0)) {
      // verify token
      await Vue.prototype.$axios
        .post(`${env.BACK_URI}/auth`)

        // verify successed
        .then((resp: AxiosResponse) => {
          const step = resp.data.DATA.step; // redicrec to dashboard step N
          next({ name: `Step${step}` });
        })
        .catch((err) => err);
    }

    /* ------------------------------ Teacher Auth ------------------------------ */

    if (
      // case student or above require
      to.matched.some((record: RouteRecord) => record.meta.requiresTAuth >= 1)
    ) {
      // verify token
      await Vue.prototype.$axios
        .post(`${env.BACK_URI}/auth`)

        // verify successed
        .then(async (resp: AxiosResponse) => {
          if (resp.data.DATA.permission < 2) {
            next({ name: 'SLogin' });
          } else {
            const user = {
              apply_id: resp.data.DATA.apply_id,
              permission: resp.data.DATA.permission
            };
            await userStore.UPDATE_USER(user);
            await userStore.CALL_USER_DATA();
          }
        })
        // verify failed
        .catch((err) => {
          // redirect to login page
          next({ name: 'TLogin' });
        });
    } else if (to.matched.some((record: RouteRecord) => record.meta.requiresTAuth <= 0)) {
      // verify token
      await Vue.prototype.$axios
        .post(`${env.BACK_URI}/auth`)

        // verify successed
        .then((resp: AxiosResponse) => {
          const step = resp.data.DATA.step; // redicrec to dashboard step N
          next({ name: `TMember` });
        })
        .catch((err) => err);
    }
    next();
  });
}
