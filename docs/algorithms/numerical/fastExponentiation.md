# Fast Exponentiation

The Fast Exponentiation class provides a method for calculating exponentiation efficiently using the fast exponentiation algorithm. This algorithm reduces the number of multiplications required to calculate the result of raising a number to a given exponent.

## Usage

To use the Fast Exponentiation class in your JavaScript project, follow these steps:

1. Import the `FastExponentiation` class from your module.

```javascript
const FastExponentiation = require('adv-dsa').FastExponentiation;
```

2. Use the `power` method to calculate exponentiation.

```javascript
const base = 2;
const exponent = 5;
const result = FastExponentiation.power(base, exponent);
console.log(result); // Output: 32
```

This is how you can use the Fast Exponentiation class to efficiently calculate exponentiation.

## Example

```javascript
const FastExponentiation = require('adv-dsa').FastExponentiation;

const base = 2;
const exponent = 5;
const result = FastExponentiation.power(base, exponent);

console.log(result); // Output: 32
```

This example demonstrates how to use the Fast Exponentiation class to calculate exponentiation.

## Test Cases

You can use the provided test cases to verify that the `FastExponentiation` class works as expected.

1. Import the necessary modules in your test file.

```javascript
const FastExponentiation = require('adv-dsa').FastExponentiation;
```

2. Use the `expect` function from your testing framework to assert the results of the `power` method. You can add more test cases for different scenarios.

```javascript
// Example test case
const base = 2;
const exponent = 5;
const result = FastExponentiation.power(base, exponent);

expect(result).toBe(32);
```

This documentation should help users understand how to use the Fast Exponentiation class from your package, how to efficiently calculate exponentiation, and how to run the provided test cases.