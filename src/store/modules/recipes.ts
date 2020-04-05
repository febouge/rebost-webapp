import { Vue } from 'vue-property-decorator';
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import RecipesApi from '@/api/recipes-api';
import { Recipe } from '@/api/interfaces/recipe';
import { RECIPES, RECIPES_FIND } from '@/store/constants/recipes';
import { RecipeState } from '@/store/types/recipe-state';
import { RootState } from '@/store/types/root-state';

const recipesApi = new RecipesApi();

const recipesState: RecipeState = {
  recipes: [],
};

const recipesGetters: GetterTree<RecipeState, RootState> = {};

const recipesMutations: MutationTree<RecipeState> = {
  [RECIPES]: (state: RecipeState, recipes: Recipe[]) => {
    Vue.set(state, 'recipes', recipes);
  },
};

const recipesActions: ActionTree<RecipeState, RootState> = {
  [RECIPES_FIND]: ({ commit }) => {
    recipesApi
      .find()
      .then((response) => {
        commit(RECIPES, response.data);
      })
      .catch(console.log);
  },
};

export const RecipesModule: Module<RecipeState, RootState> = {
  state: recipesState,
  getters: recipesGetters,
  mutations: recipesMutations,
  actions: recipesActions,
  namespaced: true,
};
