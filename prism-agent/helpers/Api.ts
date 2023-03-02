import { AxiosStatic, AxiosResponse } from "axios";

export class HttpResponse<T> {
  constructor(public body: T, public httpStatus: number) {}
}

export interface Api {
  client: AxiosStatic;

  request<T>(
    httpMethod: string,
    url: string,
    urlParameters: Map<string, string>,
    httpHeaders: Map<string, string>,
    body: any
  ): Promise<HttpResponse<T>>;
}
