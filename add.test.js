import add from "./add";

describe("Test Addition!", () => {
  describe("positve tests", () => {
    const cases = [
      [1, 2, 3],
      [2, 3, 5],
      [3, 4, 7],
      [4, 5, 9],
      [5, 6, 11],
    ];

    test.each(cases)(
      "add(%i, %i)",
      (a, b, expected) => {
        expect(add(a, b)).toBe(expected);
      },
    );
  });
  describe("negative tests", () => {
    const cases = [
      [1, 2, 4],
      [2, 3, 9],
      [3, 4, 6],
      [4, 5, 7],
      [5, 6, 8],
    ];

    test.each(cases)(
      "add(%i, %i)",
      (a, b, expected) => {
        expect(add(a, b)).not.toBe(expected);
      },
    );
  });
});
