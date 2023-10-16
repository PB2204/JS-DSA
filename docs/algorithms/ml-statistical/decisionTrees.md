# Decision Tree Algorithm

A decision tree is a tree-like model of decisions and their consequences. It is a supervised machine learning algorithm used for both classification and regression tasks. In a decision tree, each internal node represents a feature or attribute, each branch represents a decision rule, and each leaf node represents an outcome.

## Usage

To use the Decision Tree algorithm in your JavaScript project, follow these steps:

1. Import the `DecisionTree` class and create an instance of the decision tree.

```javascript
const DecisionTree = require('adv-dsa').DecisionTree;

const decisionTree = new DecisionTree();
```

2. Use the `insert` method to add values or data points to the decision tree. This step builds the decision tree.

```javascript
decisionTree.insert(10);
decisionTree.insert(5);
decisionTree.insert(15);
decisionTree.insert(2);
decisionTree.insert(7);
```

3. Use the `search` method to search for a specific value in the decision tree.

```javascript
const result = decisionTree.search(7);
console.log('Value 7 found:', result); // true

const result2 = decisionTree.search(20);
console.log('Value 20 found:', result2); // false
```

## Example

```javascript
const DecisionTree = require('adv-dsa').DecisionTree;

const decisionTree = new DecisionTree();
decisionTree.insert(10);
decisionTree.insert(5);
decisionTree.insert(15);
decisionTree.insert(2);
decisionTree.insert(7);

const result = decisionTree.search(7);
console.log('Value 7 found:', result); // true

const result2 = decisionTree.search(20);
console.log('Value 20 found:', result2); // false
```

This code demonstrates how to create a decision tree, insert values, and search for specific values.

## Test Cases

You can use the provided test cases to verify that the `DecisionTree` class works as expected. Here's how you can run the test cases:

1. Import the `DecisionTree` class in your test file.

```javascript
const DecisionTree = require('adv-dsa').DecisionTree;
```

2. Use the `expect` function from your testing framework to assert the results of the `search` method.

```javascript
// Example test case
const decisionTree = new DecisionTree();
decisionTree.insert(10);
decisionTree.insert(5);
decisionTree.insert(15);
decisionTree.insert(2);
decisionTree.insert(7);

const result = decisionTree.search(7);
expect(result).toBe(true);
```

Ensure that your test suite validates the correctness of the decision tree algorithm, especially in handling the insertion and searching of values.
