export type HttpMethod =
  | 'DELETE'
  | 'GET'
  | 'POST'
  | 'PUT';
// | 'HEAD'
// | 'OPTIONS'
// | 'PATCH'

/**
 * Api Dependency
 */
export interface Api {
  /**
   * make a request
   * return an ApiResponse on any 2xx status
   * throw ApiError otherwise
   * 
   * @param httpMethod
   * @param url 
   * @param urlParameters 
   * @param httpHeaders 
   * @param body 
   */
  request<T>(
    httpMethod: HttpMethod,
    url: string,
    urlParameters?: Map<string, string>,
    httpHeaders?: Map<string, string>,
    body?: string | Record<string, any>
  ): Promise<ApiResponse<T>>;
}

export class ApiResponse<T = unknown> {
  public readonly headers: Headers;

  constructor(
    public readonly body: T,
    public readonly status: number,
    public readonly statusText: string = "OK",
    headersInit: Record<string, any> = {},
  ) {
    this.headers = new Headers(headersInit);
  }

  get httpStatus() {
    return this.status;
  }
}

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly statusText: string,
    public readonly body: any
  ) {
    super(`HTTP Error ${status}: ${JSON.stringify(body)}`);
  }
}
