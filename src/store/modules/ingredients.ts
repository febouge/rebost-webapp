import { Vue } from 'vue-property-decorator';
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import IngredientsApi from '@/api/ingredients-api';
import { Ingredient } from '@/api/interfaces/ingredient';
import {
  INGREDIENTS,
  INGREDIENTS_FIND,
  INGREDIENT_NEW,
  INGREDIENT_DELETE,
} from '@/store/constants/ingredients';
import { IngredientState } from '@/store/types/ingredient-state';
import { RootState } from '@/store/types/root-state';
import { AxiosResponse } from 'axios';

const ingredientsApi = new IngredientsApi();

const ingredientsState: IngredientState = {
  ingredients: [],
};

const ingredientsGetters: GetterTree<IngredientState, RootState> = {};

const ingredientsMutations: MutationTree<IngredientState> = {
  [INGREDIENTS]: (state: IngredientState, ingredients: Ingredient[]) => {
    Vue.set(state, 'ingredients', ingredients);
  },
  [INGREDIENT_NEW]: (state: IngredientState, ingredient: Ingredient) => {
    state.ingredients.push(ingredient);
  },
  [INGREDIENT_DELETE]: (state: IngredientState, ingredientId: number) => {
    Vue.set(
      state,
      'ingredients',
      state.ingredients.filter((t: Ingredient) => t.id !== ingredientId),
    );
  },
};

const ingredientsActions: ActionTree<IngredientState, RootState> = {
  [INGREDIENTS_FIND]: ({ commit }) => {
    ingredientsApi
      .find()
      .then((response) => {
        commit(INGREDIENTS, response.data);
      })
      .catch(console.log);
  },
  [INGREDIENT_NEW]: ({ commit }, ingredient: Ingredient) => {
    ingredientsApi
      .create(ingredient)
      .then((response: AxiosResponse<Ingredient>) => {
        if (response.status === 201) {
          commit(INGREDIENT_NEW, response.data);
        }
      })
      .catch(console.log);
  },
  [INGREDIENT_DELETE]: ({ commit }, ingredientId: number) => {
    ingredientsApi
      .deleteById(ingredientId)
      .then(() => commit(INGREDIENT_DELETE, ingredientId))
      .catch(console.log);
  },
};

export const IngredientsModule: Module<IngredientState, RootState> = {
  state: ingredientsState,
  getters: ingredientsGetters,
  mutations: ingredientsMutations,
  actions: ingredientsActions,
  namespaced: true,
};
