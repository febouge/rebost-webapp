import axios from 'axios';
import { AxiosInstance, AxiosPromise } from 'axios';

export default class BaseApi {

  private axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:5000/',
    timeout: 10000,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });

  protected get<T = any>(url: string): AxiosPromise<T> {
    return this.axiosInstance.get(url);
  }

  protected delete(url: string): AxiosPromise {
    return this.axiosInstance.delete(url);
  }

  protected head(url: string): AxiosPromise {
    return this.axiosInstance.head(url);
  }

  protected post<T = any>(url: string, data?: any): AxiosPromise<T> {
    return this.axiosInstance.post(url, data);
  }

  protected put<T = any>(url: string, data?: any): AxiosPromise<T> {
    return this.axiosInstance.put(url, data);
  }

  protected patch<T = any>(url: string, data?: any): AxiosPromise<T> {
    return this.axiosInstance.patch(url, data);
  }
}
