# Knapsack Algorithm

The Knapsack algorithm is used to solve the 0/1 Knapsack problem, which is a classic optimization problem. Given a set of items, each with a weight and a value, the goal is to determine the items to include in a knapsack to maximize the total value while not exceeding a given capacity.

## Usage

To use the Knapsack algorithm in your JavaScript project, follow these steps:

1. Import the `Knapsack` class.

```javascript
const Knapsack = require('adv-dsa').Knapsack;
```

2. Create an instance of the `Knapsack` class.

```javascript
const knapsack = new Knapsack();
```

3. Use the `findMaxValue` method to find the maximum value for the Knapsack problem.

```javascript
const weights = [2, 2, 3];
const values = [2, 3, 5];
const capacity = 4;

const maxValue = knapsack.findMaxValue(weights, values, capacity);
console.log(`The maximum value for the knapsack problem is ${maxValue}`);
```

## Example

```javascript
const Knapsack = require('adv-dsa').Knapsack;
const knapsack = new Knapsack();

const weights = [2, 2, 3];
const values = [2, 3, 5];
const capacity = 4;

const maxValue = knapsack.findMaxValue(weights, values, capacity);
console.log(`The maximum value for the knapsack problem is ${maxValue}`);
```

This code will output:

```
The maximum value for the knapsack problem is 5
```

## Test Cases

You can also use the provided test cases to verify that the `Knapsack` class works as expected. Here's how you can run the test cases:

1. Import the `Knapsack` class in your test file.

```javascript
const Knapsack = require('adv-dsa').Knapsack;
```

2. Create an instance of the `Knapsack` class in your test cases.

```javascript
const knapsack = new Knapsack();
```

3. Use the `expect` function from your testing framework to assert the results of the `findMaxValue` method.

```javascript
// Example test case
const weights = [2, 2, 3];
const values = [2, 3, 5];
const capacity = 4;
expect(knapsack.findMaxValue(weights, values, capacity)).toBe(5);
```

Make sure to run your test suite to validate the correctness of the Knapsack algorithm implementation.
