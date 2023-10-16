# Longest Common Substring Algorithm

## Usage

To use the Longest Common Substring algorithm from the "JS-DSA" package, follow these steps:

1. Import the `LongestCommonSubstring` class into your JavaScript file.

```javascript
const LongestCommonSubstring = require('adv-dsa').LongestCommonSubstring;
```

2. Call the `findLongestCommonSubstring` method with two input strings to find the longest common substring.

### Parameters:

- `str1` (string): The first input string.
- `str2` (string): The second input string.

### Return Value:

- A string representing the longest common substring found in `str1` and `str2`.

## Example

Here's an example of how to use the Longest Common Substring algorithm:

```javascript
const LongestCommonSubstring = require('adv-dsa').LongestCommonSubstring;

const str1 = 'abcdefgh';
const str2 = 'cdefg';

const commonSubstring = LongestCommonSubstring.findLongestCommonSubstring(str1, str2);

console.log(`The longest common substring between '${str1}' and '${str2}' is '${commonSubstring}'.`);
```

This code will output:

```
The longest common substring between 'abcdefgh' and 'cdefg' is 'cdefg'.
```

## Test Cases

You can validate the correctness of the Longest Common Substring algorithm using test cases. Here are some test cases and their expected results:

- **Test Case 1:** Find the longest common substring between two identical strings.

```javascript
it('should find the longest common substring between two identical strings', () => {
    const str1 = 'hello';
    const str2 = 'hello';

    const commonSubstring = LongestCommonSubstring.findLongestCommonSubstring(str1, str2);

    expect(commonSubstring).toBe('hello');
});
```

- **Test Case 2:** Find the longest common substring between two different strings.

```javascript
it('should find the longest common substring between two different strings', () => {
    const str1 = 'abcdefgh';
    const str2 = 'cdefg';

    const commonSubstring = LongestCommonSubstring.findLongestCommonSubstring(str1, str2);

    expect(commonSubstring).toBe('cdefg');
});
```

- **Test Case 3:** Handle no common substring between two strings.

```javascript
it('should handle no common substring between two strings', () => {
    const str1 = 'abcdef';
    const str2 = 'xyz';

    const commonSubstring = LongestCommonSubstring.findLongestCommonSubstring(str1, str2);

    expect(commonSubstring).toBe('');
});
```

- **Test Case 4:** Handle one empty string.

```javascript
it('should handle one empty string', () => {
    const str1 = 'abc';
    const str2 = '';

    const commonSubstring = LongestCommonSubstring.findLongestCommonSubstring(str1, str2);

    expect(commonSubstring).toBe('');
});
```

- **Test Case 5:** Handle both empty strings.

```javascript
it('should handle both empty strings', () => {
    const str1 = '';
    const str2 = '';

    const commonSubstring = LongestCommonSubstring.findLongestCommonSubstring(str1, str2);

    expect(commonSubstring).toBe('');
});
```

You can follow this structure for other algorithms and their test cases in our Markdown documentation.