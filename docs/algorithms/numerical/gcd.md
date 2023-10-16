# GCD (Greatest Common Divisor) and LCM (Least Common Multiple)

The `GCD` class provides methods for calculating the greatest common divisor (GCD), least common multiple (LCM), and GCD of an array of numbers. These calculations are fundamental in number theory and have many applications in various domains.

## Usage

To use the `GCD` class in your JavaScript project, follow these steps:

1. Import the `GCD` class from your module.

```javascript
const GCD = require('adv-dsa').GCD;
```

2. Use the methods to calculate GCD, LCM, or GCD of an array of numbers.

```javascript
const a = 12;
const b = 18;

const gcd = GCD.findGCD(a, b);
console.log(`GCD of ${a} and ${b}: ${gcd}`); // Output: GCD of 12 and 18: 6

const lcm = GCD.findLCM(a, b);
console.log(`LCM of ${a} and ${b}: ${lcm}`); // Output: LCM of 12 and 18: 36

const numbers = [12, 18, 24, 6];
const gcdOfArray = GCD.findGCDOfArray(numbers);
console.log(`GCD of [${numbers.join(', ')}]: ${gcdOfArray}`); // Output: GCD of [12, 18, 24, 6]: 6
```

This is how you can use the `GCD` class to perform GCD and LCM calculations.

## Example

```javascript
const GCD = require('adv-dsa').GCD;

const a = 12;
const b = 18;

const gcd = GCD.findGCD(a, b);
console.log(`GCD of ${a} and ${b}: ${gcd}`); // Output: GCD of 12 and 18: 6

const lcm = GCD.findLCM(a, b);
console.log(`LCM of ${a} and ${b}: ${lcm}`); // Output: LCM of 12 and 18: 36

const numbers = [12, 18, 24, 6];
const gcdOfArray = GCD.findGCDOfArray(numbers);
console.log(`GCD of [${numbers.join(', ')}]: ${gcdOfArray}`); // Output: GCD of [12, 18, 24, 6]: 6
```

This example demonstrates how to use the `GCD` class for GCD and LCM calculations.

## Test Cases

You can use the provided test cases to verify that the `GCD` class works as expected.

1. Import the necessary modules in your test file.

```javascript
const GCD = require('adv-dsa').GCD;
```

2. Use the `expect` function from your testing framework to assert the results of the GCD, LCM, and GCD of an array methods. You can add more test cases for different scenarios.

```javascript
// Example test case for finding GCD
const a = 12;
const b = 18;
const gcd = GCD.findGCD(a, b);
expect(gcd).toBe(6);

// Example test case for finding LCM
const lcm = GCD.findLCM(a, b);
expect(lcm).toBe(36);

// Example test case for finding GCD of an array
const numbers = [12, 18, 24, 6];
const gcdOfArray = GCD.findGCDOfArray(numbers);
expect(gcdOfArray).toBe(6);
```

This documentation should help users understand how to use the `GCD` class from your package, how to calculate GCD, LCM, and GCD of an array of numbers, and how to run the provided test cases.