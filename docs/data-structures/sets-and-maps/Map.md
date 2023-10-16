# JS-DSA (JavaScript Data Structures and Algorithms)

## Introduction
"JS-DSA" is a JavaScript package that provides a `Map` class, which implements a simple key-value map (dictionary) data structure. A map is a collection of key-value pairs, where each key is unique.

To get started, you can install the package via npm using the following command:

```bash
npm install adv-dsa
```

## Example Usage

### Creating a Map
To use the `Map` class, first, import it into your JavaScript code:

```javascript
const Map = require('adv-dsa');

// Initialize a Map instance
const map = new Map();
```

### Setting Key-Value Pairs
You can add key-value pairs to the map using the `set` method:

```javascript
map.set('name', 'Alice');
map.set('age', 30);
```

### Getting Values by Key
To retrieve values associated with keys, use the `get` method. If a key doesn't exist, it returns `undefined`:

```javascript
const name = map.get('name'); // Returns 'Alice'
const age = map.get('age');   // Returns 30
```

### Checking Key Existence
You can check if a key exists in the map using the `has` method:

```javascript
const hasName = map.has('name'); // Returns true
const hasEmail = map.has('email'); // Returns false
```

### Deleting Key-Value Pairs
To remove a key-value pair from the map, use the `delete` method:

```javascript
map.delete('name');
map.delete('age');
```

### Retrieving Keys and Values
The `keys` and `values` methods return arrays of all keys and values in the map, respectively:

```javascript
const keys = map.keys();   // Returns ['age']
const values = map.values(); // Returns [30]
```

### Checking the Size of the Map
You can get the number of key-value pairs in the map using the `size` method:

```javascript
const mapSize = map.size(); // Returns 1
```

### Clearing the Map
To remove all key-value pairs from the map, use the `clear` method:

```javascript
map.clear();
```

## Testing

You can also test the "JS-DSA" package using the provided test cases in your test file (e.g., `test.js`). Make sure to import the `Map` class and use the `assert` module for testing:

```javascript
const assert = require('assert');
const Map = require('adv-dsa');

// Your test cases go here
```

## Conclusion
"JS-DSA" provides a versatile `Map` class for managing key-value mappings. This data structure is essential for various applications, including data storage, configuration management, and more.
