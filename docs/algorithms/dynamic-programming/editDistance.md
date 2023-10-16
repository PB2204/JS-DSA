# Edit Distance Algorithm

The Edit Distance algorithm, also known as Levenshtein Distance, is used to find the minimum number of operations required to transform one string into another. These operations can be insertions, deletions, or replacements. It is a dynamic programming algorithm that is widely used in spell checking, DNA sequence comparison, and more.

## Usage

To use the Edit Distance algorithm in your JavaScript project, you can follow these steps:

1. Import the `EditDistance` class.

```javascript
const EditDistance = require('adv-dsa').EditDistance;
```

2. Create an instance of the `EditDistance` class.

```javascript
const editDistance = new EditDistance();
```

3. Use the `findEditDistance` method to calculate the edit distance between two strings.

```javascript
const str1 = 'kitten';
const str2 = 'sitting';
const distance = editDistance.findEditDistance(str1, str2);
console.log(`Edit distance between "${str1}" and "${str2}" is ${distance}`);
```

## Example

```javascript
const EditDistance = require('adv-dsa').EditDistance;
const editDistance = new EditDistance();

const str1 = 'kitten';
const str2 = 'sitting';
const distance = editDistance.findEditDistance(str1, str2);
console.log(`Edit distance between "${str1}" and "${str2}" is ${distance}`);
```

This code will output:

```
Edit distance between "kitten" and "sitting" is 3
```

## Test Cases

You can also use the provided test cases to ensure that the `EditDistance` class works as expected. Here's how you can run the test cases:

1. Import the `EditDistance` class in your test file.

```javascript
const EditDistance = require('adv-dsa').EditDistance;
```

2. Create an instance of the `EditDistance` class in your test cases.

```javascript
const editDistance = new EditDistance();
```

3. Use the `expect` function from your testing framework to assert the results of the `findEditDistance` method.

```javascript
// Example test case
const str1 = 'kitten';
const str2 = 'sitting';
expect(editDistance.findEditDistance(str1, str2)).toBe(3);
```

Make sure to run your test suite to validate the correctness of the Edit Distance algorithm implementation.