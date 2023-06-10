import { describe, expect, it } from "vitest";
import wrapping from ".";

describe("wrapping", () => {
  it("should wrap gifts correctly", () => {
    const gifts = ["cat", "game", "socks"];
    const expected = [
      "*****\n*cat*\n*****",
      "******\n*game*\n******",
      "*******\n*socks*\n*******",
    ];
    const wrapped = wrapping(gifts);
    expect(wrapped).toEqual(expected);
  });
});
