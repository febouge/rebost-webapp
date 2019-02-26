import BaseApi from './base-api';
import { Tag } from './interfaces/tag';
import { AxiosPromise } from 'axios';
import { BaseCrud } from './interfaces/base-crud';

export default class TagsApi extends BaseApi implements BaseCrud<Tag> {

  private tagsEndpoint = 'tags/';

  public findById(id: number): AxiosPromise<Tag> {
    return super.get<Tag>(`${this.tagsEndpoint}${id}`);
  }

  public deleteById(id: number): AxiosPromise<void> {
    return super.delete(`${this.tagsEndpoint}${id}`);
  }

  public find(): AxiosPromise<Tag[]> {
    return super.get<Tag[]>(`${this.tagsEndpoint}`);
  }

  public create(tag: Tag): AxiosPromise<Tag> {
    return super.post<Tag>(`${this.tagsEndpoint}`, tag);
  }

  public update(tag: Tag): AxiosPromise<Tag> {
    return super.put<Tag>(`${this.tagsEndpoint}`, tag);
  }
}
