const RandomizedPrimalityTesting = require('../../../algorithms/randomized/randomizedPrimalityTesting');

describe('RandomizedPrimalityTesting', () => {
    describe('isPrime', () => {
        it('should correctly identify prime numbers', () => {
            const rpt = new RandomizedPrimalityTesting();
            const primeNumbers = [17n, 19n, 23n, 29n, 31n];
            primeNumbers.forEach((n) => {
                expect(rpt.isPrime(n, 5)).toBe(true);
            });
        });

        it('should correctly identify composite numbers', () => {
            const rpt = new RandomizedPrimalityTesting();
            const compositeNumbers = [4n, 9n, 15n, 25n, 27n];
            compositeNumbers.forEach((n) => {
                expect(rpt.isPrime(n, 5)).toBe(false);
            });
        });
    });
});
