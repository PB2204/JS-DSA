# Matrix Chain Multiplication Algorithm

The Matrix Chain Multiplication algorithm is used to find the optimal way to multiply a sequence of matrices to minimize the total number of multiplications. It is an important problem in computer science and is commonly used in various applications, such as in computer graphics and optimization.

## Usage

To use the Matrix Chain Multiplication algorithm in your JavaScript project, you can follow these steps:

1. Import the `MatrixChainMultiplication` class.

```javascript
const MatrixChainMultiplication = require('adv-dsa').MatrixChainMultiplication;
```

2. Create an instance of the `MatrixChainMultiplication` class.

```javascript
const matrixChain = new MatrixChainMultiplication();
```

3. Use the `findMinMultiplications` method to find the minimum number of multiplications for a matrix chain.

```javascript
const dimensions = [10, 30, 5, 60];
const minMultiplications = matrixChain.findMinMultiplications(dimensions);
console.log(`The minimum number of multiplications is ${minMultiplications}`);
```

## Example

```javascript
const MatrixChainMultiplication = require('adv-dsa').MatrixChainMultiplication;
const matrixChain = new MatrixChainMultiplication();

const dimensions = [10, 30, 5, 60];
const minMultiplications = matrixChain.findMinMultiplications(dimensions);
console.log(`The minimum number of multiplications is ${minMultiplications}`);
```

This code will output:

```
The minimum number of multiplications is 4500
```

## Test Cases

You can also use the provided test cases to verify that the `MatrixChainMultiplication` class works as expected. Here's how you can run the test cases:

1. Import the `MatrixChainMultiplication` class in your test file.

```javascript
const MatrixChainMultiplication = require('adv-dsa').MatrixChainMultiplication;
```

2. Create an instance of the `MatrixChainMultiplication` class in your test cases.

```javascript
const matrixChain = new MatrixChainMultiplication();
```

3. Use the `expect` function from your testing framework to assert the results of the `findMinMultiplications` method.

```javascript
// Example test case
const dimensions = [10, 30, 5, 60];
expect(matrixChain.findMinMultiplications(dimensions)).toBe(4500);
```

Make sure to run your test suite to validate the correctness of the Matrix Chain Multiplication algorithm implementation.
