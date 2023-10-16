const MatrixChainMultiplication = require('../../../algorithms/dynamic-programming/matrixChainMultiplication');

describe('MatrixChainMultiplication (OOP)', () => {
    it('should find the minimum number of multiplications for matrix chain', () => {
        const matrixChain = new MatrixChainMultiplication();

        // Test case 1
        const dimensions1 = [10, 30, 5, 60];
        const result1 = matrixChain.findMinMultiplications(dimensions1);
        expect(result1).toEqual(4500);

        // Test case 2
        const dimensions2 = [5, 10, 3, 12, 5, 50, 6];
        const result2 = matrixChain.findMinMultiplications(dimensions2);
        expect(result2).toEqual(2010);

        // Test case 3
        const dimensions3 = [30, 35, 15, 5, 10, 20, 25];
        const result3 = matrixChain.findMinMultiplications(dimensions3);
        expect(result3).toEqual(15125);
    });
});
