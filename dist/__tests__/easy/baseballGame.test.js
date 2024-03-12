"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseballGame_1 = require("../../easy/baseballGame");
describe('calPoints', () => {
    it('should return the sum of the points for all valid rounds', () => {
        expect((0, baseballGame_1.calPoints)(["5", "2", "C", "D", "+"])).toBe(30);
    });
    it('should return the sum of the points for all valid rounds', () => {
        expect((0, baseballGame_1.calPoints)(["5", "-2", "4", "C", "D", "9", "+", "+"])).toBe(27);
    });
    it('should return the sum of the points for all valid rounds', () => {
        expect((0, baseballGame_1.calPoints)(["1", "C"])).toBe(0);
    });
});
