import { AxiosStatic, AxiosResponse } from "axios";

export interface Api {
  client: AxiosStatic;

  request<T>(
    httpMethod: string,
    url: string,
    urlParameters: Map<string, string>,
    httpHeaders: Map<string, string>,
    body: any
  ): Promise<T>;
}
