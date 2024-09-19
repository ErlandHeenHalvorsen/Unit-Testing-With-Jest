import { add, subtract, multiply } from "../src/math.js";

describe("Simple arithemtic", () => {
  describe("addition", () => {
    test("expect 2 + 3 = 5", () => {
      expect(add(2, 3)).toEqual(5);
    });
    test("expect 12 + 14 = 26", () => {
      expect(add(12, 14)).toEqual(26);
    });
  });

  describe("substraction", () => {
    test("expect 3 - 2 = 1", () => {
      expect(subtract(3, 2)).toEqual(1);
    });
  });

  describe("multiplication", () => {
    test("expect 2 * 2 = 4", () => {
      expect(multiply(2, 2)).toEqual(4);
    });
  });
});
