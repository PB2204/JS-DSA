# UtilityFunctions

The `UtilityFunctions` class contains static utility methods for performing common mathematical operations on arrays of numbers.

## Methods

### `sum(arr: number[]): number`

Calculates the sum of all the elements in the given array of numbers.

- `arr` (Array of Numbers): The array of numbers to calculate the sum for.

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5];
const sumResult = UtilityFunctions.sum(numbers); // Returns 15
```

### `average(arr: number[]): number`

Calculates the average (mean) of all the elements in the given array of numbers.

- `arr` (Array of Numbers): The array of numbers to calculate the average for.

**Example:**

```javascript
const numbers = [2, 4, 6, 8, 10];
const averageResult = UtilityFunctions.average(numbers); // Returns 6
```

## Testing

You can use the provided test cases to ensure the correctness of these utility functions. The test cases use the Jest testing framework.

### Running Tests

1. Make sure you have Jest installed (you can install it using `npm install jest`).
2. Run the tests using the following command:

```bash
npx jest
```

## Conclusion

The `UtilityFunctions` class provides convenient methods for calculating the sum and average of an array of numbers. These methods are useful for a variety of scenarios in which you need to perform basic mathematical calculations on data sets.
