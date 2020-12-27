import Vue from 'vue';
import env from '@/environment';
import { User, IUser } from '@/type';
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { AxiosError, AxiosResponse } from 'axios';
import { resolve } from 'path';

// https://github.com/championswimmer/vuex-module-decorators
@Module({
  name: 'user',
  namespaced: true,
  stateFactory: true
})
export default class UserStore extends VuexModule {
  user: User = new User();

  @Mutation
  UPDATE_USER(user: IUser) {
    this.user = user;
  }
  @Mutation
  RESET_USER(user: IUser = new User()) {
    this.user = user;
  }

  @Action({ rawError: true })
  getStudent(filters): Promise<IUser[]> {
    return new Promise(
      (resolve, reject): Promise<IUser[] | Error> => {
        return Vue.prototype.$axios
          .get(`${env.BACK_URI}/user/student`, {
            params: filters
          })
          .then((resp: AxiosResponse) => {
            resolve(resp.data.DATA);
          })
          .catch((err: AxiosError) => {
            reject(err);
          });
      }
    );
  }
  @Action({ rawError: true })
  getUserById(apply_id): Promise<IUser> {
    return new Promise(
      (resolve, reject): Promise<IUser | Error> => {
        return Vue.prototype.$axios
          .post(`${env.BACK_URI}/user/get`, { apply_id: apply_id })
          .then((resp: AxiosResponse) => {
            resolve(resp.data.DATA);
          })
          .catch((err: AxiosError) => {
            reject(err);
          });
      }
    );
  }
  @Action({ rawError: true })
  getTeacher(): Promise<IUser[]> {
    return new Promise(
      (resolve, reject): Promise<IUser[] | Error> => {
        return Vue.prototype.$axios
          .get(`${env.BACK_URI}/user/teacher`)
          .then((resp: AxiosResponse) => {
            resolve(resp.data.DATA);
          })
          .catch((err: AxiosError) => {
            reject(err);
          });
      }
    );
  }
  @Action({ rawError: true })
  upsertTeacher(payload: IUser): Promise<any> {
    return new Promise(
      (resolve, reject): Promise<any> => {
        return Vue.prototype.$axios
          .post(`${env.BACK_URI}/user/teacher`, payload)
          .then((resp: AxiosResponse) => {
            resolve(resp.data.DATA);
          })
          .catch((err: AxiosError) => {
            reject(err);
          });
      }
    );
  }

  @Action({ rawError: true })
  CALL_USER_DATA(): Promise<IUser | Error> {
    return new Promise(
      (resolve: any, reject: any): Promise<IUser | Error> => {
        return Vue.prototype.$axios
          .post(`${env.BACK_URI}/user/get`, { apply_id: this.user.apply_id })
          .then((resp: AxiosResponse) => {
            const user: IUser = resp.data.DATA;
            this.context.commit('UPDATE_USER', user);
            resolve(user);
          })
          .catch((err: AxiosError) => {
            this.context.commit('UPDATE_USER', new User());
            reject(err);
          });
      }
    );
  }

  get DATA_USER() {
    return this.user;
  }
  get DATA_FULL_NAME() {
    return `${this.user.prename}${this.user.name} ${this.user.surname}`;
    // return `${this.user.name} ${this.user.surname}`;
  }
}
