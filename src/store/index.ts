import Vuex, { ActionTree } from 'vuex';
import { RootState } from '@/store/types/root-state';
import { LayoutModule } from '@/store/modules/layout';
import { RecipesModule } from '@/store/modules/recipes';
import { TagsModule } from '@/store/modules/tags';
import { FETCH_DATA } from './constants/root';
import { TAGS_MODULE, TAGS_FIND } from './constants/tags';

const rootState: RootState = {
  app: true,
};

const rootActions: ActionTree<RootState, RootState> = {
  [FETCH_DATA]: ({ dispatch }) => {
    dispatch(`${TAGS_MODULE}/${TAGS_FIND}`);
  },
};

export default new Vuex.Store({
  actions: rootActions,
  getters: {},
  modules: {
    LayoutModule,
    RecipesModule,
    TagsModule,
  },
  mutations: {},
  state: rootState,
});
