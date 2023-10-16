const UtilityFunctions = require('../../utils/utilityFunctions');

describe('UtilityFunctions', () => {
    describe('sum', () => {
        it('should return the sum of an array of numbers', () => {
            const numbers = [1, 2, 3, 4, 5];
            const result = UtilityFunctions.sum(numbers);
            expect(result).toBe(15);
        });

        it('should handle an empty array', () => {
            const numbers = [];
            const result = UtilityFunctions.sum(numbers);
            expect(result).toBe(0);
        });
    });

    describe('average', () => {
        it('should return the average of an array of numbers', () => {
            const numbers = [2, 4, 6, 8, 10];
            const result = UtilityFunctions.average(numbers);
            expect(result).toBe(6);
        });

        it('should handle an empty array', () => {
            const numbers = [];
            const result = UtilityFunctions.average(numbers);
            expect(result).toBe(0);
        });
    });
});
