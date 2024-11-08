import { add, subtract, multi, divide } from './math';

describe('Math functions', () => {
    it('add should return the sum of two numbers', () => {
        expect(add(1, 2)).toBe(3);
        expect(add(-1, -1)).toBe(-2);
        expect(add(0, 0)).toBe(0);
    });

    it('subtract should return the difference of two numbers', () => {
        expect(subtract(5, 2)).toBe(3);
        expect(subtract(2, 5)).toBe(-3);
        expect(subtract(0, 0)).toBe(0);
    });

    it('perkalian harus mengembalikan nilai kali', () => {
        expect(multi(2, 3)).toBe(6);
        expect(multi(2, 0)).toBe(0);
        expect(multi(0, -2)).toBe(-0);
    });

    it('pembagian harus mengembalikan nilai bagi', () => {
        expect(divide(6, 3)).toBe(2);
        expect(divide(2, 0)).toBe(Infinity);
        expect(divide(0, 2)).toBe(0);
    });
});