import { describe, expect, test, beforeEach, beforeAll, afterAll } from 'vitest';
import { ApiImpl } from "../../src";
import { ApiError } from "../../src/domain";
import Server from "./server";

describe("Api test", () => {
  const url = 'http://127.0.0.1:3333';
  // loopback reflects request data in response body
  const urlLB = `${url}/loopback`;
  // json returns request body as response body
  const urlJson = `${url}/json`;
  let stopServer;
  let api: ApiImpl;

  beforeAll(async () => {
    stopServer = await Server.makeServer();
  });

  afterAll(() => stopServer());

  beforeEach(() => {
    api = new ApiImpl();
  });

  describe("GET", () => {
    test("empty response body", async () => {
      const response = await api.request("GET", url);

      expect(response.status).toBe(200);
      expect(response.status).toBe(response.httpStatus);
      expect(response.statusText).toBe("OK");
      expect(response.body).toBe("");
    });

    test("json response body", async () => {
      const response = await api.request("GET", urlLB);

      expect(response.status).toBe(200);
      expect(response.status).toBe(response.httpStatus);
      expect(response.statusText).toBe("OK");
      expect(typeof response.body).toBe("object");
    });

    test("request sent correctly", async () => {
      const response = await api.request("GET", urlLB);
      const loopback = response.body as any;

      expect(typeof loopback).toBe("object");
      expect(loopback.method).toBe("GET");
      expect(loopback.url).toBe("/loopback");
      // expect(loopback.headers).toBe("");
      expect(loopback.query).toEqual({});
      expect(loopback.body).toBe("");
    });

    test("queryParameters sent correctly", async () => {
      const params = new Map([["qwerty", "pop"]]);
      const response = await api.request("GET", urlLB, params);
      const loopback = response.body as any;

      expect(loopback.method).toBe("GET");
      expect(loopback.url).toBe("/loopback?qwerty=pop");
      // expect(loopback.headers).toBe("");
      expect(loopback.query).toEqual(Object.fromEntries(params));
      expect(loopback.body).toBe("");
    });

    test("headers sent correctly", async () => {
      const name = "auth";
      const value = "123";
      const headers = new Map([[name, value]]);
      const response = await api.request("GET", urlLB, undefined, headers);
      const loopback = response.body as any;

      expect(loopback.method).toBe("GET");
      expect(loopback.url).toBe("/loopback");
      expect(loopback.headers).toHaveProperty(name, value);
      expect(loopback.query).toEqual({});
      expect(loopback.body).toBe("");
    });

    test("request body should not be sent", async () => {
      const response = await api.request("GET", urlLB, undefined, undefined, { payload: 1 });
      const loopback = response.body as any;

      expect(response.status).toBe(200);
      expect(loopback.body).toBe("");
    });
  });

  describe("POST", () => {
    test("body sent correctly", async () => {
      const body = { payload: 369 };
      const response = await api.request("POST", urlLB, undefined, undefined, body);
      const loopback = response.body as any;

      expect(response.status).toBe(200);
      expect(loopback.method).toBe("POST");
      expect(loopback.url).toBe("/loopback");
      expect(loopback.query).toEqual({});
      expect(loopback.body).toEqual(JSON.stringify(body));
    });
  });

  describe("PUT", () => {
    test("sent correctly", async () => {
      const params = new Map([["lorum", "ipsum"]]);
      const name = "auth";
      const value = "123";
      const headers = new Map([[name, value]]);
      const body = { payload: 9 };
      const response = await api.request("PUT", urlLB, params, headers, body);
      const loopback = response.body as any;

      expect(response.status).toBe(200);
      expect(loopback.method).toBe("PUT");
      expect(loopback.url).toBe("/loopback?lorum=ipsum");
      expect(loopback.query).toEqual(Object.fromEntries(params));
      expect(loopback.headers).toHaveProperty(name, value);
      expect(loopback.body).toEqual(JSON.stringify(body));
    });
  });

  describe("DELETE", () => {
    test("sent correctly", async () => {
      const response = await api.request("DELETE", urlLB);
      const loopback = response.body as any;

      expect(response.status).toBe(200);
      expect(loopback.method).toBe("DELETE");
      expect(loopback.url).toBe("/loopback");
      expect(loopback.query).toEqual({});
      expect(loopback.body).toEqual("");
    });
  });

  describe("Errors", () => {
    test("400", async () => {
      try {
        const params = new Map([["status", "400"]]);
        await api.request("GET", urlLB, params);
        throw new Error("should not be here");
      }
      catch (e) {
        const err = e as ApiError;
        expect(err).toBeInstanceOf(ApiError);
        expect(err.status).toBe(400);
      }
    });
  });
});
