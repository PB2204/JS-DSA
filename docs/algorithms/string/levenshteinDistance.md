# Levenshtein Distance Algorithm

## Usage

To use the Levenshtein Distance algorithm from the "JS-DSA" package, follow these steps:

1. Import the LevenshteinDistance class into your JavaScript file.

```javascript
const LevenshteinDistance = require('adv-dsa/algorithms/string/levenshteinDistance');
```

2. Call the `computeDistance` method with two input strings to calculate the Levenshtein distance between them.

### Parameters:

- `str1` (string): The first input string.
- `str2` (string): The second input string.

### Return Value:

- An integer representing the Levenshtein distance between `str1` and `str2`.

## Example

Here's an example of how to use the Levenshtein Distance algorithm:

```javascript
const LevenshteinDistance = require('adv-dsa/algorithms/string/levenshteinDistance');

const str1 = 'kitten';
const str2 = 'sitting';

const distance = LevenshteinDistance.computeDistance(str1, str2);

console.log(`The Levenshtein distance between '${str1}' and '${str2}' is ${distance}.`);
```

This code will output:

```
The Levenshtein distance between 'kitten' and 'sitting' is 3.
```

## Test Cases

You can validate the correctness of the Levenshtein Distance algorithm using test cases. Here are some test cases and their expected results:

- **Test Case 1:** Calculate the Levenshtein distance between two identical strings.

```javascript
it('should compute the Levenshtein distance between two identical strings', () => {
    const str1 = 'kitten';
    const str2 = 'kitten';

    const distance = LevenshteinDistance.computeDistance(str1, str2);

    expect(distance).toBe(0);
});
```

- **Test Case 2:** Calculate the Levenshtein distance between two different strings.

```javascript
it('should compute the Levenshtein distance between two different strings', () => {
    const str1 = 'kitten';
    const str2 = 'sitting';

    const distance = LevenshteinDistance.computeDistance(str1, str2);

    expect(distance).toBe(3);
});
```

- **Test Case 3:** Handle one empty string.

```javascript
it('should handle one empty string', () => {
    const str1 = 'kitten';
    const str2 = '';

    const distance = LevenshteinDistance.computeDistance(str1, str2);

    expect(distance).toBe(6);
});
```

- **Test Case 4:** Handle both empty strings.

```javascript
it('should handle both empty strings', () => {
    const str1 = '';
    const str2 = '';

    const distance = LevenshteinDistance.computeDistance(str1, str2);

    expect(distance).toBe(0);
});
```

- **Test Case 5:** Handle one string being a prefix of the other.

```javascript
it('should handle one string being a prefix of the other', () => {
    const str1 = 'hello';
    const str2 = 'hello world';

    const distance = LevenshteinDistance.computeDistance(str1, str2);

    expect(distance).toBe(6);
});
```

You can follow this structure for other algorithms and their test cases in our Markdown documentation.