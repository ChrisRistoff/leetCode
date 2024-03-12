import { accountBalanceAfterPurchase } from '../../easy/accountBalanceRounded';

describe('accountBalanceAfterPurchase', () => {
  it('should return the account balance after purchase', () => {
    expect(accountBalanceAfterPurchase(100)).toBe(50);
  });
  it('should return the account balance after purchase', () => {
    expect(accountBalanceAfterPurchase(200)).toBe(100);
  });

  it('should return the account balance after purchase', () => {
    expect(accountBalanceAfterPurchase(300)).toBe(150);
  });

  it('should return the account balance after purchase', () => {
    expect(accountBalanceAfterPurchase(400)).toBe(200);
  });
});
