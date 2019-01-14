import { Tag } from './tag';

export interface Recipe {
  id: number;
  name: string;
  instructions: string;
  recipeIngredients: object[];
  tags: Tag[];
}
