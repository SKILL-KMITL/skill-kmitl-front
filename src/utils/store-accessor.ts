import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import UserStore from '@/store/modules/user';

let user_store: UserStore;

function initialiseStores(store: Store<any>): void {
  user_store = getModule(UserStore, store);
}

export { initialiseStores, user_store };
