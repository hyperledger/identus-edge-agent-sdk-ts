import axios, {
  AxiosStatic,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
  AxiosError,
} from "axios";
import { Api, HttpResponse } from "../../domain/models/Api";
import { HttpError } from "./HttpError";

/**
 * @ignore
 */
export class ApiImpl implements Api {
  client: AxiosStatic = axios;
  async request<T>(
    httpMethod: string,
    url: string,
    urlParameters: Map<string, string>,
    httpHeaders: Map<string, string>,
    body?: any
  ): Promise<HttpResponse<T>> {

    // eslint-disable-next-line no-useless-catch
    try {
      const rawUrl = new URL(`${url}`);
      const rawHeaders: RawAxiosRequestHeaders = {};
      for (const [name, value] of urlParameters) {
        rawUrl.searchParams.append(name, value);
      }

      for (const [name, value] of httpHeaders) {
        rawHeaders[name] = value;
      }

      const requestConfig: AxiosRequestConfig = {
        baseURL: rawUrl.origin.toString(),
        url: rawUrl.pathname,
        method: httpMethod,
        headers: rawHeaders,
        validateStatus: function (status) {
          return status >= 200 && status < 400;
        },
      };

      if (body) {
        requestConfig.data = body;
      }

      const response = await this.client.request<T>(requestConfig);

      if (
        response.status !== 200 &&
        response.status !== 201 &&
        response.status !== 202
      ) {
        throw new HttpError<T>(response);
      }
      return new HttpResponse<T>(response.data, response.status);
    } catch (err) {
      if (err instanceof AxiosError) {
        return new HttpResponse<T>(
          err.response?.data,
          err.response?.status || 500
        );
      } else {
        throw err;
      }
    }
  }
}
