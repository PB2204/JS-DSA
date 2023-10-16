# String Matching Algorithm

## Usage

To use the String Matching algorithm from the "JS-DSA" package, follow these steps:

1. Import the `StringMatching` class into your JavaScript file.

```javascript
const StringMatching = require('adv-dsa').StringMatching;
```

2. Call the `findSubstringOccurrences` method with two input strings to find occurrences of a substring in a text.

### Parameters:

- `text` (string): The text in which you want to find occurrences of the substring.
- `substring` (string): The substring you want to find in the text.

### Return Value:

- An array containing the starting indices of occurrences of the `substring` in the `text`.

## Example

Here's an example of how to use the String Matching algorithm:

```javascript
const StringMatching = require('adv-dsa').StringMatching;

const text = 'text with pattern pattern pattern';
const substring = 'pattern';

const occurrences = StringMatching.findSubstringOccurrences(text, substring);

console.log(`Occurrences of '${substring}' in the text: ${occurrences.join(', ')}`);
```

This code will output:

```
Occurrences of 'pattern' in the text: 10, 18, 26
```

## Test Cases

You can validate the correctness of the String Matching algorithm using test cases. Here are some test cases and their expected results:

- **Test Case 1:** Return an empty array when given an empty string.

```javascript
it('should return an empty array when given an empty string', () => {
    const text = '';
    const substring = 'pattern';

    const occurrences = StringMatching.findSubstringOccurrences(text, substring);

    expect(occurrences).toEqual([]);
});
```

- **Test Case 2:** Return an empty array when given an empty substring.

```javascript
it('should return an empty array when given an empty substring', () => {
    const text = 'text with no pattern';
    const substring = '';

    const occurrences = StringMatching.findSubstringOccurrences(text, substring);

    expect(occurrences).toEqual([]);
});
```

- **Test Case 3:** Find occurrences of the substring in the text.

```javascript
it('should find occurrences of the substring in the text', () => {
    const text = 'text with pattern pattern pattern';
    const substring = 'pattern';

    const occurrences = StringMatching.findSubstringOccurrences(text, substring);

    expect(occurrences).toEqual([10, 18, 26]);
});
```

- **Test Case 4:** Return an empty array when no occurrences are found.

```javascript
it('should return an empty array when no occurrences are found', () => {
    const text = 'text with no pattern';
    const substring = 'missing';

    const occurrences = StringMatching.findSubstringOccurrences(text, substring);

    expect(occurrences).toEqual([]);
});
```

You can follow this structure for other algorithms and their test cases in our Markdown documentation.