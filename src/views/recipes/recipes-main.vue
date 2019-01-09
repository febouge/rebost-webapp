<template>
  <div>
    <h1>Recipes</h1>
    <v-btn @click="findRecipes">Load</v-btn>
    <v-data-table
    :headers="headers"
    :items="recipes"
    class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs">{{ props.item.name }}</td>
        <td class="text-xs">{{ props.item.recipeIngredients.length }}</td>
        <td class="text-xs">
          <v-chip v-for="tag of props.item.tags"
          :key="tag.id" :small="true">
          {{ tag.name }}
          </v-chip>
        </td>
      </template>
      <template slot="no-data">
          Sorry, nothing to display here :(
      </template>
    </v-data-table>
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

@Component({
  name: 'recipes-main',
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
