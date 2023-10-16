const DecisionTree = require('../../../algorithms/ml-statistical/decisionTrees');

// Test the DecisionTree class
describe('DecisionTree', () => {
    test('should insert and search values correctly', () => {
        const decisionTree = new DecisionTree();

        // Insert values into the decision tree
        decisionTree.insert(10);
        decisionTree.insert(5);
        decisionTree.insert(15);
        decisionTree.insert(2);
        decisionTree.insert(7);

        // Search for values in the decision tree
        expect(decisionTree.search(7)).toBe(true);
        expect(decisionTree.search(20)).toBe(false);
    });
});
