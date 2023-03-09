import axios, {
  AxiosStatic,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
} from "axios";
import { ApiError } from "../../domain/models/Errors";
import { Api, HttpResponse } from "./Api";
import { HttpError } from "./HttpError";
import { URL } from "url";

export class ApiImpl implements Api {
  client: AxiosStatic = axios;
  async request<T>(
    httpMethod: string,
    url: string,
    urlParameters: Map<string, string>,
    httpHeaders: Map<string, string>,
    body?: any
  ): Promise<HttpResponse<T>> {
    if (url.slice(0, 1) !== "/") {
      throw new ApiError.InvalidRequestPath(url);
    }
    const rawUrl = new URL(`${url}`);
    const rawHeaders: RawAxiosRequestHeaders = {};

    for (const [name, value] of urlParameters) {
      rawUrl.searchParams.append(name, value);
    }

    for (const [name, value] of httpHeaders) {
      rawHeaders[name] = value;
    }

    const requestConfig: AxiosRequestConfig = {
      url: rawUrl.toString(),
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