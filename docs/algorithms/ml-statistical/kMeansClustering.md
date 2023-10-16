# K-Means Clustering Algorithm

K-Means clustering is an unsupervised machine learning algorithm used to partition a dataset into clusters based on similarity. It's a popular method for grouping data into clusters where data points within the same cluster are more similar to each other than to those in other clusters.

## Usage

To use the K-Means Clustering algorithm in your JavaScript project, follow these steps:

1. Import the `KMeansClustering` class and create an instance with your dataset and the desired number of clusters (k).

```javascript
const KMeansClustering = require('adv-dsa').KMeansClustering;

const data = [
    [1, 2],
    [2, 3],
    [8, 7],
    [9, 8],
    [11, 13],
    [14, 15],
];
const k = 3;

const kMeans = new KMeansClustering(data, k);
```

2. Call the `cluster` method to perform K-Means clustering.

```javascript
const clusters = kMeans.cluster();
```

3. The `clusters` variable now contains an array of clusters. Each cluster is represented as an array of data points belonging to that cluster.

```javascript
console.log(clusters);
```

This is how you can use the K-Means Clustering algorithm in your project. It will partition the data into the specified number of clusters based on similarity.

## Example

```javascript
const KMeansClustering = require('adv-dsa').KMeansClustering;

const data = [
    [1, 2],
    [2, 3],
    [8, 7],
    [9, 8],
    [11, 13],
    [14, 15],
];
const k = 3;

const kMeans = new KMeansClustering(data, k);
const clusters = kMeans.cluster();

console.log(clusters);
```

This example demonstrates how to use the K-Means Clustering algorithm to cluster data into three clusters.

## Test Cases

You can use the provided test cases to verify that the `KMeansClustering` class works as expected. Here's how you can run the test cases:

1. Import the `KMeansClustering` class in your test file.

```javascript
const KMeansClustering = require('adv-dsa').KMeansClustering;
```

2. Use the `expect` function from your testing framework to assert the results of the clustering and handle any potential errors, such as empty data.

```javascript
// Example test case
const data = [
    [1, 2],
    [2, 3],
    [8, 7],
    [9, 8],
    [11, 13],
    [14, 15],
];
const k = 3;

const kMeans = new KMeansClustering(data, k);
const clusters = kMeans.cluster();

expect(clusters.length).toBe(k);
```

Ensure that your test suite validates the correctness of the K-Means Clustering algorithm, especially in handling different scenarios like empty data, clusters with a single data point, and clusters with multiple data points.
