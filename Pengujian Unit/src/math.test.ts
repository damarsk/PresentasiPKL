// src/math.test.ts
import { add, subtract } from './math';

describe('Math functions', () => {
    test('add should return the sum of two numbers', () => {
        expect(add(1, 2)).toBe(3);
        expect(add(-1, -1)).toBe(-2);
        expect(add(0, 0)).toBe(0);
    });

    test('subtract should return the difference of two numbers', () => {
        expect(subtract(5, 2)).toBe(3);
        expect(subtract(2, 5)).toBe(-3);
        expect(subtract(0, 0)).toBe(0);
    });
});