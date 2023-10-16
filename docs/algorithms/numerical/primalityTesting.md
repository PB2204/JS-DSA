# Primality Testing

The `PrimalityTesting` class provides methods for testing whether a given number is prime or composite. It uses the Miller-Rabin primality test, a probabilistic algorithm that can quickly determine whether a number is prime with a specified number of iterations.

## Usage

To use the `PrimalityTesting` class in your JavaScript project, follow these steps:

1. Import the `PrimalityTesting` class from your module.

```javascript
const PrimalityTesting = require('adv-dsa').PrimalityTesting;
```

2. Use the `isPrime` method to test the primality of a number, optionally specifying the number of iterations.

```javascript
const number = 29;
const isPrime = PrimalityTesting.isPrime(number);
console.log(`${number} is prime: ${isPrime}`); // Output: 29 is prime: true
```

This is how you can use the `PrimalityTesting` class to test the primality of a number.

## Example

```javascript
const PrimalityTesting = require('adv-dsa').PrimalityTesting;

const number = 29;
const isPrime = PrimalityTesting.isPrime(number);
console.log(`${number} is prime: ${isPrime}`); // Output: 29 is prime: true
```

This example demonstrates how to use the `PrimalityTesting` class to test whether a number is prime.

## Test Cases

You can use the provided test cases to verify that the `PrimalityTesting` class works as expected.

1. Import the necessary modules in your test file.

```javascript
const PrimalityTesting = require('adv-dsa').PrimalityTesting;
```

2. Use the `expect` function from your testing framework to assert the results of the test cases. You can add more test cases for different numbers and scenarios.

```javascript
// Example test case for testing primality of a prime number
const primeNumber = 29;
expect(PrimalityTesting.isPrime(primeNumber)).toBe(true);

// Example test case for testing primality of a composite number
const compositeNumber = 77;
expect(PrimalityTesting.isPrime(compositeNumber)).toBe(false);

// Additional test cases for factorizeNumber, getRandomWitness, and modularExponentiation can be included as needed.
```

This documentation should help users understand how to use the `PrimalityTesting` class from your package, how to test the primality of a number, and how to run the provided test cases.