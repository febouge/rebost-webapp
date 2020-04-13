import { Allergen } from './allergen';

export interface Ingredient {
  id?: number;
  name: string;
  allergens?: Allergen[];
}
