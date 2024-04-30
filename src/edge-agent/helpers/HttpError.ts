import { AxiosResponse } from "axios";

export class HttpError<T> extends Error {
  constructor(httpResponse: AxiosResponse<T>) {
    super(
      `HTTP Error ${httpResponse.status}: ${JSON.stringify(httpResponse.data)}`
    );
  }
}
