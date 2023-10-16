# Logistic Regression Algorithm

Logistic regression is a statistical method used for modeling the relationship between a binary outcome and one or more predictor variables. It predicts the probability of an instance belonging to the positive class.

## Usage

To use the Logistic Regression algorithm in your JavaScript project, follow these steps:

1. Import the `LogisticRegression` class and create an instance of it.

```javascript
const LogisticRegression = require('adv-dsa').LogisticRegression;

const lr = new LogisticRegression();
```

2. Fit the model to the provided data using the `fit` method. The input data should be an array of data points, where each data point is an array containing the features and the binary outcome, i.e., `[x1, x2, ..., xn, y]`, where `y` is the binary outcome (0 or 1).

```javascript
const data = [
    [1, 2, 0],
    [2, 3, 1],
    [3, 4, 0],
    [4, 5, 1],
    [5, 6, 0],
];

lr.fit(data);
```

3. After fitting the model, you can predict the probability of an instance belonging to the positive class using the `predict` method. Provide the features as an array.

```javascript
const features = [1, 2];
const probability = lr.predict(features);
```

This is how you can use the Logistic Regression algorithm in your project to fit a model to data and predict the probability.

## Example

```javascript
const LogisticRegression = require('adv-dsa').LogisticRegression;

const data = [
    [1, 2, 0],
    [2, 3, 1],
    [3, 4, 0],
    [4, 5, 1],
    [5, 6, 0],
];

const lr = new LogisticRegression();
lr.fit(data);

const features = [1, 2];
const probability = lr.predict(features);

console.log(probability);
```

This example demonstrates how to use the Logistic Regression algorithm to fit a logistic model to data and predict the probability of an instance belonging to the positive class.

## Test Cases

You can use the provided test cases to verify that the `LogisticRegression` class works as expected. One of the test cases is for handling empty data.

1. Import the `LogisticRegression` class in your test file.

```javascript
const LogisticRegression = require('adv-dsa').LogisticRegression;
```

2. Use the `expect` function from your testing framework to assert the results of fitting the model and making predictions. Consider adding additional test cases for different scenarios.

```javascript
// Example test case
const data = [
    [1, 2, 0],
    [2, 3, 1],
    [3, 4, 0],
    [4, 5, 1],
    [5, 6, 0],
];

const lr = new LogisticRegression();
lr.fit(data);

const features = [1, 2];
const probability = lr.predict(features);

expect(probability).toBeCloseTo(0.5274996, 6);
```
