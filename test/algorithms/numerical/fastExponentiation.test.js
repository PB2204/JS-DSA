const FastExponentiation = require('../../../algorithms/numerical/fastExponentiation');

describe('FastExponentiation', () => {
    it('should correctly calculate 2^5', () => {
        const base = 2;
        const exponent = 5;
        const result = FastExponentiation.power(base, exponent);
        expect(result).toBe(32);
    });

    it('should handle base case with exponent 0', () => {
        const base = 5;
        const exponent = 0;
        const result = FastExponentiation.power(base, exponent);
        expect(result).toBe(1);
    });

    it('should calculate 3^6', () => {
        const base = 3;
        const exponent = 6;
        const result = FastExponentiation.power(base, exponent);
        expect(result).toBe(729);
    });

    it('should calculate 7^3', () => {
        const base = 7;
        const exponent = 3;
        const result = FastExponentiation.power(base, exponent);
        expect(result).toBe(343);
    });

    it('should handle large exponent (10^3)', () => {
        const base = 10;
        const exponent = 1000;
        const result = FastExponentiation.power(base, exponent);
        expect(result.toString()).toBe("Infinity");
    });
});
