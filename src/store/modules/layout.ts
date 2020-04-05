import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { LayoutState } from '@/store/types/layout-state';
import { RootState } from '@/store/types/root-state';
import { Vue } from 'vue-property-decorator';
import { TOGGLE_DRAWER } from '@/store/constants/layout';

const layoutState: LayoutState = {
  showDrawer: true,
};

const layoutGetters: GetterTree<LayoutState, RootState> = {};

const layoutMutations: MutationTree<LayoutState> = {
  [TOGGLE_DRAWER]: (state: LayoutState) => {
    Vue.set(state, 'showDrawer', !state.showDrawer);
  },
};

const layoutActions: ActionTree<LayoutState, RootState> = {
  [TOGGLE_DRAWER]: ({ commit }) => {
    commit(TOGGLE_DRAWER);
  },
};

export const LayoutModule: Module<LayoutState, RootState> = {
  state: layoutState,
  getters: layoutGetters,
  mutations: layoutMutations,
  actions: layoutActions,
  namespaced: true,
};
