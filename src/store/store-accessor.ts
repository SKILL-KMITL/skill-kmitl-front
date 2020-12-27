// This is the "store accessor":
// It initializes all the modules using a Vuex plugin (see store/index.ts)
// In here you import all your modules, call getModule on them to turn them
// into the actual stores, and then re-export them.

import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import UserModule from '@/store/modules/user';
import PortfolioModule from '@/store/modules/portfolio';
import AuthModule from '@/store/modules/auth';
import CommonModule from '@/store/modules/common';

// Each store is the singleton instance of its module class
// Use these -- they have methods for state/getters/mutations/actions
// (result from getModule(...))
export let userStore: UserModule;
export let portfolioStore: PortfolioModule;
export let authStore: AuthModule;
export let commonStore: CommonModule;

// initializer plugin: sets up state/getters/mutations/actions for each store
export function initializeStores(store: Store<any>): void {
  userStore = getModule(UserModule, store);
  portfolioStore = getModule(PortfolioModule, store);
  authStore = getModule(AuthModule, store);
  commonStore = getModule(CommonModule, store);
}

// for use in 'modules' store init (see store/index.ts), so each module
// appears as an element of the root store's state.
// (This is required!)
export const modules = {
  user: UserModule,
  portfolio: PortfolioModule,
  auth: AuthModule,
  common: CommonModule
};

// console.log('end of store-accessor: UserModule=<', typeof UserModule, '>') // expect "function"
// console.log(' and userStore=<', typeof userStore, '>', userStore) // expect "undefined", OK
