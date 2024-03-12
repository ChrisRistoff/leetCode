import { calPoints } from "../../easy/baseballGame";

describe('calPoints', () => {
  it('should return the sum of the points for all valid rounds', () => {
    expect(calPoints(["5","2","C","D","+"])).toBe(30);
  });

  it('should return the sum of the points for all valid rounds', () => {
    expect(calPoints(["5","-2","4","C","D","9","+","+"])).toBe(27);
  });

  it('should return the sum of the points for all valid rounds', () => {
    expect(calPoints(["1", "C"])).toBe(0);
  });
});
