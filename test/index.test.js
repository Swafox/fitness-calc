const functions = require("../lib/index.js");

describe("Function", () => {
  describe("oneRepMax", () => {
    it("should return the correct value", () => {
      expect(functions.oneRepMaxEpley(100, 5)).toBe(116.67);
      expect(functions.oneRepMaxBrzycki(100, 5)).toBe(112.5);
      expect(functions.oneRepMaxLombardi(100, 5)).toBe(117.46);
      expect(functions.oneRepMaxMayhew(100, 5)).toBe(119.01);
      expect(functions.oneRepMaxOConner(100, 5)).toBe(112.5);
      expect(functions.oneRepMaxWathan(100, 5)).toBe(116.58);
      expect(functions.oneRepMaxMcGlothin(100, 5)).toBe(113.71);
    });
  });

  describe("BMR", () => {
    it("should return the correct value", () => {
      expect(functions.BMR_men(100, 5, 5)).toBe(1011.25);
      expect(functions.BMR_women(100, 5, 5)).toBe(845.25);
    });
  });

  describe("IBW", () => {
    it("should return the correct value", () => {
      expect(functions.IBW_men(100, 5)).toBe(86.22);
      expect(functions.IBW_women(100, 5)).toBe(81.72);
    });
  });
});
