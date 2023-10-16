# Longest Common Subsequence Algorithm

The Longest Common Subsequence (LCS) algorithm is used to find the longest sequence of characters that appears in the same order in two given strings. It is a classic dynamic programming problem used in various applications, such as text comparison and DNA sequence alignment.

## Usage

To use the Longest Common Subsequence algorithm in your JavaScript project, you can follow these steps:

1. Import the `LongestCommonSubsequence` class.

```javascript
const LongestCommonSubsequence = require('adv-dsa').LongestCommonSubsequence;
```

2. Create an instance of the `LongestCommonSubsequence` class.

```javascript
const lcs = new LongestCommonSubsequence();
```

3. Use the `findLCS` method to find the longest common subsequence between two strings.

```javascript
const str1 = 'AGGTAB';
const str2 = 'GXTXAYB';
const lcsResult = lcs.findLCS(str1, str2);
console.log(`The longest common subsequence is: ${lcsResult}`);
```

## Example

```javascript
const LongestCommonSubsequence = require('adv-dsa').LongestCommonSubsequence;
const lcs = new LongestCommonSubsequence();

const str1 = 'AGGTAB';
const str2 = 'GXTXAYB';
const lcsResult = lcs.findLCS(str1, str2);
console.log(`The longest common subsequence is: ${lcsResult}`);
```

This code will output:

```
The longest common subsequence is: GTAB
```

## Test Cases

You can also use the provided test cases to verify that the `LongestCommonSubsequence` class works as expected. Here's how you can run the test cases:

1. Import the `LongestCommonSubsequence` class in your test file.

```javascript
const LongestCommonSubsequence = require('adv-dsa').LongestCommonSubsequence;
```

2. Create an instance of the `LongestCommonSubsequence` class in your test cases.

```javascript
const lcs = new LongestCommonSubsequence();
```

3. Use the `expect` function from your testing framework to assert the results of the `findLCS` method.

```javascript
// Example test case
const str1 = 'AGGTAB';
const str2 = 'GXTXAYB';
expect(lcs.findLCS(str1, str2)).toBe('GTAB');
```

Make sure to run your test suite to validate the correctness of the Longest Common Subsequence algorithm implementation.
