import axios from 'axios';
import { AxiosInstance, AxiosRequestConfig, AxiosPromise } from 'axios';

export default class BaseApi {

  private axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:5000/',
    timeout: 10000,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });

  public get<T = any>(url: string): AxiosPromise<T> {
    return this.axiosInstance.get(url);
  }

  public delete(url: string): AxiosPromise {
    return this.axiosInstance.delete(url);
  }

  public head(url: string): AxiosPromise {
    return this.axiosInstance.head(url);
  }

  public post<T = any>(url: string, data?: any): AxiosPromise<T> {
    return this.axiosInstance.post(url, data);
  }

  public put<T = any>(url: string, data?: any): AxiosPromise<T> {
    return this.axiosInstance.put(url, data);
  }

  public patch<T = any>(url: string, data?: any): AxiosPromise<T> {
    return this.axiosInstance.patch(url, data);
  }
}
