# Linear Regression Algorithm

Linear regression is a statistical method for modeling the relationship between a dependent variable and one or more independent variables. Simple linear regression focuses on a single independent variable and a linear relationship between variables.

## Usage

To use the Linear Regression algorithm in your JavaScript project, follow these steps:

1. Import the `LinearRegression` class and create an instance of it.

```javascript
const LinearRegression = require('adv-dsa').LinearRegression;

const lr = new LinearRegression();
```

2. Fit the model to the provided data using the `fit` method. The input data should be an array of data points, where each data point is an array with two values: `[x, y]`.

```javascript
const data = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
];

lr.fit(data);
```

3. After fitting the model, you can predict the output for a given input using the `predict` method.

```javascript
const predictedValue = lr.predict(inputValue);
```

This is how you can use the Linear Regression algorithm in your project to fit a model to data and make predictions.

## Example

```javascript
const LinearRegression = require('adv-dsa').LinearRegression;

const data = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
];

const lr = new LinearRegression();
lr.fit(data);

const predictedValue = lr.predict(6);

console.log(predictedValue);
```

This example demonstrates how to use the Linear Regression algorithm to fit a linear model to data and predict the output for a given input.

## Test Cases

You can use the provided test cases to verify that the `LinearRegression` class works as expected, including handling cases with insufficient data.

1. Import the `LinearRegression` class in your test file.

```javascript
const LinearRegression = require('adv-dsa').LinearRegression;
```

2. Use the `expect` function from your testing framework to assert the results of fitting the model and making predictions. Ensure that you handle the case with insufficient data using a test case.

```javascript
// Example test case
const data = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
];

const lr = new LinearRegression();
lr.fit(data);

expect(lr.coefficients.intercept).toBeCloseTo(1.0, 6);
expect(lr.coefficients.slope).toBeCloseTo(1.0, 6);
```
