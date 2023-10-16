const PrimalityTesting = require('../../../algorithms/numerical/primalityTesting');

describe('PrimalityTesting', () => {
    it('should factorize a number correctly', () => {
        const number = 56;
        const [s, d] = PrimalityTesting.factorizeNumber(number);
        expect(s).toBe(3);
        expect(d).toBe(7);
    });

    it('should get a random witness within a range', () => {
        const min = 2;
        const max = 10;
        const witness = PrimalityTesting.getRandomWitness(min, max);
        expect(witness).toBeGreaterThanOrEqual(min);
        expect(witness).toBeLessThanOrEqual(max);
    });

    it('should perform modular exponentiation correctly', () => {
        const base = 3;
        const exponent = 5;
        const modulus = 7;
        const result = PrimalityTesting.modularExponentiation(base, exponent, modulus);
        expect(result).toBe(5);
    });

    it('should correctly identify prime numbers', () => {
        expect(PrimalityTesting.isPrime(2)).toBe(true);
        expect(PrimalityTesting.isPrime(3)).toBe(true);
        expect(PrimalityTesting.isPrime(7)).toBe(true);
        expect(PrimalityTesting.isPrime(11)).toBe(true);
        expect(PrimalityTesting.isPrime(17)).toBe(true);
        expect(PrimalityTesting.isPrime(19)).toBe(true);
        expect(PrimalityTesting.isPrime(23)).toBe(true);
        expect(PrimalityTesting.isPrime(29)).toBe(true);
    });

    it('should correctly identify composite numbers', () => {
        expect(PrimalityTesting.isPrime(1)).toBe(false);
        expect(PrimalityTesting.isPrime(4)).toBe(false);
        expect(PrimalityTesting.isPrime(9)).toBe(false);
        expect(PrimalityTesting.isPrime(15)).toBe(false);
        expect(PrimalityTesting.isPrime(21)).toBe(false);
        expect(PrimalityTesting.isPrime(25)).toBe(false);
        expect(PrimalityTesting.isPrime(49)).toBe(false);
        expect(PrimalityTesting.isPrime(77)).toBe(false);
    });
});
