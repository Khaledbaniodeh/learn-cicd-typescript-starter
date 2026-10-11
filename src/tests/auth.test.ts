import { describe, expect, test } from "vitest";

import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns the API key from a valid authorization header", () => {
    const headers = {
      authorization: "ApiKey test-api-key",
    };

    expect(getAPIKey(headers)).toBe("wrong-api-key");
  });

  test("returns null when the authorization header is missing", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("returns null when the authorization scheme is incorrect", () => {
    const headers = {
      authorization: "Bearer test-api-key",
    };

    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when the API key is missing", () => {
    const headers = {
      authorization: "ApiKey",
    };

    expect(getAPIKey(headers)).toBeNull();
  });
});
