import { Vue } from 'vue-property-decorator';
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import UnitsApi from '@/api/units-api';
import { Unit } from '@/api/interfaces/unit';
import { UNITS, UNITS_FIND, UNIT_NEW, UNIT_DELETE } from '@/store/constants/units';
import { UnitState } from '@/store/types/unit-state';
import { RootState } from '@/store/types/root-state';
import { AxiosResponse } from 'axios';

const unitsApi = new UnitsApi();

const unitsState: UnitState = {
  units: [],
};

const unitsGetters: GetterTree<UnitState, RootState> = {};

const unitsMutations: MutationTree<UnitState> = {
  [UNITS]: (state: UnitState, units: Unit[]) => {
    Vue.set(state, 'units', units);
  },
  [UNIT_NEW]: (state: UnitState, unit: Unit) => {
    state.units.push(unit);
  },
  [UNIT_DELETE]: (state: UnitState, unitId: number) => {
    Vue.set(
      state,
      'units',
      state.units.filter((t: Unit) => t.id !== unitId),
    );
  },
};

const unitsActions: ActionTree<UnitState, RootState> = {
  [UNITS_FIND]: ({ commit }) => {
    unitsApi
      .find()
      .then((response) => {
        commit(UNITS, response.data);
      })
      .catch(console.log);
  },
  [UNIT_NEW]: ({ commit }, unit: Unit) => {
    unitsApi
      .create(unit)
      .then((response: AxiosResponse<Unit>) => {
        if (response.status === 201) {
          commit(UNIT_NEW, response.data);
        }
      })
      .catch(console.log);
  },
  [UNIT_DELETE]: ({ commit }, unitId: number) => {
    unitsApi
      .deleteById(unitId)
      .then(() => commit(UNIT_DELETE, unitId))
      .catch(console.log);
  },
};

export const UnitsModule: Module<UnitState, RootState> = {
  state: unitsState,
  getters: unitsGetters,
  mutations: unitsMutations,
  actions: unitsActions,
  namespaced: true,
};
