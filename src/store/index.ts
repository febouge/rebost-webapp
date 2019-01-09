import Vuex from 'vuex';
import { RootState } from '@/store/types/root-state';
import { RecipesModule } from '@/store/modules/recipes';
import { LayoutModule } from '@/store/modules/layout';

const rootState: RootState = {
  app: true,
};

export default new Vuex.Store({
  actions: {},
  getters: {},
  modules: {
    RecipesModule,
    LayoutModule,
  },
  mutations: {},
  state: rootState,
});
