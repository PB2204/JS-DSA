# Randomized Primality Testing

The `RandomizedPrimalityTesting` class provides methods for probabilistic primality testing of BigInt numbers. It uses a randomized algorithm to determine whether a number is prime or composite.

## Usage

To use the `RandomizedPrimalityTesting` class in your JavaScript or TypeScript project, follow these steps:

1. Import the `RandomizedPrimalityTesting` class from your module.

```javascript
const RandomizedPrimalityTesting = require('adv-dsa').RandomizedPrimalityTesting;
```

2. Create an instance of the class.

```javascript
const rpt = new RandomizedPrimalityTesting();
```

3. Use the `isPrime` method to test the primality of a BigInt number by providing the number and the number of iterations (witnesses) for the test.

```javascript
const number = 29n; // A BigInt number
const iterations = 5; // Number of iterations (witnesses)
const isPrime = rpt.isPrime(number, iterations);
console.log(`${number} is prime: ${isPrime}`); // Output: 29 is prime: true
```

This is how you can use the `RandomizedPrimalityTesting` class to test whether a BigInt number is prime.

## Example

```javascript
const RandomizedPrimalityTesting = require('adv-dsa').RandomizedPrimalityTesting;

const rpt = new RandomizedPrimalityTesting();
const number = 29n;
const isPrime = rpt.isPrime(number, 5);
console.log(`${number} is prime: ${isPrime}`); // Output: 29 is prime: true
```

This example demonstrates how to use the `RandomizedPrimalityTesting` class to test the primality of a BigInt number.

## Test Cases

You can use the provided test cases to verify that the `RandomizedPrimalityTesting` class works as expected.

1. Import the necessary modules in your test file.

```javascript
const RandomizedPrimalityTesting = require('adv-dsa').RandomizedPrimalityTesting;
```

2. Use the `expect` function from your testing framework to assert the results of the test cases.

```javascript
const rpt = new RandomizedPrimalityTesting();

// Example test case for testing primality of a prime BigInt number
const primeNumber = 29n;
expect(rpt.isPrime(primeNumber, 5)).toBe(true);

// Example test case for testing primality of a composite BigInt number
const compositeNumber = 77n;
expect(rpt.isPrime(compositeNumber, 5)).toBe(false);

// Additional test cases can be added as needed.
```

This documentation should help users understand how to use the `RandomizedPrimalityTesting` class from your package, how to test the primality of a BigInt number, and how to run the provided test cases.