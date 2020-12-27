import Vue from 'vue';
import env from '@/environment';
import { IUser, ITeacherSignin } from '@/type';
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { AxiosError, AxiosResponse } from 'axios';
import { userStore } from '@/store/store-accessor';

@Module({
  name: 'auth',
  namespaced: true,
  stateFactory: true
})
export default class AuthStore extends VuexModule {
  @Action({ rawError: true })
  signinTeacher(signin: ITeacherSignin) {
    return new Promise(
      (resolve, reject): Promise<IUser | Error> => {
        return (
          Vue.prototype.$axios
            .post(`${Vue.prototype.$env.BACK_URI}/auth/signin/teacher`, signin)
            // request successed
            .then((resp: AxiosResponse) => {
              if (resp) {
                // signin successed -> update user store with resp
                const user = {
                  apply_id: resp.data.DATA.apply_id,
                  permission: resp.data.DATA.permission
                };
                userStore.UPDATE_USER(user);
                return resolve(user);
              } else {
                // signin empty -> reset user
                userStore.RESET_USER();
                return reject(new Error('204 response is empty'));
              }
            })
            // request error
            .catch((err: AxiosError) => {
              reject(err);
            })
        );
      }
    );
  }
}
