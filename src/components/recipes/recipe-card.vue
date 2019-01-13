<template>
<v-card>
  <v-img
    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
    aspect-ratio="2.75"
    ></v-img>
  
  <v-card-title primary-title>
    <div>
      <h3 class="headline mb-0">{{ recipe.name }}</h3>
      <div>{{ recipe.instructions }}</div>
      <div><i>Ingredients: </i>{{ recipe.recipeIngredients.length }}</div>
    </div>
  </v-card-title>
  <v-card-actions class="pa-3">
    <v-tooltip bottom>
      <v-btn
	slot="activator"
	icon
	>
	<v-icon>favorite_border</v-icon>
      </v-btn>
      <span>Mark as favorite</span>
    </v-tooltip>
    <v-spacer></v-spacer>
    <v-tooltip bottom>
      <v-btn
	slot="activator"
        dark
	icon
	>
	<v-icon
          color="secondary"
	  >
	  open_in_new
	</v-icon>
      </v-btn>
      <span>Show recipe</span>
    </v-tooltip>
  </v-card-actions>
</v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Recipe } from '@/api/interfaces/recipe';

@Component({
  name: 'recipe-card',
})
export default class RecipeCard extends Vue {

  @Prop()
  public recipe!: Recipe;

}
</script>

<style lang="scss">
  .recipe-card {
    min-width: 70px;
  }
</style>
