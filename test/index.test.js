const functions = require("../lib/index.js");

describe("Function", () => {
  describe("oneRepMaxEpley", () => {
    it("should return the correct value", () => {
      expect(functions.oneRepMaxEpley(100, 5)).toBe(116.67);
    });
  });

  describe("oneRepMaxBrzycki", () => {
    it("should return the correct value", () => {
      expect(functions.oneRepMaxBrzycki(100, 5)).toBe(112.5);
    });
  });

  describe("oneRepMaxLombardi", () => {
    it("should return the correct value", () => {
      expect(functions.oneRepMaxLombardi(100, 5)).toBe(117.46);
    });
  });

  describe("oneRepMaxMayhew", () => {
    it("should return the correct value", () => {
      expect(functions.oneRepMaxMayhew(100, 5)).toBe(119.01);
    });
  });

  describe("oneRepMaxOConner", () => {
    it("should return the correct value", () => {
      expect(functions.oneRepMaxOConner(100, 5)).toBe(112.5);
    });
  });

  describe("oneRepMaxWathan", () => {
    it("should return the correct value", () => {
      expect(functions.oneRepMaxWathan(100, 5)).toBe(116.58);
    });
  });

  describe("oneRepMaxMcGlothin", () => {
    it("should return the correct value", () => {
      expect(functions.oneRepMaxMcGlothin(100, 5)).toBe(113.71);
    });
  });

  describe("BMR_men", () => {
    it("should return the correct value", () => {
      expect(functions.BMR_men(100, 5, 5)).toBe(1011.25);
    });
  });

  describe("BMR_women", () => {
    it("should return the correct value", () => {
      expect(functions.BMR_women(100, 5, 5)).toBe(845.25);
    });
  });

  describe("IBW_men", () => {
    it("should return the correct value", () => {
      expect(functions.IBW_men(100, 5)).toBe(86.22);
    });
  });

  describe("IBW_women", () => {
    it("should return the correct value", () => {
      expect(functions.IBW_women(100, 5)).toBe(81.72);
    });
  });
});
