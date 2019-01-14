import BaseApi from './base-api';
import { Tag } from './interfaces/tag';
import { AxiosPromise } from 'axios';

export default class TagsApi extends BaseApi {

  private tagsEndpoint = 'tags/';

  public findById(id: number): AxiosPromise<Tag> {
    return super.get<Tag>(`${this.tagsEndpoint}/${id}`);
  }

  public deleteById(id: number): AxiosPromise<void> {
    return super.delete(`${this.tagsEndpoint}/${id}`);
  }

  public find(): AxiosPromise<Tag[]> {
    return super.get<Tag[]>(`${this.tagsEndpoint}`);
  }

  public save(): AxiosPromise<Tag> {
    return super.get<Tag>(`${this.tagsEndpoint}`);
  }
}
