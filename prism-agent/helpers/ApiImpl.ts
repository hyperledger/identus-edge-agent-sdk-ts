import axios, {
  AxiosStatic,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
} from "axios";
import { ApiError } from "../../domain/models/Errors";
import { Api, HttpResponse } from "../../domain/models/Api";
import { HttpError } from "./HttpError";

export class ApiImpl implements Api {
  client: AxiosStatic = axios;
  async request<T>(
    httpMethod: string,
    url: string,
    urlParameters: Map<string, string>,
    httpHeaders: Map<string, string>,
    body?: any
  ): Promise<HttpResponse<T>> {
    const rawUrl = new URL(`${url}`);
    const rawHeaders: RawAxiosRequestHeaders = {};

    for (const [name, value] of urlParameters) {
      rawUrl.searchParams.append(name, value);
    }

    for (const [name, value] of httpHeaders) {
      rawHeaders[name] = value;
    }

    const requestConfig: AxiosRequestConfig = {
      baseURL: rawUrl.toString(),
      url: rawUrl.pathname,
      method: httpMethod,
      headers: rawHeaders,
    };

    if (body) {
      requestConfig.data = body;
    }

    const response = await this.client.request<T>(requestConfig);

    if (response.status !== 200 && response.status !== 201) {
      throw new HttpError<T>(response);
    }

    return new HttpResponse<T>(response.data, response.status);
  }
}
