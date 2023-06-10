import { describe, expect, it } from "vitest";
import { countHours, countHoursReduce } from ".";

describe("countHours", () => {
  it("should return the amount of overtime hours from a given year", () => {
    const year = 2022;
    const holidays = ["01/06", "04/01", "12/25"];
    const expected = 4;
    expect(countHours(year, holidays)).toEqual(expected);
  });
});

describe("countHoursReduce", () => {
  it("should return the amount of overtime hours from a given year", () => {
    const year = 2022;
    const holidays = ["01/06", "04/01", "12/25"];
    const expected = 4;
    expect(countHoursReduce(year, holidays)).toEqual(expected);
  });
});
