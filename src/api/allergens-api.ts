import BaseApi from './base-api';
import { Allergen } from './interfaces/allergen';
import { AxiosPromise } from 'axios';
import { BaseCrud } from './interfaces/base-crud';

export default class AllergensApi extends BaseApi implements BaseCrud<Allergen> {
  private allergensEndpoint = 'allergens/';

  public findById(id: number): AxiosPromise<Allergen> {
    return super.get<Allergen>(`${this.allergensEndpoint}${id}`);
  }

  public deleteById(id: number): AxiosPromise<void> {
    return super.delete(`${this.allergensEndpoint}${id}`);
  }

  public find(): AxiosPromise<Allergen[]> {
    return super.get<Allergen[]>(`${this.allergensEndpoint}`);
  }

  public create(allergen: Allergen): AxiosPromise<Allergen> {
    return super.post<Allergen>(`${this.allergensEndpoint}`, allergen);
  }

  public update(allergen: Allergen): AxiosPromise<Allergen> {
    return super.put<Allergen>(`${this.allergensEndpoint}`, allergen);
  }
}
