import BaseApi from './base-api';
import { Recipe } from './interfaces/recipe';
import { AxiosPromise } from 'axios';

export default class RecipesApi extends BaseApi {
  private recipesEndpoint = 'recipes/';

  public findById(id: number): AxiosPromise<Recipe> {
    return super.get<Recipe>(`${this.recipesEndpoint}/${id}`);
  }

  public deleteById(id: number): AxiosPromise<void> {
    return super.delete(`${this.recipesEndpoint}/${id}`);
  }

  public find(): AxiosPromise<Recipe[]> {
    return super.get<Recipe[]>(`${this.recipesEndpoint}`);
  }

  public save(): AxiosPromise<Recipe> {
    return super.get<Recipe>(`${this.recipesEndpoint}`);
  }
}
