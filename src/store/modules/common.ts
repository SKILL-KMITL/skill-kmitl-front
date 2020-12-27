import Vue from 'vue';
import env from '@/environment';
import { User, IUser } from '@/type';
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { AxiosError, AxiosResponse } from 'axios';
import { CommonScope, Common } from '@/type/common';

@Module({
  name: 'common',
  namespaced: true,
  stateFactory: true
})
export default class CommonStore extends VuexModule {
  common: Common = new Common();
  @Mutation
  updateState(data, scope: CommonScope) {
    this.common[scope] = data;
  }

  @Action({ rawError: true })
  getCommon(): Promise<Common | Error> {
    return new Promise((resolve, reject) => {
      Vue.prototype.$axios
        .get(`${env.BACK_URI}/setting`)
        .then((resp: AxiosResponse) => resolve(resp.data.DATA))
        .catch((err: AxiosError) => reject(err));
    });
  }
}
