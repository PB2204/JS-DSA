const ClosestPairOfPoints = require('../../../algorithms/geometry/closestPairOfPoints');

describe('ClosestPairOfPoints', () => {
    it('should find the closest pair of points', () => {
        const points = [
            { x: 0, y: 0 },
            { x: 2, y: 2 },
            { x: 5, y: 3 },
            { x: 6, y: 7 },
            { x: 7, y: 8 },
            { x: 9, y: 1 },
        ];

        const closestPair = ClosestPairOfPoints.findClosestPair(points);

        expect(closestPair).toEqual([{ x: 6, y: 7 }, { x: 7, y: 8 }]);
    });

    it('should handle a set of points with only two points', () => {
        const points = [
            { x: 0, y: 0 },
            { x: 1, y: 1 },
        ];

        const closestPair = ClosestPairOfPoints.findClosestPair(points);

        expect(closestPair).toEqual(points);
    });

    it('should handle a set of points with less than two points', () => {
        const points = [{ x: 0, y: 0 }];

        const closestPair = ClosestPairOfPoints.findClosestPair(points);

        expect(closestPair).toEqual([]);
    });
});
