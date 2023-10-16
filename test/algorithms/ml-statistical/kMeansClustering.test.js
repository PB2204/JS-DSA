const KMeansClustering = require('../../../algorithms/ml-statistical/kMeansClustering');

describe('KMeansClustering', () => {
    it('should cluster data into 3 clusters', () => {
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
    });

    it('should return clusters of data points', () => {
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

        expect(clusters).toBeInstanceOf(Array);
        clusters.forEach((cluster) => {
            expect(cluster).toBeInstanceOf(Array);
        });
    });

    it('should throw an error with empty data', () => {
        const data = [];
        const k = 3;
        expect(() => new KMeansClustering(data, k)).toThrow('Data must not be empty.');
    });

    it('should handle clusters with a single data point', () => {
        const data = [
            [1, 2],
            [2, 3],
            [8, 7],
        ];
        const k = 3;

        const kMeans = new KMeansClustering(data, k);
        const clusters = kMeans.cluster();

        expect(clusters.length).toBe(k);
        clusters.forEach((cluster) => {
            expect(cluster.length).toBe(1);
        });
    });

    it('should handle clusters with multiple data points', () => {
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
        clusters.forEach((cluster) => {
            expect(cluster.length).toBeGreaterThan(1);
        });
    });
});
