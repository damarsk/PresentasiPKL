export class AdvancedMath {
    public static add(a: number, b: number): number {
        if (isNaN(a) || isNaN(b)) {
            throw new Error('Input must be a valid number');
        }
        return a + b;
    }

    public static subtract(a: number, b: number): number {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('Both arguments must be numbers');
        }
        return a - b;
    }

    public static multi(a: number | number[], b: number | number[]): number | number[] {
        if (Array.isArray(a) && Array.isArray(b)) {
            return a.map((val, index) => val * (b[index] || 0));
        }
        
        if (typeof a === 'number' && typeof b === 'number') {
            return a * b;
        }
        
        throw new Error('Invalid input types');
    }

    public static divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    }

    public static power(base: number, exponent: number = 2): number {
        return Math.pow(base, exponent);
    }
}