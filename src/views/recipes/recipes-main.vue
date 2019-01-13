<template>
<div>
  <h1>Recipes</h1>
  <v-btn @click="findRecipes">Load</v-btn>
  <v-container v-bind="{ [`grid-list-xl`]: true }" fluid>
    <v-layout row wrap>
      <v-flex
        v-for="recipe in recipes"
        :key="recipe.id"
        xs12 sm5 md4 lg2
        >
        <recipe-card v-bind:recipe="recipe"></recipe-card>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import { Recipe } from '@/api/interfaces/recipe';
import {
  RECIPES_MODULE,
  RECIPES_FIND,
} from '@/store/constants/recipes';
import RecipeCard from '@/components/recipes/RecipeCard.vue';

@Component({
  name: 'recipes-main',
  components: {
    RecipeCard,
  },
})
export default class RecipesMain extends Vue {

  @State('recipes', {namespace: RECIPES_MODULE})
  public recipes!: Recipe[];

  @Action(RECIPES_FIND, {namespace: RECIPES_MODULE})
  public findRecipes!: () => Promise<void>;

  public headers = [
    { text: 'Name', value: 'name' },
    { text: 'Ingredients', value: 'ingredients' },
    { text: 'Tags', value: 'tags' },
  ];

  public mount() {
    this.findRecipes();
  }
}
</script>
