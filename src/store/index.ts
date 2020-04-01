import Vue from 'vue';
import Vuex, { Store } from 'vuex'; // eslint-disable-line
import { getStoreBuilder } from 'vuex-typex';

export interface RootState {
  // Do something

}

Vue.use(Vuex);
const store: Store<RootState> = getStoreBuilder<RootState>().vuexStore();

export default store;
