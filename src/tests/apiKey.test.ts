import { describe, test, expect } from "vitest";
import { IncomingHttpHeaders, IncomingMessage } from "http";
import { getAPIKey } from "../api/auth";

describe("API KEY retrieval", () => {
  const token = "(lkjr309ajfA(lskfo4ng";
  const headers: IncomingHttpHeaders = { authorization: `ApiKey ${token}` };
  const invalidHeaders: IncomingHttpHeaders = { authorization: "invalid" };
  console.log(headers["authorization"]);

  test("Authorization Header has api key", async () => {
    expect(getAPIKey(headers)).toBe(token);
  });

  test("Invalid Authorization Header", async () => {
    expect(getAPIKey(invalidHeaders)).toBe(null);
  });
});
