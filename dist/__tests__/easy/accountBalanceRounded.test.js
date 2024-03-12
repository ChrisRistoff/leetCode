"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accountBalanceRounded_1 = require("../../easy/accountBalanceRounded");
describe('accountBalanceAfterPurchase', () => {
    it('should return the account balance after purchase', () => {
        expect((0, accountBalanceRounded_1.accountBalanceAfterPurchase)(100)).toBe(50);
    });
    it('should return the account balance after purchase', () => {
        expect((0, accountBalanceRounded_1.accountBalanceAfterPurchase)(200)).toBe(100);
    });
    it('should return the account balance after purchase', () => {
        expect((0, accountBalanceRounded_1.accountBalanceAfterPurchase)(300)).toBe(150);
    });
    it('should return the account balance after purchase', () => {
        expect((0, accountBalanceRounded_1.accountBalanceAfterPurchase)(400)).toBe(200);
    });
});
