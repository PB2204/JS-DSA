const GCD = require('../../../algorithms/numerical/gcd');

describe('GCD', () => {
    it('should find the GCD of two numbers', () => {
        expect(GCD.findGCD(12, 18)).toBe(6);
        expect(GCD.findGCD(48, 18)).toBe(6);
        expect(GCD.findGCD(17, 5)).toBe(1);
        expect(GCD.findGCD(0, 7)).toBe(7);
        expect(GCD.findGCD(48, 0)).toBe(48);
    });

    it('should find the LCM of two numbers', () => {
        expect(GCD.findLCM(12, 18)).toBe(36);
        expect(GCD.findLCM(7, 5)).toBe(35);
        expect(GCD.findLCM(10, 25)).toBe(50);
    });

    it('should find the GCD of an array of numbers', () => {
        expect(GCD.findGCDOfArray([12, 18, 24, 6])).toBe(6);
        expect(GCD.findGCDOfArray([30, 42, 56, 14])).toBe(2);
        expect(GCD.findGCDOfArray([17, 5])).toBe(1);
        expect(() => GCD.findGCDOfArray([11])).toThrowError('At least two numbers are required');
    });
});
