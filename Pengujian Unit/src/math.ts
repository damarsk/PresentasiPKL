export class AdvancedMath {
    public static add(a: number, b: number): number {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('Both arguments must be numbers');
        }
        return a + b;
    }

    public static subtract(a: number, b: number): number {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('Both arguments must be numbers');
        }
        return a - b;
    }

    public static multi(a: number, b: number): number {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('Both arguments must be numbers');
        }
        return a * b;
    }

    public static divide(a: number, b: number): number {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('Both arguments must be numbers');
        }
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    }

    public static power(base: number, exponent: number = 2): number {
        if (typeof base !== 'number' || typeof exponent !== 'number') {
            throw new TypeError('Both arguments must be numbers');
        }
        return Math.pow(base, exponent);
    }
}