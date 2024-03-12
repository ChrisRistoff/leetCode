"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accountBalanceRounded_1 = require("../../easy/accountBalanceRounded");
test('accountBalanceAfterPurchase', () => {
    const result = (0, accountBalanceRounded_1.accountBalanceAfterPurchase)(100);
    expect(result).toBe(50);
});
