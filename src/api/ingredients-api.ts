import BaseApi from './base-api';
import { Ingredient } from './interfaces/ingredient';
import { AxiosPromise } from 'axios';
import { BaseCrud } from './interfaces/base-crud';

export default class IngredientsApi extends BaseApi implements BaseCrud<Ingredient> {
  private ingredientsEndpoint = 'ingredients/';

  public findById(id: number): AxiosPromise<Ingredient> {
    return super.get<Ingredient>(`${this.ingredientsEndpoint}${id}`);
  }

  public deleteById(id: number): AxiosPromise<void> {
    return super.delete(`${this.ingredientsEndpoint}${id}`);
  }

  public find(): AxiosPromise<Ingredient[]> {
    return super.get<Ingredient[]>(`${this.ingredientsEndpoint}`);
  }

  public create(ingredient: Ingredient): AxiosPromise<Ingredient> {
    return super.post<Ingredient>(`${this.ingredientsEndpoint}`, ingredient);
  }

  public update(ingredient: Ingredient): AxiosPromise<Ingredient> {
    return super.put<Ingredient>(`${this.ingredientsEndpoint}`, ingredient);
  }
}
