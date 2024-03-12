"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accountBalanceRounded_1 = require("../../easy/accountBalanceRounded");
describe('accountBalanceAfterPurchase', () => {
    it('should return the account balance after purchase', () => {
        expect((0, accountBalanceRounded_1.accountBalanceAfterPurchase)(9)).toBe(90);
    });
    it('should return the account balance after purchase', () => {
        expect((0, accountBalanceRounded_1.accountBalanceAfterPurchase)(12)).toBe(90);
    });
    it('should return the account balance after purchase', () => {
        expect((0, accountBalanceRounded_1.accountBalanceAfterPurchase)(15)).toBe(80);
    });
    it('should return the account balance after purchase', () => {
        expect((0, accountBalanceRounded_1.accountBalanceAfterPurchase)(17)).toBe(80);
    });
    it('should return the account balance after purchase', () => {
        expect((0, accountBalanceRounded_1.accountBalanceAfterPurchase)(20)).toBe(80);
    });
});
