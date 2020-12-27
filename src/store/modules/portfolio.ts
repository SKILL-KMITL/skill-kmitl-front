import Vue from 'vue';
import env from '@/environment';
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { Portfolio, PortfolioType } from '@/type/portfolio';
import { AxiosError, AxiosResponse } from 'axios';
import { userStore } from '@/store';

@Module({
  name: 'portfolio',
  namespaced: true,
  stateFactory: true
})
export default class PortfolioStore extends VuexModule {
  portfolioType: any = [];
  portfolio: Portfolio = new Portfolio();

  /* -------------------------------- Mutations -------------------------------- */
  @Mutation
  updatePort(data: Portfolio) {
    this.portfolio = data;
  }
  @Mutation
  updatePortType(data: PortfolioType) {
    this.portfolioType = data;
  }

  /* --------------------------------- Actions -------------------------------- */
  @Action({ rawError: true })
  async getPort(): Promise<Portfolio> {
    return new Promise((resolve, reject) => {
      const userData = userStore.DATA_USER;
      Vue.prototype.$axios
        .get(`${env.BACK_URI}/portfolio/${userData.apply_id}`)
        .then((resp: AxiosResponse) => {
          const data = resp.data.DATA;
          this.context.commit('updatePort', data);
          return resolve(data);
        })
        .catch((err: AxiosError) => {
          this.context.commit('updatePort', new Portfolio());
          reject(err);
        });
    });
  }
  @Action({ rawError: true })
  async getPortType(): Promise<PortfolioType> {
    return new Promise((resolve, reject) => {
      Vue.prototype.$axios
        .get(`${env.BACK_URI}/portfoliotype`)
        .then((resp: AxiosResponse) => {
          const data = resp.data.DATA;
          this.context.commit('updatePortType', data);
          return resolve(data);
        })
        .catch((err: AxiosError) => {
          this.context.commit('updatePortType', new PortfolioType());
          reject(err);
        });
    });
  }
  @Action({ rawError: true })
  async createPort(payload): Promise<PortfolioType> {
    return new Promise((resolve, reject) => {
      const form = new FormData();
      for (const key in payload) {
        form.append(key, payload[key]);
      }
      Vue.prototype.$axios
        .post(`${env.BACK_URI}/portfolio`, form)
        .then((resp: AxiosResponse) => {
          const data = resp.data.DATA;
          return resolve(data);
        })
        .catch((err: AxiosError) => {
          return reject(err);
        });
    });
  }
  @Action({ rawError: true })
  async removePort(payload): Promise<PortfolioType> {
    return new Promise((resolve, reject) => {
      Vue.prototype.$axios
        .post(`${env.BACK_URI}/portfolio/delete`, payload)
        .then((resp: AxiosResponse) => {
          const data = resp.data.DATA;
          return resolve(data);
        })
        .catch((err: AxiosError) => {
          reject(err);
        });
    });
  }

  @Action({ rawError: true })
  async createPortType(payload): Promise<any> {
    return new Promise((resolve, reject) => {
      Vue.prototype.$axios
        .post(`${env.BACK_URI}/portfoliotype`, payload)
        .then((resp: AxiosResponse) => {
          const data = resp.data.DATA;
          return resolve(data);
        })
        .catch((err: AxiosError) => {
          reject(err);
        });
    });
  }

  @Action({ rawError: true })
  async deletePortType(payload): Promise<any> {
    return new Promise((resolve, reject) => {
      Vue.prototype.$axios
        .post(`${env.BACK_URI}/portfoliotype/delete`, payload)
        .then((resp: AxiosResponse) => {
          const data = resp.data.DATA;
          return resolve(data);
        })
        .catch((err: AxiosError) => {
          reject(err);
        });
    });
  }

  get dataPort() {
    return this.portfolio;
  }
  get dataPortType() {
    return this.portfolioType.reduce((r, a) => {
      r[a.group] = [...(r[a.group] || []), a];
      return r;
    }, {});
  }
}
