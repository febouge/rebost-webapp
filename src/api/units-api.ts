import BaseApi from './base-api';
import { Unit } from './interfaces/unit';
import { AxiosPromise } from 'axios';
import { BaseCrud } from './interfaces/base-crud';

export default class UnitsApi extends BaseApi implements BaseCrud<Unit> {
  private unitsEndpoint = 'units/';

  public findById(id: number): AxiosPromise<Unit> {
    return super.get<Unit>(`${this.unitsEndpoint}${id}`);
  }

  public deleteById(id: number): AxiosPromise<void> {
    return super.delete(`${this.unitsEndpoint}${id}`);
  }

  public find(): AxiosPromise<Unit[]> {
    return super.get<Unit[]>(`${this.unitsEndpoint}`);
  }

  public create(unit: Unit): AxiosPromise<Unit> {
    return super.post<Unit>(`${this.unitsEndpoint}`, unit);
  }

  public update(unit: Unit): AxiosPromise<Unit> {
    return super.put<Unit>(`${this.unitsEndpoint}`, unit);
  }
}
