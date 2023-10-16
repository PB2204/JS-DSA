# Line Intersection Algorithm

The Line Intersection algorithm is used to find the intersection points of multiple lines. It can determine if and where lines intersect in two-dimensional space.

## Usage

To use the Line Intersection algorithm in your JavaScript project, you can follow these steps:

1. Import the `LineIntersection` class.

```javascript
const LineIntersection = require('adv-dsa').LineIntersection;
```

2. Use the `findIntersections` static method to find intersection points among an array of lines.

```javascript
const lines = [
    { x1: 0, y1: 0, x2: 2, y2: 2 },
    { x1: 1, y1: 0, x2: 1, y2: 3 },
    { x1: 2, y1: 0, x2: 2, y2: 2 },
    { x1: 3, y1: 0, x2: 3, y2: 3 },
];

const intersections = LineIntersection.findIntersections(lines);
console.log('Intersection points are:', intersections);
```

## Example

```javascript
const LineIntersection = require('adv-dsa').LineIntersection;

const lines = [
    { x1: 0, y1: 0, x2: 2, y2: 2 },
    { x1: 1, y1: 0, x2: 1, y2: 3 },
    { x1: 2, y1: 0, x2: 2, y2: 2 },
    { x1: 3, y1: 0, x2: 3, y2: 3 },
];

const intersections = LineIntersection.findIntersections(lines);
console.log('Intersection points are:', intersections);
```

This code will output the intersection points of the given lines:

```
Intersection points are: [{ x: 1, y: 1 }, { x: 2, y: 2 }]
```

## Test Cases

You can also use the provided test cases to verify that the `LineIntersection` class works as expected. Here's how you can run the test cases:

1. Import the `LineIntersection` class in your test file.

```javascript
const LineIntersection = require('adv-dsa').LineIntersection;
```

2. Use the `expect` function from your testing framework to assert the results of the `findIntersections` method.

```javascript
// Example test case
const lines = [
    { x1: 0, y1: 0, x2: 2, y2: 2 },
    { x1: 1, y1: 0, x2: 1, y2: 3 },
    { x1: 2, y1: 0, x2: 2, y2: 2 },
    { x1: 3, y1: 0, x2: 3, y2: 3 },
];
expect(LineIntersection.findIntersections(lines)).toEqual([{ x: 1, y: 1 }, { x: 2, y: 2 }]);
```

Make sure to run your test suite to validate the correctness of the Line Intersection algorithm implementation.
