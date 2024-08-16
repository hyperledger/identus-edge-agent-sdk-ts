import { Api, HttpMethod, ApiResponse, ApiError } from "../../domain/models/Api";

/**
 * Implement API using built in fetch
 */
export class FetchApi implements Api {
  async request<T>(
    method: HttpMethod,
    urlStr: string,
    urlParameters: Map<string, string> = new Map(),
    httpHeaders: Map<string, string> = new Map(),
    body?: string | Record<string, any>
  ): Promise<ApiResponse<T>> {
    const url = new URL(urlStr);
    const headers = new Headers();

    for (const [name, value] of urlParameters) {
      url.searchParams.append(name, value);
    }

    for (const [name, value] of httpHeaders) {
      headers.append(name, value);
    }

    const opts: RequestInit = {
      method,
      headers,
    };

    if (this.includeBody(method)) {
      opts.body = typeof body === "string" ? body : JSON.stringify(body);
    }

    const response = await fetch(url, opts);
    const data = await this.parseResponse(response);

    if (response.ok) {
      return new ApiResponse<T>(
        data,
        response.status,
        response.statusText,
        response.headers
      );
    }

    throw new ApiError(response.status, response.statusText, data);
  }

  /**
   * should `body` be included in the request
   * 
   * @param method 
   * @returns {boolean}
   */
  private includeBody(method: HttpMethod): boolean {
    return method === "GET" ? false : true;
  }

  /**
   * attempt to convert response to JSON
   * or return as string
   * 
   * @param response 
   * @returns {string | {}}
   */
  private async parseResponse(response: Response) {
    const data = await response.text();

    try {
      return JSON.parse(data);
    }
    catch {
      return data;
    }
  }
}
