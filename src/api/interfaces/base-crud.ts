import { AxiosPromise } from 'axios';

export interface BaseCrud<T> {
  findById(id: number): AxiosPromise<T>;

  deleteById(id: number): AxiosPromise<void>;

  find(): AxiosPromise<T[]>;

  create(entity: T): AxiosPromise<T>;

  update(entity: T): AxiosPromise<T>;
}
