import { AdvancedMath } from '../src/math';

describe('Math functions', () => {
    const math = AdvancedMath;

    describe('add', () => {
        it('add should return the sum of two numbers', () => {
            expect(math.add(1, 2)).toBe(3);
            expect(math.add(-1, -1)).toBe(-2);
            expect(math.add(0, 0)).toBe(0);
        });
    
        it('add should throw an error if inputs are not valid numbers', () => {
            expect(() => math.add(NaN, NaN)).toThrow('Input must be a valid number');
        });
    });

    describe('subract', () => {
        it('subtract should return the difference of two numbers', () => {
            expect(math.subtract(5, 2)).toBe(3);
            expect(math.subtract(2, 5)).toBe(-3);
            expect(math.subtract(0, 0)).toBe(0);
        });

        it('subtract should throw an error if inputs are not numbers', () => {
            expect(() => math.subtract(1, '2' as any)).toThrow('Both arguments must be numbers');
        });
    });

    describe('multi', () => {
        it('multi should return the product of two numbers', () => {
            expect(math.multi(2, 3)).toBe(6);
            expect(math.multi(2, 0)).toBe(0);
            expect(math.multi(-2, 3)).toBe(-6);
        });

        it('multi should return the product of two arrays', () => {
            expect(math.multi([1, 2, 3], [4, 5, 6])).toEqual([4, 10, 18]);
            expect(math.multi([1, 2], [3, 4, 5])).toEqual([3, 8]);
            expect(math.multi([1, 2, 3], [0, 0, 0])).toEqual([0, 0, 0]);
        });

        it('multi should throw an error if inputs are not valid', () => {
            expect(() => math.multi('2' as any, 3)).toThrow('Invalid input types');
            expect(() => math.multi(2, [3] as any)).toThrow('Invalid input types');
            expect(() => math.multi([2] as any, '3' as any)).toThrow('Invalid input types');
        });
    });

    describe('divide', () => {
        it('divide should return the quotient of two numbers', () => {
            expect(math.divide(6, 3)).toBe(2);
            expect(() => math.divide(2, 0)).toThrow('Cannot divide by zero');
            expect(math.divide(0, 2)).toBe(0);
        });
    });

    describe('power (pangkat)', () => {
        it('power should return the base raised to the exponent', () => {
            expect(math.power(2, 3)).toBe(8);
            expect(math.power(2)).toBe(4);
            expect(math.power(5, 0)).toBe(1);
        });
    });
});