# JavaScript Set Data Structure

The JavaScript Set data structure is implemented in the `Set` class, which allows you to store a collection of unique elements. In a Set, each element can occur only once. Here is how you can use the `Set` class:

## Introduction

To get started with the `Set` class, you can install the package via npm using the following command:

```bash
npm install adv-dsa
```

## Example Usage

### Creating a Set
You can create a new Set using the `Set` class:

```javascript
const Set = require('adv-dsa');

// Initialize a new set
const mySet = new Set();
```

### Adding Elements
You can add elements to the set using the `add` method:

```javascript
mySet.add(1);
mySet.add(2);
mySet.add(3);

// The set now contains [1, 2, 3]
```

The `add` method returns `true` if the element was added and `false` if the element is already in the set.

### Checking for Element Existence
You can check if an element exists in the set using the `has` method:

```javascript
const hasOne = mySet.has(1); // Returns true
const hasFour = mySet.has(4); // Returns false
```

### Removing Elements
To remove an element from the set, use the `delete` method:

```javascript
mySet.delete(2); // Returns true, as 2 was removed
mySet.delete(4); // Returns false, as 4 was not in the set
```

### Getting All Elements
You can get an array of all elements in the set using the `values` method:

```javascript
const elements = mySet.values(); // Returns [1, 3]
```

### Checking the Size of the Set
You can get the number of elements in the set using the `size` method:

```javascript
const setSize = mySet.size(); // Returns 2
```

### Clearing the Set
To remove all elements from the set, use the `clear` method:

```javascript
mySet.clear(); // The set is now empty
```

## Testing

You can also test the `Set` class using the provided test cases in your test file (e.g., `test.js`). Make sure to import the `Set` class and use the `assert` module for testing:

```javascript
const assert = require('assert');
const Set = require('adv-dsa');

// Your test cases go here
```

## Conclusion

The `Set` class in JavaScript allows you to manage a collection of unique elements. It is useful for various scenarios where you need to store and manipulate distinct values.
