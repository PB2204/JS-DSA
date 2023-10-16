# Fibonacci Algorithm

The Fibonacci algorithm calculates the nth Fibonacci number efficiently using dynamic programming with memoization. It is a well-known algorithm used to compute the Fibonacci sequence, which is a series of numbers where each number is the sum of the two preceding ones.

## Usage

To use the Fibonacci algorithm in your JavaScript project, follow these steps:

1. Import the `Fibonacci` class.

```javascript
const Fibonacci = require('adv-dsa').Fibonacci;
```

2. Create an instance of the `Fibonacci` class.

```javascript
const fibonacci = new Fibonacci();
```

3. Use the `calculateFibonacci` method to calculate the nth Fibonacci number.

```javascript
const n = 10; // Calculate the 10th Fibonacci number
const result = fibonacci.calculateFibonacci(n);
console.log(`The ${n}th Fibonacci number is ${result}`);
```

## Example

```javascript
const Fibonacci = require('adv-dsa').Fibonacci;
const fibonacci = new Fibonacci();

const n = 10; // Calculate the 10th Fibonacci number
const result = fibonacci.calculateFibonacci(n);
console.log(`The ${n}th Fibonacci number is ${result}`);
```

This code will output:

```
The 10th Fibonacci number is 55
```

## Test Cases

You can also use the provided test cases to verify that the `Fibonacci` class works as expected. Here's how you can run the test cases:

1. Import the `Fibonacci` class in your test file.

```javascript
const Fibonacci = require('adv-dsa').Fibonacci;
```

2. Create an instance of the `Fibonacci` class in your test cases.

```javascript
const fibonacci = new Fibonacci();
```

3. Use the `expect` function from your testing framework to assert the results of the `calculateFibonacci` method.

```javascript
// Example test case
expect(fibonacci.calculateFibonacci(10)).toBe(55);
```

Make sure to run your test suite to validate the correctness of the Fibonacci algorithm implementation.
