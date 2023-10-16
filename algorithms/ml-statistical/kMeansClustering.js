class KMeansClustering {
    constructor(data, k) {
        if (!data || data.length === 0) {
            throw new Error('Data must not be empty.');
        }

        this.data = data; // An array of data points
        this.k = k; // The number of clusters

        this.centroids = this.initializeCentroids();
        this.clusters = this.initializeClusters();
    }

    initializeCentroids() {
        // Randomly initialize centroids
        const centroids = [];
        const dataCopy = [...this.data];
        for (let i = 0; i < this.k; i++) {
            const randomIndex = Math.floor(Math.random() * dataCopy.length);
            centroids.push(dataCopy.splice(randomIndex, 1)[0]);
        }
        return centroids;
    }

    initializeClusters() {
        // Create clusters for each centroid
        return new Array(this.k).fill(null).map(() => []);
    }

    euclideanDistance(point1, point2) {
        // Calculate the Euclidean distance between two data points
        if (point1.length !== point2.length) {
            throw new Error('Data points must have the same dimension');
        }
        let sum = 0;
        for (let i = 0; i < point1.length; i++) {
            sum += Math.pow(point1[i] - point2[i], 2);
        }
        return Math.sqrt(sum);
    }

    assignToClusters() {
        // Assign data points to the nearest cluster
        this.clusters = new Array(this.k).fill(null).map(() => []);

        for (const dataPoint of this.data) {
            let minDistance = Number.POSITIVE_INFINITY;
            let clusterIndex = 0;

            for (let i = 0; i < this.k; i++) {
                const distance = this.euclideanDistance(dataPoint, this.centroids[i]);
                if (distance < minDistance) {
                    minDistance = distance;
                    clusterIndex = i;
                }
            }

            this.clusters[clusterIndex].push(dataPoint);
        }
    }

    updateCentroids() {
        // Calculate new centroids for each cluster
        for (let i = 0; i < this.k; i++) {
            if (this.clusters[i].length === 0) continue;

            const newCentroid = this.clusters[i][0].map((_, j) => {
                return (
                    this.clusters[i].reduce((sum, dataPoint) => sum + dataPoint[j], 0) /
                    this.clusters[i].length
                );
            });

            this.centroids[i] = newCentroid;
        }
    }

    cluster() {
        // Perform k-means clustering
        const maxIterations = 100;
        let iterations = 0;

        while (iterations < maxIterations) {
            this.assignToClusters();
            const oldCentroids = [...this.centroids];
            this.updateCentroids();

            // Check for convergence
            if (this.centroids.every((centroid, i) => this.euclideanDistance(centroid, oldCentroids[i]) === 0)) {
                break;
            }

            iterations++;
        }

        return this.clusters;
    }
}

module.exports = KMeansClustering;
