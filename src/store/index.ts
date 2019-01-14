import Vuex from 'vuex';
import { RootState } from '@/store/types/root-state';
import { LayoutModule } from '@/store/modules/layout';
import { RecipesModule } from '@/store/modules/recipes';
import { TagsModule } from '@/store/modules/tags';

const rootState: RootState = {
  app: true,
};

export default new Vuex.Store({
  actions: {},
  getters: {},
  modules: {
    LayoutModule,
    RecipesModule,
    TagsModule,
  },
  mutations: {},
  state: rootState,
});
