# JS-DSA :: JavaScript Data Structures and Algorithms

JS-DSA is a comprehensive collection of data structures and algorithms implemented in JavaScript. This project is designed to be a helpful resource for developers, students, and anyone interested in learning about data structures and algorithms through practical JavaScript examples.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Practical Examples](#practical-examples)
- [Contribution Details](CONTRIBUTING.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Learning Resources](LEARN.md)
- [License](#license)
- [Developer Options](#developer-options)

## Installation

You can install JS-DSA using either npm or yarn. First, clone the repository to your local machine:

```bash
git clone https://github.com/pb2204/JS-DSA.git
cd JS-DSA
```

### Using npm

```bash
npm install adv-dsa
```

### Using yarn

```bash
yarn add adv-dsa
```

## Usage

JS-DSA provides a wide range of data structures and algorithms. You can utilize them by importing the necessary classes into your JavaScript projects.

```javascript
// Example of using a Stack from the data structures module
const Stack = require('adv-dsa').Stack;

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // Outputs: 3
```

For detailed information on how to use each data structure and algorithm, consult the `LEARN.md` document in this repository.

## Practical Examples

Let's look at some practical examples of using JS-DSA classes:

### Example 1: Binary Search

```javascript
const binarySearch = require('adv-dsa').BinarySearch;

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;

const index = binarySearch(sortedArray, target);
console.log(`Index of ${target} is ${index}`);
```

### Example 2: QuickSort

```javascript
const quickSort = require('adv-dsa').QuickSort;

const unsortedArray = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quickSort(unsortedArray);

console.log(sortedArray);
```

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contribution Details

For developers who want to contribute to this project or want to report issues, please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) guide.

## Code of Conduct

Please follow our [Code of Conduct](CODE_OF_CONDUCT.md) to foster an open and welcoming environment for everyone.

## Learning Resources

Check out the [LEARN.md](LEARN.md) file for learning resources related to data structures and algorithms.

Feel free to contribute, provide feedback, and help us improve this project for the community!

## Developer Details

- Name :: [Pabitra Banerjee](https://pabitrabanerjee.me)
- Email :: [Pabitra Banerjee](mailto:rockstarpabitra2204@gmail.com)
- GitHub :: [Pabitra Banerjee](https://github.com/PB2204)

# Happy Coding !!!
