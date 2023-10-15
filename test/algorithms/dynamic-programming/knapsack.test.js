const Knapsack = require('../../../algorithms/dynamic-programming/knapsack');

describe('Knapsack (OOP)', () => {
    const knapsack = new Knapsack();

    it('should find the maximum value for the knapsack problem', () => {
        // Test case 1
        const weights1 = [2, 2, 3];
        const values1 = [2, 3, 5];
        const capacity1 = 4;
        expect(knapsack.findMaxValue(weights1, values1, capacity1)).toBe(5);

        // Test case 2
        const weights2 = [1, 3, 4, 5];
        const values2 = [1, 4, 5, 7];
        const capacity2 = 7;
        expect(knapsack.findMaxValue(weights2, values2, capacity2)).toBe(9);

        // Test case 3
        const weights3 = [1, 2, 4, 2];
        const values3 = [5, 3, 5, 3];
        const capacity3 = 5;
        expect(knapsack.findMaxValue(weights3, values3, capacity3)).toBe(11);

        // Test case 4 (Edge case: Empty knapsack)
        const weights4 = [];
        const values4 = [];
        const capacity4 = 10;
        expect(knapsack.findMaxValue(weights4, values4, capacity4)).toBe(0);

        // Test case 5 (Edge case: No items to choose from)
        const weights5 = [2, 3, 4];
        const values5 = [3, 5, 6];
        const capacity5 = 0;
        expect(knapsack.findMaxValue(weights5, values5, capacity5)).toBe(0);
    });
});
