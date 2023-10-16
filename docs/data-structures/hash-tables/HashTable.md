# JS-DSA (JavaScript Data Structures and Algorithms)

## Introduction
"JS-DSA" is a JavaScript package that provides a `HashTable` class. This class implements a basic hash table data structure, which allows you to store and retrieve key-value pairs efficiently. Hash tables are commonly used to store data with fast access times based on keys.

To get started, you can install the package via npm using the following command:

```bash
npm install adv-dsa
```

## Example Usage

### Creating a HashTable
To use the `HashTable` class, first, import it into your JavaScript code:

```javascript
const HashTable = require('adv-dsa');

// Initialize a HashTable instance with an optional size (default is 100)
const table = new HashTable();
```

### Inserting Key-Value Pairs
You can insert key-value pairs into the hash table using the `insert` method:

```javascript
table.insert('name', 'Alice');
table.insert('age', 30);
```

### Retrieving Values
To retrieve the value associated with a key, use the `get` method:

```javascript
const name = table.get('name'); // Returns 'Alice'
const age = table.get('age'); // Returns 30
```

### Handling Key Collisions
The hash table handles key collisions by chaining, i.e., multiple key-value pairs with the same index are stored in a linked list:

```javascript
table.insert('apple', 'fruit');
table.insert('apples', 'fruits');
table.insert('banana', 'yellow');

const apple = table.get('apple'); // Returns 'fruit'
const apples = table.get('apples'); // Returns 'fruits'
const banana = table.get('banana'); // Returns 'yellow'
```

### Removing Key-Value Pairs
You can remove key-value pairs from the hash table using the `remove` method:

```javascript
table.remove('name');
```

### Handling Nonexistent Keys
If you try to get a value for a key that does not exist, the `get` method will return `null`.

```javascript
const nonexistent = table.get('nonexistent'); // Returns null
```

## Testing

You can also test the "JS-DSA" package using the provided test cases in your test file (e.g., `test.js`). Make sure to import the `HashTable` class and use the `assert` module for testing:

```javascript
const assert = require('assert');
const HashTable = require('adv-dsa');

// Your test cases go here
```

## Conclusion
"JS-DSA" offers a basic but powerful `HashTable` class for managing key-value pairs. This data structure is useful in various applications, including caching, fast lookup tables, and more.
