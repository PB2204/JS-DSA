# JavaScript Trie Data Structure

The JavaScript Trie data structure is implemented in the `Trie` class, which allows you to efficiently store, search for, and check word prefixes. Here's how to use the `Trie` class:

## Introduction

To get started with the `Trie` class, you can install the package via npm using the following command:

```bash
npm install adv-dsa
```

## Example Usage

### Creating a Trie
You can create a new Trie using the `Trie` class:

```javascript
const Trie = require('adv-dsa');

// Initialize a new Trie
const trie = new Trie();
```

### Inserting Words
You can insert words into the Trie using the `insert` method:

```javascript
trie.insert('apple');
trie.insert('app');
trie.insert('banana');
```

### Searching for Words
You can search for words in the Trie using the `search` method:

```javascript
const isApplePresent = trie.search('apple'); // true
const isBananaPresent = trie.search('banana'); // true
const isOrangePresent = trie.search('orange'); // false
```

### Checking for Word Prefixes
You can check for word prefixes in the Trie using the `startsWith` method:

```javascript
const startsWithApp = trie.startsWith('app'); // true
const startsWithBan = trie.startsWith('ban'); // true
const startsWithOr = trie.startsWith('or'); // false
```

## Testing

You can also test the `Trie` class using the provided test cases in your test file (e.g., `test.js`). Make sure to import the `Trie` class and use the `assert` module for testing:

```javascript
const assert = require('assert');
const Trie = require('adv-dsa');

// Your test cases go here
```

## Conclusion

The `Trie` class in JavaScript allows you to efficiently store and manage a collection of words, search for words, and check for word prefixes. It is commonly used in applications related to autocomplete, spell checking, and word-based data retrieval.
