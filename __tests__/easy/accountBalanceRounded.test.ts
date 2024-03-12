import { accountBalanceAfterPurchase } from '../../easy/accountBalanceRounded';

describe('accountBalanceAfterPurchase', () => {
  it('should return the account balance after purchase', () => {
    expect(accountBalanceAfterPurchase(9)).toBe(90);
  });
  it('should return the account balance after purchase', () => {
    expect(accountBalanceAfterPurchase(12)).toBe(90);
  });

  it('should return the account balance after purchase', () => {
    expect(accountBalanceAfterPurchase(15)).toBe(80);
  });

  it('should return the account balance after purchase', () => {
    expect(accountBalanceAfterPurchase(17)).toBe(80);
  });

  it('should return the account balance after purchase', () => {
    expect(accountBalanceAfterPurchase(20)).toBe(80);
  });
});
