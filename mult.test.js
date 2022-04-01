import mult from "./mult";

describe("Test multiplication", () => {
  describe("positive tests", () => {
    const cases = [
      [1, 2, 2],
      [2, 2, 4],
      [3, 2, 6],
      [4, 3, 12],
      [4, 4, 16],
    ];
    test.each(cases)(
      "mult(%i, %i)",
      (a, b, expected) => {
        expect(mult(a, b)).toBe(expected);
      },
    );
  });
  describe("negative tests", () => {
    const cases = [
      [1, 2, 1],
      [2, 2, 3],
      [3, 2, 7],
      [4, 3, 13],
      [4, 4, 17],
    ];
    test.each(cases)(
      "mult(%i, %i)",
      (a, b, expected) => {
        expect(mult(a, b)).not.toBe(expected);
      },
    );
  });
});
