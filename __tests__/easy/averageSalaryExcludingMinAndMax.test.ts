import { average } from "../../easy/averageSalaryExcludingMinAndMax";

describe('average', () => {
  it('should return the average salary excluding the minimum and maximum salary', () => {
    expect(average([4000,3000,1000,2000])).toBe(2500);
  });
  it('should return the average salary excluding the minimum and maximum salary', () => {
    expect(average([1000,2000,3000])).toBe(2000);
  });

  it('should return the average salary excluding the minimum and maximum salary', () => {
    expect(average([6000,5000,4000,3000,2000,1000])).toBe(3500);
  });

  it('should return the average salary excluding the minimum and maximum salary', () => {
    expect(average([8000, 9000, 2000, 3000, 6000, 1000])).toBe(4750);
  });

  it('should return the average salary excluding the minimum and maximum salary', () => {
    expect(average([8000, 9000, 2000, 3000, 6000, 1000, 5000])).toBe(4800);
  });
});
