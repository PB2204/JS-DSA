# Convex Hull Algorithm

The Convex Hull is a fundamental problem in computational geometry that finds the smallest convex polygon that encloses a set of points. The convex hull is a polygon with vertices that form the outer boundary of the given points.

## Usage

To use the Convex Hull algorithm in your JavaScript project, you can follow these steps:

1. Import the `ConvexHull` class.

```javascript
const ConvexHull = require('adv-dsa').ConvexHull;
```

2. Use the `findConvexHull` static method to find the convex hull of a given array of points.

```javascript
const points = [
    { x: 0, y: 3 },
    { x: 2, y: 2 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 3, y: 0 },
    { x: 0, y: 0 },
    { x: 3, y: 3 },
];

const hull = ConvexHull.findConvexHull(points);
console.log('The convex hull is:', hull);
```

## Example

```javascript
const ConvexHull = require('adv-dsa').ConvexHull;

const points = [
    { x: 0, y: 3 },
    { x: 2, y: 2 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 3, y: 0 },
    { x: 0, y: 0 },
    { x: 3, y: 3 },
];

const hull = ConvexHull.findConvexHull(points);
console.log('The convex hull is:', hull);
```

This code will output the convex hull of the given set of points:

```bash
The convex hull is: [
    { x: 0, y: 0 },
    { x: 3, y: 0 },
    { x: 3, y: 3 },
    { x: 0, y: 3 }
]
```

## Test Cases

You can also use the provided test cases to verify that the `ConvexHull` class works as expected. Here's how you can run the test cases:

1. Import the `ConvexHull` class in your test file.

```javascript
const ConvexHull = require('adv-dsa').ConvexHull;
```

2. Use the `expect` function from your testing framework to assert the results of the `findConvexHull` method.

```javascript
// Example test case
const points = [
    { x: 0, y: 3 },
    { x: 2, y: 2 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 3, y: 0 },
    { x: 0, y: 0 },
    { x: 3, y: 3 },
];
expect(ConvexHull.findConvexHull(points)).toEqual([
    { x: 0, y: 0 },
    { x: 3, y: 0 },
    { x: 3, y: 3 },
    { x: 0, y: 3 }
]);
```

Make sure to run your test suite to validate the correctness of the Convex Hull algorithm implementation.
