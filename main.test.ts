import { getBiggerValue } from "./main";

describe("Test hard disk analysis", () => {
  test("Case 1", () => {
    const space = [2, 5, 4, 6, 8];
    const segmentsNumber = 3;
    const result = 4;

    expect(getBiggerValue({ space, segmentsNumber })).toBe(result);
  });

  test("Case 2", () => {
    const space = [1, 2, 3, 1, 2];
    const segmentsNumber = 1;
    const result = 3;

    expect(getBiggerValue({ space, segmentsNumber })).toBe(result);
  });

  test("Case 3", () => {
    const space = [8, 2, 4];
    const segmentsNumber = 2;
    const result = 2;

    expect(getBiggerValue({ space, segmentsNumber })).toBe(result);
  });
});
